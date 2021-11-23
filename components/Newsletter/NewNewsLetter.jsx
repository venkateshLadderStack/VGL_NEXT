import React, { useState, useEffect } from "react";
import Axios from "axios";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), {
  loading: () => <p>...</p>,
});

const NewNewsLetter = ({ right, top }) => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(false);
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      let body = {
        api_key: "pk_4bc3ef005d166379eca153d06ca519a338",
        profiles: [
          {
            email: email,
            property: "vgl newsletter",
          },
        ],
      };
      await Axios.post("http://localhost:3000/", body)
        .then((res) => {
          setError(false);
          setSuccess(true);
          setMessage("Check your email box!");
          setEmail("");
        })
        .catch((err) => {
          setError(true);
          setSuccess(false);
          setMessage("Something went wrong!");
        });
    } else {
      setError(true);
      setSuccess(false);
      setMessage("Email is required!");
    }
  };

  return (
    <div className="newsletter_container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <h3 className="news_title">Light Up Your Inbox</h3>
        <p className="news_subtitle">
          Subscribe to our beauty newsletter. We promise never to spam (unless,
          musubi).
        </p>

        <div className={"envelope"}>
          <Image
            src={"/assets/envelope.png"}
            alt="envelope"
            width="45"
            height="35"
            layout="fixed"
            loading="lazy"
          />
        </div>
        <div className="spark">
          <Image
            src={"/assets/spark.png"}
            alt="spark"
            width="25"
            height="35"
            layout="fixed"
            loading="lazy"
          />
        </div>
      </div>

      <div className="sign_up_container">
        <form onSubmit={handleSubmit} className="sign_up_form">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required={true}
            value={email}
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewNewsLetter;
