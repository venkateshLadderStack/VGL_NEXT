import React from "react";
import { useStyles } from "./style";
import Link from "next/link";

export default function PostFilter({ list, slCat, onCategoryChanged }) {
  const classes = useStyles();
  return (
    <div
      className={`${classes.root} ${classes.filterTextRight} ${classes.filterGrid}`}
    >
      {list
        .filter(({ node }) => node.name !== "Uncategorized")
        .filter(({ node }) => node.name !== "True Life")
        .map(({ node }, i) => (
          <Link key={i} href={`/read/${node.slug}`} passHref>
            <div
              className={`${classes.filterGridItem} ${
                slCat === node.databaseId && classes.filterItemActive
              }`}
            >
              <span>{node.name}</span>
            </div>
          </Link>
        ))}
    </div>
  );
}
