// ComponentC.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

function ComponentC() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Component C</h1>
      <h2>{`Hello ${user.username}!`}</h2>
    </div>
  );
}

export default ComponentC;
