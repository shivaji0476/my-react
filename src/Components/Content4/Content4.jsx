import React from "react";

function Content4() {
  return (
    <div className="">
      <div
        className="rounded-4 border card card1  boxshadow m-auto  "
        style={{ width: 280 }}
      >
        <div className="zoom">
          <img
            src="https://www.nobroker.in/blog/wp-content/uploads/2021/03/Home-Services-Blog-Inline-Promotion-01.jpg"
            className="card-img-top rounded-4 "
            alt="img"
          />
        </div>
        <div className="card-body p-3">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary ">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Content4;
