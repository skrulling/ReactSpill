/**
 * Created by Mikkel on 02.03.2017.
 */
import React, { Component } from "react";
import { Link } from "react-router";
import { Jumbotron, Button, Grid, Row, Col, PageHeader,
} from 'react-bootstrap';
import CountdownTimer from './SpillEn/count';

class Challenges extends Component {

    ChooseQuestion() {
        const oppgaver = ["Hvem er du?", "Hvem er best?", "Hvem er teitest?"];
        const ran = Math.floor(Math.random() * oppgaver.length);

        return oppgaver[ran]
    }
    constructor(props) {
        super(props);
        this.state = {
            question: this.ChooseQuestion,
            showQuestion: true,
            taskComplete: false
        };
    }
    taskComplete() {
        this.state.taskComplete = true;
        this.state.showQuestion = false;
        this.setState(this.state)
    }

}