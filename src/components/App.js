import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";
import Contest from "./Contest";
import * as api from "../api";
import propTypes from "prop-types";

const pushState = (obj, url) => {
  window.history.pushState(obj, "", url);
};

class App extends React.Component {
  static propTypes = {
    initialData: propTypes.object.isRequired,
  };
  state = this.props.initialData;

  componentDidMount() {
    console.log("did mount");
  }

  componentWillUnmount() {
    console.log("will unmount ");
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
      return <Contest {...this.currentContest()} />;
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
