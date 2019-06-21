import React from 'react';
import { Link } from "react-router-dom";

export default function BackToShopButton() {
    return (
        <Link to="/products">
            <button className="btn btn-outline-success text-uppercase mb-3 px-5">
               continue shopping
            </button>
        </Link>
    )
}