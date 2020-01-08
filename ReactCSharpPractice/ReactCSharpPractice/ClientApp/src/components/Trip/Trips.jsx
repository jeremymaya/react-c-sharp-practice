// imports the React and the Component from the React library 
import React, { Component } from 'react';

// defines the export class 'Trips' which extends the Component base class 
export class Trips extends Component {

    // constrructor for the class 
    constructor(props) {
        super(props);

        this.state = {
            trips: [],
            loading: true
        }
    }

    renderAllTripsTable(trips) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date Started</th>
                        <th>Date Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                        <td> - </td>
                    </tr>
                </tbody>
            </table>
        );
    }

    render() {
        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
                this.renderAllTripsTable(this.state.trips)
            );

        return (
            <div>
                <h1>All Trips</h1>
                <p>Here you can see all trips</p>
                {content}
            </div>
        );
    }
}