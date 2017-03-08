/**
 * Created by Mikkel on 27.02.2017.
 */
import React, { Component } from "react";
import { Link } from "react-router";
import { Jumbotron, Button, Grid, Row, Col, PageHeader } from 'react-bootstrap';



class VelgSpill extends Component {
    render() {

        const JumboStyle = {
            backgroundColor: "#e63900",
            borderRadius: 20,
        };
        const HeaderStyle = {
            marginBottom: 80,
            textAlign: "center",
            color: "white",
            paddingTop: 100,
        };

        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={12}>
                        <PageHeader style={HeaderStyle}>Alkohol Bonanza</PageHeader>
                    </Col>
                </Row>
                <Jumbotron style={JumboStyle}>
                    <Row className="show-grid">
                        <Col md={6} /*mdPush={6}*/>
                            <Jumbotron style={JumboStyle}>
                                <Link to="/spill"><Button bsStyle="primary" bsSize="large" block>Spill 1</Button></Link>
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
                                <Link to="/jegharaldri"><Button bsStyle="warning" bsSize="large" block>Jeg Har Aldri</Button></Link>
                            </Jumbotron>
                        </Col>
                        <Col md={6} /*mdPush={6}*/>
                            <Jumbotron style={JumboStyle}>
                                <Link to="/pekeleken"><Button bsStyle="info" bsSize="large" block>Pekeleken</Button></Link>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Jumbotron>
            </Grid>
        );
    }
}

export default VelgSpill;