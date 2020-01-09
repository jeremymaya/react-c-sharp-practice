// imports the React and the Component from the React library 
import React, { Component } from 'react';
import axios from 'axios';

// defines the export class 'Trips' which extends the Component base class 
export class Trips extends Component {

    // constrructor for the class 
    constructor(props) {
        super(props);

        this.onTripUpdate = this.onTripUpdate.bind(this);
        this.onTripDelete = this.onTripDelete.bind(this);

        // sets the class' initial state
        this.state = {
            trips: [],
            loading: true
        }
    }

    // lifecycle method
    // sends a request to get all trips once the UI has been loaded
    componentDidMount() {
        this.populateTripsData();
    }

    onTripUpdate(id) {
        const { history } = this.props;

        history.push('/update/' + id);
    }

    onTripDelete(id) {
        const { history } = this.props;

        history.push('/delete/' + id);
    }

    // sends a get request to the API backend 
    // npm install axios --save entered to use Axios which is needed to send HTTP requests 
    populateTripsData() {
        axios.get("api/Trips/GetTrips").then(result => {
            const response = result.data;
            this.setState({trips: response, loading: false});
        })
    }

    // method to render a HTML table with trips data
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
                    {
                    trips.map(trip => (
                    // each table row needs to have a unique identifier
                    <tr key={trip.id}>
                        <td>{trip.name}</td>
                        <td>{trip.description}</td>
                            <td>{new Date(trip.dateStarted).toISOString().slice(0, 10)}</td>
                            <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toISOString().slice(0, 10) : '-'}</td>
                        <td>
                                <div className="form-group">
                                    <button onClick={() => this.onTripUpdate(trip.id)} className="btn btn-success">
                                        Update
                                    </button>
                                    <button onClick={() => this.onTripDelete(trip.id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                        </td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>
        );
    }

    // renders <div> which acts as the component's parent node
    // only one nodule can be returned per class
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
