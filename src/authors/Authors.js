import React, { Component } from "react";
import "./Authors.css";
import AuthorsDisplay from "./AuthorsDisplay";

export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    firstName: "Eric",
                    lastName: "Evans"
                },
                {
                    id: 2,
                    firstName: "Nicole",
                    lastName: "Forsgren"
                },
                {
                    id: 3,
                    firstName: "David",
                    lastName: "Enrich"
                },
                {
                    id: 4,
                    firstName: "Suzanne",
                    lastName: "Collins"
                },
                {
                    id: 5,
                    firstName: "Jeanine",
                    lastName: "Cummins"
                },
                {
                    id: 6,
                    firstName: "Delia",
                    lastName: "Owens"
                },
                {
                    id: 7,
                    firstName: "Jerry",
                    lastName: "Craft"
                },
                {
                    id: 8,
                    firstName: "Gordon",
                    lastName: "Korman"
                }
            ]
        }
    }
    render() {
        return(
            <div className='Authors'>
                <div className="lander">
                    <AuthorsDisplay author={this.state.authors} />
                </div>
            </div>
        );
    }
}