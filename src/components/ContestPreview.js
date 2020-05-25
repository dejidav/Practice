<<<<<<< HEAD
import React, { Component } from "react";
import propTypes from "prop-types";

class ContestPreview extends React.Component {
  handleCLick = () => {
    console.log(this.props.contestName);
    this.props.onClick(this.props.id);
  };
  render() {
    return (
      <div className="link ContestPreview" onClick={this.handleCLick}>
        <div className="category-name">{this.props.categoryName}</div>
        <div className="contest-name">{this.props.contestName}</div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  id: propTypes.number.isRequired,
  categoryName: propTypes.string.isRequired,
  contestName: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
=======
import React from "react";

const ContestPreview = (contest) => (
  <div className="ContestPreview">
    <div className="category-name">{contest.categoryName}</div>
    <div className="contest-name">{contest.contestName}</div>
  </div>
);
>>>>>>> master

export default ContestPreview;
