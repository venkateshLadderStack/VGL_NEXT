import React from "react";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), {
  loading: () => <p>...</p>,
});

const NewNewsLetter = dynamic(() => import("../Newsletter/NewNewsLetter"), {
  loading: () => <p>...</p>,
});

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
            <>
              <div className="sidebar_left">
                <Link href={node.uri} passHref>
                  <Image
                    alt=""
                    width={width > 767 ? "70" : "100"}
                    height={width > 767 ? "70" : "100"}
                    layout="fixed"
                    placeholder="blur"
                    src={node?.featuredImage?.node?.mediaItemUrl}
                    blurDataURL={node?.featuredImage?.node?.mediaItemUrl}
                    loading="lazy"
                  />
                </Link>
              </div>

              <div className="sidebar_right">
                <Link href={node.uri} passHref>
                  <h4> {node?.title}</h4>
                </Link>
              </div>
            </>
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
