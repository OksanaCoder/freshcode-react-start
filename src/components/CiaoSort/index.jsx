import React from "react";

const CiaoSort = (props) => {
  const { sortUsersByFirstName, isSortFirstNameUp, sortUsersById, isSortIdUp } =
    props;
  return (
    <div>
      <button onClick={sortUsersByFirstName}>
        sort by first name {isSortFirstNameUp ? "up" : "down"}
      </button>
      <button onClick={sortUsersById}>
        sort by id {isSortIdUp ? "up" : "down"}
      </button>
    </div>
  );
};

export default CiaoSort;
