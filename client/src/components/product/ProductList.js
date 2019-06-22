import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../../utils/context";

export default class ProductList extends Component {
  // state={
  //     products: storeProducts
  // };

  render() {
    return (
      <div className="container">
        <React.Fragment>
          <div className="py-5">
            <div className="container-fluid">
              <Title name="our" title="products" />
              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
