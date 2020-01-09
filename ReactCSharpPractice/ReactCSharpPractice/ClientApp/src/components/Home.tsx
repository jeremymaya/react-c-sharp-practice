import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
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

export default connect()(Home);
