import React, { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebase";

export const UserContext = createContext({ user: null });

export default (props) => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email } = user;
        setuser({
          displayName,
          email,

        });
        console.log(displayName);
      }
    });
  }, []);
// phani, this is not safe due to memory leaks
// please https://stackoverflow.com/a/55370253/12683933

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
