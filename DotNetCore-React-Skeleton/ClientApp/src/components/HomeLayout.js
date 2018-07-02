import React from 'react';
import { Col, Grid, Row, Button, Glyphicon, Navbar, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import NavMenu from './NavMenu';
import './Layout.css';
export default props => (
    <Grid fluid>
        <Row >
            <div class="top-button-bar" >
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
