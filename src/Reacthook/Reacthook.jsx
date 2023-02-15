import React, { useState } from 'react'

function Reacthook() {
    
    let [image , setimage] = useState("https://www.movingsolutions.in/blog/wp-content/uploads/2021/02/iba-approved-packers-and-movers-in-pune.jpg")
       
  return (
    <div>

        <h1>my favoriteb color is {}</h1>
        <img src={image} alt="" />
        <button onClick={()=>setimage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjKURCrTy3_zknq12cg_ir9yzdvv8yL895TMF5zPAIGmi1A1IIvq5AHQK9gh3yoti7F8&usqp=CAU")}> change img</button>

       
        

    </div>
  ) 
}

export default Reacthook