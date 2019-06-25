import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Title from "../product/Title";
import { ProductConsumer } from "../../utils/context";
// import { PurchaseDetails } from "./PurchaseDetails";
// import CartList from "./CartList";
// import CartTotals from "../cart/CartTotals";
// import PurchaseList from "./PurchaseList";

import { getCurrentProfile } from "../../actions/profile";

    const Purchases = ({
      getCurrentProfile,
      auth: { user },
      // profile: { profile, loading },
      // total: {  cartTotal }
    }) => {
      useEffect(() => {
        getCurrentProfile();
      }, [getCurrentProfile]);
    

    return (
      <section className="container">
        <ProductConsumer>
          {value => {
            const { total } = value;
            return (
                <React.Fragment>
                <Title name="your" title="purchase history" />
                <h4 className="text-center">Hi {user && user.name}</h4>
                {/* <PurchaseDetails 
                total={this.props.total}
                /> */}
                  {/* <PurchaseList />
                  <CartColumns />
                  <CartList value={value} /> */}

                  {/* <CartTotals value={value} /> */}
                </React.Fragment>
            )
          }}

        </ProductConsumer>
      </section>
    );
}
Purchases.propTypes = {
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
)(Purchases);
