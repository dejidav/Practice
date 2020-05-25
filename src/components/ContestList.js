import React from "react";
import ContestPreview from "./ContestPreview";
import propTypes from "prop-types";

const ContestList = ({ contests, onContestClick }) => (
  <div className="contest-list">
    {contests.map((contest) => (
      <ContestPreview key={contest.id} 
      onClick={onContestClick}
      {...contest} />
    ))}
  </div>
);

ContestList.propTypes = {
  contests: propTypes.array,
  onContestClick: propTypes.func.isRequired
};

export default ContestList;
