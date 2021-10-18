import React from "react";
import { useStyles } from "./style";

export default function PostFilter({ list, slCat, onCategoryChanged }) {
  const classes = useStyles();
  return (
    <div
      className={`${classes.root} ${classes.filterTextRight} ${classes.filterGrid}`}
    >
      <div
        className={`${classes.filterGridItem} ${
          slCat === 11700 && classes.filterItemActive
        }`}
        onClick={() => onCategoryChanged(11700)}
      >
        <span>All</span>
      </div>

      {list.map(({ node }, i) => (
        <div
          className={`${classes.filterGridItem} ${
            slCat === node.databaseId && classes.filterItemActive
          }`}
          key={i}
          onClick={() => onCategoryChanged(node.databaseId)}
        >
          <span>{node.name}</span>
        </div>
      ))}
    </div>
  );
}
