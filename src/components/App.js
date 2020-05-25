import React from "react";
import Header from "./Header";
<<<<<<< HEAD
import ContestList from './ContestList'

const pushState =(obj, url) =>{
  window.history.pushState(obj, "", url)
}

=======
import ContestPreview from "./ContestPreview";
import axios from "axios";
>>>>>>> master

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
<<<<<<< HEAD
    
=======
    axios
      .get("/api/contests")
      .then((resp) => {
        this.setState({
          contests: resp.data.contests,
        });
      })
      .catch(console.error);
>>>>>>> master
  }

  componentWillUnmount() {
    console.log("will unmount ");
    //cleantimers, listeners
  }

<<<<<<< HEAD
  fetchContest =(contestId)=>{
    pushState(
      {currentContestId : contestId},
      `/contest/${contestId}`
    )
  }

=======
>>>>>>> master
  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
<<<<<<< HEAD
        <ContestList 
        onContestClick={this.fetchContest}
        contests={this.state.contests}/>
=======
        <div>
          {this.state.contests.map((contest) => (
            <ContestPreview key={contest.id} {...contest} />
          ))}
        </div>
>>>>>>> master
      </div>
    );
  }
}

export default App;
