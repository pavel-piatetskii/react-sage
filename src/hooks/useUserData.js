import { useState, useEffect } from "react";
import axios from 'axios';

export default function useUserData() {
  const [user, setUser] = useState("");

  useEffect(() => {
    return axios.get('/api/users/1')
      .then(all => {
        setUser(prev => all.data)
      })
      .catch(e => console.error(e));
  }, []);

  return { user };
  
};
