import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <h1>Welcome to trip manager!</h1>
            <p>This web application is built using React.js frontend and ASP.NET API backend. Use this manager to mange your trips by:</p>
            <ul>
                <li>Add a new trip</li>
                <li>Update a trip</li>
                <li>Delete a trip</li>
                <li>Show all trips</li>
            </ul>
        </div>
    );
  }
}
