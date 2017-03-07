/**
 * Created by Mikkel on 03.03.2017.
 */
import React, { Component } from 'react'

class Tasks extends Component {
    oppgaveFunk () {
    const oppgaver = ["Hvem er du?", "Hvem er best?", "Hvem er teitest?"];
    const ran = Math.floor(Math.random() * oppgaver.length);

    return oppgaver[ran]
    }
}

export default Tasks;