import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Title from "../product/Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../utils/context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import PurchaseList from "./PurchaseListBtn";

import { getCurrentProfile } from "../../actions/profile";

    const Cart = ({
      getCurrentProfile,
      auth: { user },
      profile: { profile, loading }
    }) => {
      useEffect(() => {
        getCurrentProfile();
      }, [getCurrentProfile]);
    

    return (
      <section className="container">
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                <Title name="your" title="cart" />
                <h4 className="text-center">Hi {user && user.name}</h4>
                  <PurchaseList />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                <h4 className="text-center">{user && user.name}</h4>
                  <EmptyCart />
                  <PurchaseList />
                </React.Fragment>
              )
            }
          }}
        </ProductConsumer>
      </section>
    );
}
Cart.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Cart);