/**
 * Created by Mikkel on 27.02.2017.
 */
import React from "react";
import { Link } from "react-router";
import { Jumbotron, Button, Grid, Row, Col, PageHeader,
} from 'react-bootstrap';

const SpillEn = React.createClass ({

    oppgaveFunk: function(){
    const oppgaver = ["Hvem er du?", "Hvem er best?", "Hvem er teitest?"];
    const ran = Math.floor(Math.random() * oppgaver.length);

    return oppgaver[ran]
    },
    congratsFunk: function () {
        const gratsMessage = ["WOW, flink.", "Det var skikkelig bra jobbet!", "Imponerende!", "OiOi"];
        const ran = Math.floor(Math.random() * gratsMessage.length);

        return gratsMessage[ran]
    },
    getInitialState: function(){
        return {
            question: this.oppgaveFunk(),
            taskCompleted: false,
        }
    },
    newQuestion: function() {
        var freshQuestion = this.oppgaveFunk();
        this.setState({
            question: freshQuestion,
        });
        this.setState({
            taskCompleted: false
        });
    },
    completeTask: function () {
        this.setState({
            taskCompleted: true
        });
    },
    renderKnapp: function () {
        
        if (this.state.taskCompleted){
            return <Button autoFocus bsStyle="warning" bsSize="large" onKeyDown={this.newQuestion} onClick={this.newQuestion} block>Neste Oppgave!</Button>;
        }
        else {
            return <Button autoFocus bsStyle="success" bsSize="large" onKeyDown={this.completeTask} onClick={this.completeTask} block>Oppgave fullført!</Button>
        }
        
    },
    renderQuestion: function () {
        const QuestionStyle = {
            textAlign: "center",
            marginBottom: 70,
        };

        var questionGrats = {};
        if (this.state.taskCompleted){
            questionGrats = <h1 style={QuestionStyle}>{this.congratsFunk()}</h1>
         } else {
            questionGrats = <h1 style={QuestionStyle}>{this.oppgaveFunk()}</h1>
        }

        return questionGrats
    },
    render: function () {

        const HeaderStyle = {
            marginBottom: 80,
            textAlign: "center",
            color: "white",
            paddingTop: 100,
        };
        const JumboStyle = {
            backgroundColor: "#88D317",
            borderRadius: 20,
        };


        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={12}>
                        <Link to="/" style={{textDecoration: "none"}}><PageHeader style={HeaderStyle}>Drikkespill</PageHeader></Link>
                    </Col>
                </Row>
                <Jumbotron style={JumboStyle}>
                <Row className="show-grid">
                        <Col md={12}>
                            {this.renderQuestion()}
                        </Col>
                        <Col md={12}>
                           {this.renderKnapp()}
                        </Col>
                </Row>
                </Jumbotron>
            </Grid>
        );
    }

});

export default SpillEn;