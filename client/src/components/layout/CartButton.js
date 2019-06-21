import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../product/Button";
import { ProductConsumer } from "../../utils/context";

export default class CartButton extends Component {
    render() {
        return (
            <Link to="/cart" className="ml-auto">
                <ProductConsumer>
                    {(value) => {
                        const cartItemCount = value.cartItemCount;
                            return (
                                <ButtonContainer>
                                    <span className="mr-2">
                                        <i className="fa fa-cart-plus"/>
                                    </span>
                                    cart ({cartItemCount})
                                </ButtonContainer>
                                )
                            }
                        }
                </ProductConsumer>
            </Link>
            )
        }
    }