// App.js
import React, { useState } from 'react';
import UserContext from './UserContext';

import ComponentA from './ComponentA';

function App() {
  const [user] = useState({ username: 'timk' });

  return (
    <div>
      <UserContext.Provider value={user}>
       <ComponentA />
      </UserContext.Provider>
    </div>
  );
}

export default App;
