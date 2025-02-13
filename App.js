import React,{createContext, useContext}from 'react';
const DataContext = createContext();

function App(){
  const data="Hello I am vigneshwar"
  return(
    <DataContext.Provider value={data}>
<User1></User1>
    </DataContext.Provider>
  )
}
// user1 compomnent
function User1({data}){
  return<User2 />
}
function User2({data}){
  return<User3/>
}
function User3({data}){
  return<User4 />
}
function User4(){
  const data=useContext(DataContext)
  return<div>{data}</div>
}
export default App;