import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  return <ApiContext.Provider value={{}}>{children}</ApiContext.Provider>;
};
