import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./style";
import Axios from "axios";

export default function MainNewsLetter() {
  const classes = useStyles();
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
      await Axios.post("https://verygoodlight.herokuapp.com/", body)
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
    <div className={classes.root}>
      <div className={classes.rootInner}>
        <Grid container>
          <Grid item sm={12} md={12} lg={12} xl={12}>
            <div className={classes.vglInnerColumn}>
              <div>
                <div className={classes.vglContentElement}>
                  <div>
                    <h2 className={classes.vglContentHeading}>
                      Light Up Your Inbox
                    </h2>
                    <p className={classes.vglContentDesc}>
                      By subscribing to our fancy newsletter. We promise never
                      to spam (unless, musubi).
                    </p>
                  </div>
                </div>
                <div className={classes.vglContentElement}>
                  <div>
                    <div className={classes.formContainer}>
                      <div
                        className={`vgl-form-private-css ${classes.vglFormOuter}`}
                      >
                        <form
                          className="vgl-form-private-cid vgl-form-private-css"
                          style={{ marginBottom: 0, padding: 0 }}
                          noValidate
                          tabIndex={-1}
                          onSubmit={handleSubmit}
                        >
                          <div className="Ndwyt vgl-form-private-css">
                            <div className="vgl-kjldr vgl-form-private-css">
                              <div className="vgl-hzrdp vgl-form-private-css">
                                <div className="vgl-bQDdTc vgl-form-private-css">
                                  <input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    aria-label="Enter your email"
                                    aria-invalid={false}
                                    valid={1}
                                    required={true}
                                    className="vgl-dbGGfJ vgl-klaviyo-form-WRPbM8 vgl-form-private-css"
                                    onChange={handleChange}
                                    value={email}
                                  />
                                  <div className="vgl-kKQEmZ  vgl-form-private-css"></div>
                                </div>
                              </div>
                              <div className="vgl-byxcWS vgl-form-private-css">
                                <button
                                  type="submit"
                                  tabIndex={0}
                                  className="vgl__ePZOrn vgl-klaviyo-form-WRPbM8 vgl-form-private-css"
                                >
                                  Subscribe
                                </button>
                              </div>
                            </div>
                          </div>
                          <input
                            tabIndex={-1}
                            type="submit"
                            value="submit"
                            className="vgl-form-private-css"
                            style={{ display: "none" }}
                          />
                        </form>
                      </div>
                    </div>
                    {error && (
                      <p
                        style={{
                          textAlign: "center",
                          color: "red",
                          marginTop: -25,
                          marginBottom: 25,
                          fontSize: 18,
                        }}
                      >
                        {message}
                      </p>
                    )}
                    {success && (
                      <p
                        style={{
                          textAlign: "center",
                          color: "green",
                          marginTop: -25,
                          marginBottom: 25,
                          fontSize: 18,
                        }}
                      >
                        {message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
