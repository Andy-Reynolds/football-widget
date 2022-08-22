import React from "react";

const Tab = ({ active, tabName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? "tab-selector__tab tab-selector__tab--active"
          : "tab-selector__tab"
      }
    >
      {tabName}
    </button>
  );
};

export default Tab;
