import React from "react";

function Imgslide({value}){
    return(
        < >
        
        
<div class="containers bg-dark p-3 ">

  <h1 className="py-5  px-3"><i className={value.name} style={{fontSize:'36px'}}></i></h1>
  <p className="py-3 fs-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam sunt repellendus provident totam architecto. Voluptatum asperiores velit facere est voluptatem ducimus architecto minus quis necessitatibus beatae, qui ipsa numquam!</p>
  <div class="overlays">
    <div class="texts">Hello World</div>
  </div>
</div>
        </>
    )
}
export default Imgslide


