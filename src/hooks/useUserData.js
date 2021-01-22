import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function useUserData() {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios.get('api/users/1')
      .then(all => {
        setUser(prev => ({
          ...prev,
          user: all.data.user
        }))
      })
      .catch(e => console.error(e));
  }, []);

  return { user };
};