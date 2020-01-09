import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

import './custom.css'
import { Trips } from './components/Trip/Trips';
import { Create } from './components/Trip/Create';
import { Update } from './components/Trip/Update';
import { Delete } from './components/Trip/Delete';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/create' component={Create} />
        <Route path='/update/:tripId' component={Update} />
        <Route path='/delete/:id' component={Delete} />
        <Route path='/trips' component={Trips} />
    </Layout>
);
