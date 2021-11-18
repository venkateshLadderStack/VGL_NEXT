import React from "react";
import dayjs from "dayjs";
import useWindowSize from "../hooks/useWindowSize";
import dynamic from "next/dynamic";
import Link from "next/link";

const Image = dynamic(() => import("next/image"), {
  loading: () => <p></p>,
});
const Author = ({ post, className }) => {
  const { width } = useWindowSize();

  return (
    <div>
      <div className="author_details">
        <div className="author_details_1">
          <div className="author_img">
            <div>
              <Image
                alt=""
                src={
                  post?.bylines?.edges[0]?.node?.bylineImage.image
                    ? post?.bylines?.edges[0]?.node?.bylineImage.image.sourceUrl
                    : "https://secure.gravatar.com/avatar/5c2747a85444b8b7d2af69029ef17bf8?s=112&amp;d=mm&amp;r=g"
                }
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                blurDataURL={
                  post?.bylines?.edges[0]?.node?.bylineImage.image
                    ? post?.bylines?.edges[0]?.node?.bylineImage.image.sourceUrl
                    : "https://secure.gravatar.com/avatar/5c2747a85444b8b7d2af69029ef17bf8?s=112&amp;d=mm&amp;r=g"
                }
                loading="lazy"
              />
            </div>
          </div>
          <div className="author_name">
            <div className="by">by </div>
            <Link href={post?.bylines?.edges[0]?.node?.uri} passHref>
              <div className="name_auth">
                {post?.bylines?.edges.length > 0
                  ? post?.bylines?.edges[0]?.node?.name
                  : post?.author?.node?.name}
              </div>
            </Link>
          </div>
          {width >= 768 && (
            <div style={{ width: "20px", textAlign: "center" }}>{" | "}</div>
          )}
        </div>

        <div className="author_details_2">
          <div className="pub_date">
            {dayjs(post?.date).format("MMMM DD, YYYY")}
          </div>
          <div style={{ width: "20px", textAlign: "center" }}>{" | "}</div>
          <div className="read_time">
            {" "}
            {post?.post_read_time?.readTime} Min Read
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
