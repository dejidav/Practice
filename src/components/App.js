import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";
import Contest from "./Contest";
import * as api from "../api";
import propTypes from "prop-types";

const pushState = (obj, url) => {
  window.history.pushState(obj, "", url);
};

const onPopState = (handler) => {
  window.onpopstate = handler;
};

class App extends React.Component {
  static propTypes = {
    initialData: propTypes.object.isRequired,
  };
  state = this.props.initialData;

  componentDidMount() {
    onPopState((event) => {
      this.setState({
        currentContestId: (event.state || {}).currentContestId,
      });
    });
  }

  componentWillUnmount() {
    onPopState(null)
    //cleantimers, listeners
  }

  fetchContest = (contestId) => {
    pushState({ currentContestId: contestId }, `/contests/${contestId}`);

    api.fetchContest(contestId).then((contest) => {
      this.setState({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest,
        },
      });
    });
  };

  fetchContestList = () => {
    pushState({ currentContestId: null }, `/`);

    api.fetchContestList().then((contests) => {
      this.setState({
        currentContestId: null,
        contests,
      });
    });
  };

  //this.state.contests[contestId]
  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest.contestName;
    }

    return "Naming contest";
  }

  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }

  currentcontent() {
    if (this.state.currentContestId) {
      return (
        <Contest
          contestListClick={this.fetchContestList}
          {...this.currentContest()}
        />
      );
    }

    return (
      <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests}
      />
    );
  }
  render() {
    return (
      <div>
        <Header message={this.pageHeader()} />
        {this.currentcontent()}
      </div>
    );
  }
}

export default App;
