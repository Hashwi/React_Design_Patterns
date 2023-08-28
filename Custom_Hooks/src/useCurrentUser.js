import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);
  console.log(user)

  useEffect(() => {
    (async () => {
      try {
        console.log(234)
        const response = await axios.get('./current-user'); 
        setUser(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching current user:', error.message);
      }
    })();
  }, []);

  return user;
};
