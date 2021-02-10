import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './App';

/**
 * Good {morning, evening, afternoon}, enrique
 */
function Header() {
  const [greeting, setGreeting] = useState('');
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const { username, setUsername } = useContext(UserContext);

  useEffect(() => {
    setUsername('noooo');
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 16) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, [currentHour, setUsername]);

  return (
    <div>
      {greeting} {username}
    </div>
  );
}

export default Header;
