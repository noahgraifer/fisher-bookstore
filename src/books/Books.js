import React, { Component } from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "Dark Towers",
                    author: "David Enrich",
                    isbn: "978-0062878816"
                },
                {
                    id: 4,
                    title: "The Ballad of Songbirds and Snakes",
                    author: "Suzanne Collins",
                    isbn: "978-1338674453"
                },
                {
                    id: 5,
                    title: "American Dirt",
                    author: "Jeanine Cummins",
                    isbn: "978-1250772404"
                },
                {
                    id: 6,
                    title: "Where the Crawdads Sing",
                    author: "Delia Owens",
                    isbn: "978-0735219090"
                },
                {
                    id: 7,
                    title: "New Kid",
                    author: "Jerry Craft",
                    isbn: "978-0062691194"
                },
                {
                    id: 8,
                    title: "The Unteachables",
                    author: "Gordon Korman",
                    isbn: "978-0062563903"
                }
            ]
        };
    }
    render() {
        return(
            <div className='Books'>
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                </div>
            </div>
        );
    }
}