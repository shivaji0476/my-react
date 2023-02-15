import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-dark p-5">
      <div className=" row">
        <div className="col-md image">
          <img
            className=""
            src="https://prismleadindia.in/wp-content/uploads/2022/12/unnamed-file.png"
            alt=""
            width={80}
          />
          <p className="mt-2 text-secondary">
            We offer high-quality foods and the best delivery service, and the
            food market you can blindly trust Lorem ipsum dolor sit amet
            consectetur
          </p>
          <div class="socials">
            <a href="https://www.facebook.com/">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="https://www.whatsapp.com/">
              <i class="fa fa-whatsapp"></i>
            </a>

            <a href="https://www.instagram.com/accounts/login/">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className=" col-md ">
          <ul className="listyle ">
            <h4 className="text-dark">About us</h4>
            <li className="p-2">
              <Link className="listyle  " to="/about">
                About us
              </Link>
            </li>
            <li className="p-2">
              <b className="">
                <Link className="listyle" to="/contactus">
                  contact us
                </Link>
              </b>
            </li>
            <li className="p-2">
              <a className="listyle " href="#">
                about team
              </a>
            </li>

            <li className="p-2">
              <a className="listyle" href="#">
                Customer Support
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md">
          <ul className="listyle ">
            <h4 className="text-dark">Our Information</h4>
            <li className="p-2">
              <a className="listyle" href="#">
                Privacy policy update
              </a>
            </li>
            <li className="p-2">
              <a className="listyle" href="#">
                Terms & conditions
              </a>
            </li>
            <li className="p-2">
              <a className="listyle" href="#">
                about team
              </a>
            </li>
            <li className="p-2">
              <a className="listyle" href="#">
                Return Policy
              </a>
            </li>
            <li className="p-2">
              <a className="listyle" href="#">
                Site Map
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md">
          <ul className="listyle">
            <h4 className="text-dark">Community</h4>
            <li className="p-2">
              <a className="listyle" href="#">
                Announcements
              </a>
            </li>
            <li className="p-2">
              <a className="listyle" href="#">
                Answer center
              </a>
            </li>
            <li className="p-2">
              <a className="listyle" href="#">
                Discussion boards
              </a>
            </li>
            <li className="p-2">
              <a className="listyle" href="#">
                Giving works
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md">
          <h4>Subscribe Now</h4>
          <p className="text-secondary">
            Subscribe your email for newsletter and featured news based on your
            interest
          </p>
          <form action="">
            <input
              className="p-2 mt-2"
              type="email"
              placeholder="enter your email"
              required
            />
            <br />\<br />
            <button type="submit" className="btn btn-primary px-4">
              send
            </button>
          </form>
        </div>
      </div>
        
    </div>
  );
}

export default Footer;
