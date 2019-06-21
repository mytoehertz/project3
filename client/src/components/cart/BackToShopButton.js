import React from 'react';
import { Link } from "react-router-dom";
import ButtonContainer from "../product/Button";

export default function BackToShopButton() {
    return (
        <Link to ="/products">
        <button>Continue Shopping</button>
            {/* <ButtonContainer>
                continue shopping
            </ButtonContainer> */}
        </Link>
    )
}