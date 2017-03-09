/**
 * Created by Mikkel on 27.02.2017.
 */
import React, { Component } from "react";
import { Link } from "react-router";
import { Jumbotron, Button, Grid, Row, Col, PageHeader, Image } from 'react-bootstrap';



class VelgSpill extends Component {
    render() {

        const JumboStyle = {
            marginTop: 20,
            backgroundColor: "#88D317",
            borderRadius: 20,
        };
        const HeaderStyle = {
            marginBottom: 80,
            textAlign: "left",
            color: "white",
            paddingTop: 100,
            border: "none",
            textTransform: "uppercase",
            fontSize: 60,
        };
        const btnStyle = {
            backgroundColor: "#1A0315",
        };
        const imgStyle = {
            marginTop: 10,
            marginLeft: 40,
        };

        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={4}>
                        <Image src="http://i.imgur.com/KgKVNUg.png" bsSize="small" style={imgStyle} responsive />
                    </Col>
                    <Col md={8}>
                        <h1 style={HeaderStyle}>Drikkespill</h1>
                    </Col>
                </Row>
                <Jumbotron style={JumboStyle}>
                    <Row className="show-grid">
                        <Col md={6} /*mdPush={6}*/>
                            <Jumbotron style={JumboStyle}>
                                <Link to="/spill" style={{textDecoration: "none"}}><Button Style={btnStyle} bsSize="large" block>Spill 1</Button></Link>
                            </Jumbotron>
                        </Col>
                        <Col md={6} /*mdPush={6}*/>
                            <Jumbotron style={JumboStyle}>
                                <Button bsStyle="success" bsSize="large" block>Spill 2</Button>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={6} /*mdPush={6}*/>
                            <Jumbotron style={JumboStyle}>
                                <Link to="/jegharaldri" style={{textDecoration: "none"}}><Button bsStyle="warning" bsSize="large" block>Jeg Har Aldri</Button></Link>
                            </Jumbotron>
                        </Col>
                        <Col md={6} /*mdPush={6}*/>
                            <Jumbotron style={JumboStyle}>
                                <Link to="/pekeleken" style={{textDecoration: "none"}}><Button bsStyle="info" bsSize="large" block>Pekeleken</Button></Link>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Jumbotron>
            </Grid>
        );
    }
}

export default VelgSpill;