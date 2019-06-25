import React, { Component } from "react";
import { ProductConsumer } from "../../utils/context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, img, info, price, name, inCart } = value.detailProduct;
          return (
            <div>
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-green my-5">
                  <h1>{name}</h1>
                </div>
              </div>
              <div style={{ "margin-left": "50px", "margin-right": "50px" }}>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  {/* product text */}
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h3>{name}</h3>
                    {/* <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    Made by: <span className="text-uppercase">
                                        {company}
                                    </span>
                                </h4> */}
                    <h4 className="text-green">
                      <strong>
                        price: <span>$</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight:bold mt-3 mb-0">
                      Info about the product:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    {/* buttons */}
                    <div>
                      <Link to="/products">
                        <ButtonContainer>back to products</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of title */}
              {/* product info */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
