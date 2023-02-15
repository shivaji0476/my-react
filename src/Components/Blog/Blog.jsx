import React from "react";
import Content3 from "../Content3/Content3";
import Content4 from "../Content4/Content4";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Blog() {
  return (
    <>
      <Header />
      <h1 className="text-center mt-5 ">The Blog</h1>
      
      <div className="row p-5">
        <div className="p-3 col-md">
          <Content4/>
        </div>
        <div className="p-3 col-md">
          <Content4/>
        </div>
        <div className="p-3 col-md">
          <Content4/>
        </div>
      
       
      </div>

      <div className="row p-5 card">
        <div className="col-md  my-3 ">
          <img
            src="https://www.nobroker.in/blog/wp-content/uploads/2018/09/Best-Packers-and-Movers-in-Whitefield.png"
            alt=""
            className="width100 boxshadow "
          />
        </div>
        <div className="col-md  p-5 boxshadow ">
          <h1>Lorem ipsum dolor sit </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
            tempore corporis dolorem voluptate eos quo illum ipsam veritatis
            ullam dolore? Dolores quod enim aut dolorum a minus eos harum
            expedita!
          </p>
          <button className="px-4 btn btn-dark boxshadow card1">BLOG</button>
        </div>
      </div>
      <br />

      <div className="row p-5 ">
        <div className="col-md p-3  ">
          <img
            className="width100 boxshadow rounded-3 card1"
            src="https://www.acerelocations.co.in/wp-content/uploads/2020/06/622536-PNW12Z-901.jpg"
            alt=""
          />
        </div>
        <div className="col-md p-3  ">
          <img
            className="width100 boxshadow rounded-3 card1"
            src="https://www.mrspackersandmovers.com/images/insurance-services.jpg"
            alt=""
          />
        </div>
        <div className="col-md p-3 ">
          <img
            className="width100 boxshadow rounded-3 card1"
            src="https://t4.ftcdn.net/jpg/01/94/84/75/360_F_194847584_pKLIGP6OjVXuzd7HY9VypehJWqqF75qn.jpg"
            alt=""
          />
        </div>
      </div>

      <div></div>
      <div className="row p-5">
        <div className="col-md">
          <img
            src="https://cdn.mrright.in/cdn/content/assets/2015-11/medium/1d1e1e708ec34bcc9b59506932a85455-packers%20and%20movers%20service.jpg?sv=2020-04-08&si=MrRightCDNAccessPolicy&sr=c&sig=%2B6fs9xgu5wLh9HEJ0lNaoOt8HIH6CHQYpw5F0vISsdk%3D"
            alt=""
            className="width100 card1 boxshadow rounded-3"
          />
        </div>
        <div className="col-md p-5 boxshadow">
          <h1>Lorem ipsum dolor sit </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit minus
            ducimus natus! Quasi illo iusto dolore deserunt ipsa. Sunt
            voluptatum natus ad fuga placeat commodi nemo odit. Non, molestias
            illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            consequuntur dolor excepturi aliquid, explicabo molestiae itaque
            saepe, sequi in voluptatibus fugit nam laborum nisi enim alias
            ratione corrupti? Quidem, rerum.
          </p>
          <button className=" btn button2 btn-dark px-3 boxshadow card1 ">
            Myblog
          </button>
        </div>
      </div>
      <div className="row bg-">
        <div className="col-md">
          <Content3/>

        </div>
        <div className="col-md">
          <Content3/>

        </div>
        <div className="col-md">
          <Content3/>

        </div>
        <div className="col-md">
          <Content3/>

        </div>


      </div>
      
      <Footer />
    </>
  );
}

export default Blog;
