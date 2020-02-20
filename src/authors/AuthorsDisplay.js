import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';


export default function AuthorsDisplay(props) {
    return (
        <div className="display">
            <h3>Authors</h3>
            <BootstrapTable data = { props.author } bordered  = { true } striped hover condensed>
                <TableHeaderColumn dataField='id' isKey={ true }>Author Id</TableHeaderColumn>
                <TableHeaderColumn dataField="firstName">First Name</TableHeaderColumn>
                <TableHeaderColumn dataField="lastName">Last Name</TableHeaderColumn> 
            </BootstrapTable>
        </div>
    );
}