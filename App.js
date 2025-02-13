import React, { createContext, useContext } from "react";


const UserContext = createContext();

function App() {
  const user = {
    name: "saicharan",
    email: "charan@gmail.com"
  };

  return (
    <UserContext.Provider value={user}>
      <User1 />
    </UserContext.Provider>
  );
}

function User1() {
  return <User2 />;
}

function User2() {
  return <User3 />;
}

function User3() {
  return <Profile />;
}


function Profile() {
  const user = useContext(UserContext);
  
  return (
    <div>
     <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default App;