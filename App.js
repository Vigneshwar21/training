import React,{use, useState} from "react";

function App(){
  const[isHovered, setIsHovered] = useState(false);
  const handleMouseEnter=()=>{
    setIsHovered(true);
  }
  const handleMouseLeave=()=>{
    setIsHovered(false);
  }

  return(
    <div>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      style={{backgroundColor:isHovered ? 'lightblue':'lightgray',color:isHovered ? 'white':'black'}}
      >Hover</button>

      {isHovered && <p>Mouse is over the button</p>}
    </div>
  )
}
export default App;