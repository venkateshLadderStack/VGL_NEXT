import React, { useState } from "react";

const Context = React.createContext();

const ContextProvider = (props) => {
  const [open, setOpen] = React.useState(false);
  const [signup, setSignup] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 7000);
  }, []);

  return (
    <Context.Provider
      value={{
        open,
        signup,
        closePopup: () => {
          setOpen(false);
          setSignup(true);
        },
        closeSignup: () => {
          setSignup(false);
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
