import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../reducers/homelayout'
import { Col, Row, Button, Glyphicon, ButtonToolbar, ButtonGroup, Grid } from 'react-bootstrap';
import NavMenu from './NavMenu';
import './Layout.css';

const HomeLayout = (props) => {
    console.log('homelayout.props',HomeLayout);
    return <Grid fluid>
        <Row >
            <div className="top-button-bar navbar-fixed-top" >
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button onClick={(e) => props.toggleLeftNav()}>
                            <Glyphicon glyph="menu-hamburger" />
                        </Button>

                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        </Row>
        <Row className="content-row">
            <Col sm={3}>
                {props.showleftnav && <NavMenu />}
            </Col>
            <Col sm={9}>
                {props.children}
            </Col>
        </Row>
    </Grid>
};

export default connect(
    state => state.homelayout,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(HomeLayout);
