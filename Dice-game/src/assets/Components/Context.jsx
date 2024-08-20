import React, { Children, createContext, useContext } from "react";

const UserContext = React.createContext();

const AppContext = ({Children}) => {
  return <UserContext.Provider value="name">{Children}</UserContext.Provider>;
};
export {AppContext};
