import React, { Component } from "react";
import { Link } from "react-router";
import { Jumbotron, Button, Grid, Row, Col, PageHeader,
} from 'react-bootstrap';

class pekeLeken extends Component {
	
	constructor() {
        super();
        this.state = {
        	qustionsLeft: true,
        	usedQuestions: [],
        	question: null,
        	oppgaver: ["fiser mest", "lukter best", "er snillest", "er kåtest", "er flinkest på skolen"]
        	};
    }
    componentDidMount() {
    	this.setState({question: this.ChooseQuestion()})
    }
    ChooseQuestion() {
    	var tempArray = this.state.oppgaver.slice();
        const ran = Math.floor(Math.random() * this.state.oppgaver.length);
        const mission = this.state.oppgaver[ran]

        tempArray.splice(ran, 1)
        this.setState({oppgaver: tempArray})
        if (this.state.oppgaver.length === 0) {
        	this.setState({qustionsLeft: false})
        }

        return mission
    }
    newQuestion(){
    	this.setState({question: this.ChooseQuestion()})
    }
	renderQuestion() {
		const QuestionStyle = {
            textAlign: "center",
            marginBottom: 70,
        };
        var questionToRender = null;

		if (this.state.qustionsLeft) {
			questionToRender =  <h1 style={QuestionStyle}>Pek på den som {this.state.question}</h1>
		}
		else {
			questionToRender = <h1 style={QuestionStyle}>Det er ikke flere spørsmål igjen</h1>
		}
		return questionToRender
	}
	renderButton() {
		const h3Style = {
			textAlign: "center",
			color: "white",
			margin: 20
		}

		var buttonToRender = null;

		if (this.state.qustionsLeft) {
			buttonToRender =  <Button autoFocus bsStyle="warning" bsSize="large" onKeyDown={() => this.newQuestion()} onClick={() => this.newQuestion()} block>Neste Oppgave!</Button>
		}
		else {
			buttonToRender = <Link to="/"><h3 style={h3Style}>Gå tilbake til hovedmeny for å spille noe annet</h3></Link>
		}
		return buttonToRender
	}
    	
	render() {
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

		return(
			<Grid>
                <Row className="show-grid">
                    <Col md={12}>
                        <Link to="/"><PageHeader style={HeaderStyle}>Alkohol Bonanza</PageHeader></Link>
                    </Col>
                </Row>
                <Jumbotron style={JumboStyle}>
                <Row className="show-grid">
                        <Col md={12}>
                            {this.renderQuestion()}
                        </Col>
                        <Col md={12}>
                           {this.renderButton()}
                        </Col>
                </Row>
                </Jumbotron>
            </Grid>
        )
	}
		
}

export default pekeLeken;