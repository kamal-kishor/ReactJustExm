import React from "react";
import HeaderContainer from "../container/HeaderContainer";

export default function Home(props) {
  return (
    <div>
      <h1>
        <center>Amazon</center>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img
              className="img-wrapper"
              src="	https://www.apple.com/in/ios/photos/images/overview/search__88yxmpnurxem_large.jpg"
            />
          </div>
          <div className="col-lg-6">
            <div className="text-wrapper item">
              <span>I-Phone</span>
              <span>Price: $1000.00</span>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                props.addToCartHandler({ pice: 1000, name: "i phone 11" });
              }}
            >
              Add To Cart
            </button>
          </div>
          <div className="col-lg-2">
            <HeaderContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
