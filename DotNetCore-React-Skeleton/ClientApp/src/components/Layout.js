import React from 'react';
import { Switch } from 'react-router-dom';
import {Grid, Row} from 'react-bootstrap';
import './Layout.css';
export default props => (
    <Grid fluid>
    <Row>
            <Switch>
                {props.children}
            </Switch>
    </Row>
  </Grid>
);
