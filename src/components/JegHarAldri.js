import React, { Component } from "react";
import { Link } from "react-router";
import { Jumbotron, Button, Grid, Row, Col, PageHeader,
} from 'react-bootstrap';

class JegHarAldri extends Component {
	
	constructor() {
        super();
        this.state = {
        	qustionsLeft: true,
        	usedQuestions: [],
        	question: null,
        	oppgaver: ["måtte løpe for livet", "tatt mat ut av søppelen og spist det"
        	, "grått/flørtet meg ut av fartsbot", "ødelagt noe hjemme hos en venn uten å fortelle dem om det",
        	"hoppet fra et tak", "brukket noe", "jukset på en prøve", "stukket fra en regning", "haiket",
        	"vært forelsket i en venns far/mor", "sneket meg inn på kino", "sendt noen på sykehus ved et uhell",
        	"vært i en fysisk slåsskamp", "jobbet med noen jeg hatet", "grått offentlig på grunn av en sang",
        	"vært vegetarianer eller veganer", "sett på porno med noen andre", "fantasert om noen i dette rommet",
        	"hatt sex med noen 10+ år eldre enn meg"]
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
			questionToRender =  <h1 style={QuestionStyle}>Jeg har aldri {this.state.question}</h1>
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
			buttonToRender = <h3 style={h3Style}>Gå tilbake til hovedmeny for å spille noe annet</h3>
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
            backgroundColor: "#e63900",
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

export default JegHarAldri;