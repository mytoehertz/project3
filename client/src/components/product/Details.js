import React, { Component } from 'react';
import { ProductConsumer } from "../../utils/context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                const {
                    id, 
                    img, 
                    size, 
                    price, 
                    name, 
                    inCart,
                    lightReq,
                    waterReq,
                    pet,
                    pottingReq
                    } = value.detailProduct;
                return (
                    <div >
                        {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-green my-5 text-capitalize">
                                <h1>{name}</h1>
                            </div>
                        </div>
                        <div className="container">
<div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alt="product" />
                            </div>
                            {/* product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>{name}</h2>
                                {/* <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    Made by: <span className="text-uppercase">
                                        {company}
                                    </span>
                                </h4> */}
                                <DetailStyle>
                                <p className="text-muted lead">
                                    <h5><i className="fas fa-sun" /> {lightReq}
                                        </h5>
                                    <h5>
                                    <i className="fas fa-tint" /> <strong>Water Requirements:</strong> {waterReq}</h5>
                                    <h5>
                                    <i className="fas fa-paw" /> <strong>Pet friendly?</strong> {pet}</h5>
                                    <h5>
                                    <i className="fa fa-bitbucket" /> <strong>Potting Suggestion</strong> {pottingReq}</h5>
                                    <h5>
                                    <i className="fas fa-arrows-alt-v" />  <strong>Size:</strong> {size}</h5>
                                </p>
                                </DetailStyle>
                                <h4 className="text-green">
                                    <strong>
                                        price: <span>$</span>
                                        {price}
                                    </strong>
                                </h4>
                                {/* buttons */}
                                <div>
                                    <Link to ="/products">
                                        <ButtonContainer>
                                            back to shop
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                    cart
                                    disabled={inCart?true:false}
                                    onClick={() => {
                                        value.addToCart(id)
                                    }}>
                                        {inCart?"inCart":"add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                        </div>
                        {/* end of title */}
                        {/* product info */}
                        
                    </div>
                )
                }}
            </ProductConsumer>
        )
    }
}

const DetailStyle = styled.div`
    font-family: "Mali", cursive;
`
