import React, { Component } from "react";

import portfolioItem from "./portfolio-item";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    // class component: state, lifecycle hooks
    constructor() {
        super();
        console.log("Portfolio container has rendered")
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here...</h2>

                <PortfolioItem />
            </div>
        );
    }
}