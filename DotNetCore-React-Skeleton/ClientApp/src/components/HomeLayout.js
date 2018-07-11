import React from 'react';
import { Col, Row, Button, Glyphicon, ButtonToolbar, ButtonGroup, Grid } from 'react-bootstrap';
import NavMenu from './NavMenu';
import './Layout.css';
export default props => (
    <Grid fluid>
        <Row >
            <div className="top-button-bar" >
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button>
                            <Glyphicon glyph="menu-hamburger" />
                        </Button>
                      
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        </Row>
    <Row>
      <Col sm={3}>
        <NavMenu />
      </Col>
      <Col sm={9}>
        {props.children}
      </Col>
    </Row>
  </Grid>
);
