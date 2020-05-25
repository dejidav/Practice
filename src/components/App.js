import React from "react";
import Header from "./Header";
import ContestPreview from "./ContestPreview";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: "Contests pages",
      contests: this.props.initialContests,
    };
  }

  componentDidMount() {
    console.log("did mount");
    axios
      .get("/api/contests")
      .then((resp) => {
        this.setState({
          contests: resp.data.contests,
        });
      })
      .catch(console.error);
  }

  componentWillUnmount() {
    console.log("will unmount ");
    //cleantimers, listeners
  }

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map((contest) => (
            <ContestPreview key={contest.id} {...contest} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
