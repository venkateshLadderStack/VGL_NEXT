import React from "react";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import ImageComponent from "../ImageComponent";
import NewNewsLetter from "../Newsletter/NewNewsLetter";

const NewSidebar = ({ posts }) => {
  const { width } = useWindowSize();

  return (
    <div className="sidebar_wp">
      <div className="sidebar_wrapper" style={{ overflowX: "hidden" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h3 className="sidebar_title">Must-Read Stories</h3>
        </div>

        {posts.edges.slice(0, 4).map(({ node }, index) => (
          <div key={index} className={`sidebar_container `}>
            <Link href={`/blog/${node.id}`} passHref>
              <>
                <div className="sidebar_left">
                  <ImageComponent
                    alt=""
                    width={width > 767 ? "70" : "100"}
                    height={width > 767 ? "70" : "100"}
                    layout="fixed"
                    src={node?.featuredImage?.node?.mediaItemUrl}
                    blurDataURL={node?.featuredImage?.node?.mediaItemUrl}
                    loading={"lazy"}
                  />
                </div>

                <div className="sidebar_right">
                  <h4> {node?.title}</h4>
                </div>
              </>
            </Link>
          </div>
        ))}
        {width < 768 && (
          <div className="vgl_pageable-load-more-btn">
            <div className="vgl_btn-container vgl-btn-load_more vgl_btn-inline">
              <Link href="/blog/features" className="vgl_general vgl_btn3">
                More articles
              </Link>
            </div>
          </div>
        )}
        {width < 767 && (
          <div
            style={{
              width: "100%",
              height: "1px",
              borderTop: "2px solid rgb(253 211 194)",
              opacity: 0.7,
              margin: "20px 0px 50px 0px",
            }}
          />
        )}
        <NewNewsLetter />
      </div>
    </div>
  );
};

export default NewSidebar;
