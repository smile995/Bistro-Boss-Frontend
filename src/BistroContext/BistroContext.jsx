/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const BistroContextApi = createContext();
const BistroContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, serUser] = useState(null);
  const createUserwithEmailPasswors = (email, password) => {
    createUserwithEmailPasswors(auth, email, password);
  };
  const centralData = {
    loading,
    user,
  };
  return (
    <BistroContextApi.Provider value={centralData}>
      {children}
    </BistroContextApi.Provider>
  );
};

export default BistroContext;
