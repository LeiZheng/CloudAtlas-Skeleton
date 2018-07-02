import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import './Layout.css';
export default props => (
    <Grid fluid>
    <Row>
        {props.children}
    </Row>
  </Grid>
);
