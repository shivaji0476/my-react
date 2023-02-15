import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Contactus() {
  return (
    <>
      <Header />

      <div className="row ">
        <h1 className="text-center  p-3 text-danger">Contact us</h1>
        <div className="col-md p-5 mt-3 ">
          <div className="p-3   rounded-3 boxshadow mb-5 card1">
            <h1 className="fs-2">
              <i
                class="fa fa-phone-square mr-2 text-success"
                aria-hidden="true"
              ></i>
              Call us
            </h1>
            <p className="fs-4">97877857 , 988576687</p>
          </div>
          <div className="p-3 boxshadow rounded-3 card1">
            <h1 className="fs-2">
              <i
                class="fa fa-map-marker mr-2 text-primary"
                aria-hidden="true"
              ></i>
              location
            </h1>
            <p className="fs-4"> 121, rock street , 21 avenue ,bangaluru</p>
          </div>
          <div className="p-3 boxshadow rounded-3 card1 my-5">
            <h1 className="fs-3">
              <i class="fa fa-hourglass mr-2 " aria-hidden="true"></i>24
              business hours
            </h1>
            <p className="fs-4">mon-fri ...10 am - 8 pm sun-closed</p>
          </div>
        </div>
        <div className="mr-2 col-md  p-5 ">
          <form action="/index.php"  method="post" className="p-3 ">
            <label className="fs-5" htmlFor="name">
              FullName:
            </label>
            <br />

            <input
              className="formwidth border boxshadow "
              type="text"
              id="name"
              placeholder="Enter Your Name"
            />
            <br />
            <br />
            <label className="fs-5" htmlFor="number">
              Number
            </label>
            <br />

            <input
              className="formwidth border boxshadow "
              type="number"
              id="number"
              placeholder="Enter Your Number"
            />
            <br />
            <br />
            <label className="fs-5" htmlFor="name">
              Email Id:
            </label>
            <br />

            <input
              className="formwidth border boxshadow "
              type="email"
              id="email"
              placeholder="Enter Your Email"
            />
            <br />
            <br />
            <label className="fs-5" htmlFor="message">
              Description:
            </label>
            <br />

            <textarea
              name="message"
              id="message"
              cols="60"
              rows="7"
              placeholder="Enter Your Message"
              className="formwidth boxshadow "
            ></textarea>
            <br />
            <br />
            <button className="btn btn-primary formwidth boxshadow ">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contactus;
