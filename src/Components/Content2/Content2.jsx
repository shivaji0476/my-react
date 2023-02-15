import React from "react";
import { useState } from "react";
import axios from "axios";


     function Content2(){


  return (
    <div className="row ">
      <div className="col-md m-auto zoom bg-dark p-2 height boxshadow">
        <img
          className="opacity "
          src="https://packersandmoversblr.com/wp-content/uploads/2021/07/thsnsign-15.png"
          alt=""
        />
        <div className="overlay1">
          <h1 className="text-warning">packers and movers</h1>
          <ul>
            <li className="p-2 text-white fs-3">
              <i className="fa fa-check text-white p-1 rounded-circle bg-primary  mr-1"></i>{" "}
              100% Safe and Secure
            </li>
            <li className="p-2 text-white fs-3">
              <i className="fa fa-check text-white p-1 rounded-circle bg-primary  mr-1"></i>{" "}
              100% Safe and Secure
            </li>
            <li className="p-2 text-white fs-3">
              <i className="fa fa-check text-white p-1 rounded-circle bg-primary p-1 mr-1"></i>{" "}
              100% Safe and Secure
            </li>
            <li className="p-2 text-white fs-3">
              <i className="fa fa-check text-white p-1 rounded-circle bg-primary p-1 mr-1"></i>{" "}
              100% Safe and Secure
            </li>
            <button className="btn btn-danger p-2 m-5">9976466766</button>
          </ul>
        </div>
      </div>

      <div className="col-md p-5">
        <h1 className="text-warning text-center mt-4">Request a call back</h1>

        <form action="/packers-movers/store" method="post" >
          <div className="row">
            <div className="col">
              <label htmlFor="movingfrom">moving from</label>
              <input
                className="formwidth border boxshadow"
                type="text"
                name="movingfrom"
                
                placeholder="Moving From"
                required
              />
            </div>

            <div className="col">
              <label htmlFor="movingto"> Moving to</label>
              <input
                className="formwidth border boxshadow"
                type="text"
                name="movingto"
                
                placeholder="Moving to"
                required
              />
            </div>
          </div>

          <div className="row p-2">
            <div className="col ">
              <label className="m-1 " htmlFor="beds">
                beds
              </label>
              <input type="checkbox" className="" name="beds" id="beds" />
            </div>
            <div className="col">
              <label className="m-1" htmlFor="tables">
                table
              </label>
              <input type="checkbox" className="" name="tables" id="tables" />
            </div>
            <div className="col">
              <label className="m-1" htmlFor="sofa">
                sofa
              </label>
              <input type="checkbox" className="" name="sofa" id="sofa" />
            </div>
            <div className="col">
              <label className="m-1" htmlFor="tv">
                tv
              </label>
              <input type="checkbox" className="" name="tv" id="tv" />
            </div>
            <div className="col">
              <label className="m-1" htmlFor="Acs">
                Acs
              </label>
              <input type="checkbox" className="" name="Acs" id="Acs" />
            </div>
          </div>

          <div className="row p-2">
            <div className="col">
              <label className="m-1" htmlFor="machine">
                machine
              </label>
              <input type="checkbox" className="" name="beds" id="machine" />
            </div>
            <div className="col">
              <label className="m-1" htmlFor="fridge">
                fridge
              </label>
              <input type="checkbox" className="" name="fridge" id="fridge" />
            </div>
            <div className="col">
              <label className="m-1" htmlFor="books">
                books
              </label>
              <input type="checkbox" className="" name="books" id="books" />
            </div>
            <div className="col">
              <label className="m-1" htmlFor="others">
                others
              </label>
              <input type="checkbox" className="" name="others" id="others" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="username">User Name</label>
              <input
                className="formwidth border boxshadow"
                type="text"
                name="username"
              
                placeholder="User Name"
                required
              />
            </div>

            <div className="col">
              <label htmlFor="number"> Number</label>
              <input
                className="formwidth border boxshadow"
                type="number"
                name="number"
                
                placeholder="Number"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="pickdate">Pick Date</label>
              <input
                className="formwidth border boxshadow"
                type="date"
                name="pickdate"
                
                placeholder="Pick Date"
                required
              />
            </div>

            <div className="col">
              <label htmlFor="email"> Email</label>
              <input
                className="formwidth border boxshadow"
                type="email"
                name="email"
                
                placeholder="Email"
                required
              />
            </div>
          </div>

          <button
            className="formwidth btn btn-danger mt-5 boxshadow"
            type="submit"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Content2;