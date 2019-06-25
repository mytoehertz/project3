import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../utils/context";

export default class PurchaseList extends Component {
    render() {
        return (
            <div className="container" className="text-center">
                <Link to="/purchases">
                     <button className="btn btn-outline-success text-uppercase mb-3 px-5">
                     my purchase history
                    </button>
                </Link>
                {/* </ProductConsumer> */}
     
            </div>
        )
    }
}