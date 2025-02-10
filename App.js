import React, { useState } from "react";

//counter component

const ThemeToggler=()=>{
  const [theme,setTheme] = useState('light')

  const toggleTheme = () =>{
    setTheme(prevTheme=>(prevTheme == 'light' ? 'dark' : 'light'))
  }

  return(
    <div style={{backgroundColor:theme=='light'?'white':'black' , color:theme=='light'? 'black':'white' ,textAlign:'center'}}>
      <h1>The Current theme is {theme}</h1>
      <button onClick={toggleTheme}>toggleTheme</button>
    </div>
  )

}
export default ThemeToggler;