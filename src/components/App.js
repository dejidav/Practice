import React from "react";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: "Contest page",
    };
  }

  componentDidMount() {
    console.log("did mount");
    debugger;
  }

  componentWillUnmount() {
    console.log("will unmount ");
    debugger;
  }
  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
      </div>
    );
  }
}

export default App;
