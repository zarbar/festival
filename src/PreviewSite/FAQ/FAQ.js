import React from 'react'
import './FAQ.css'
import question from './question.png';

export default class Faq extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question1: localStorage.getItem("FAQ1"),
            answer1: localStorage.getItem("FAQ1Answer"),
            question2: localStorage.getItem("FAQ2"),
            answer2: localStorage.getItem("FAq2Answer"),
        }
    }

    render() {
        return (

            <div className='previewSiteSectionBoxBasicInfo'>
                <img src={question} alt='faq' className='previewSiteIcon' />
                <h1>FAQs</h1>
                <h2>{this.state.question1}</h2>
                <p>{this.state.answer1}</p>
                <h2>{this.state.question2}</h2>
                <p>{this.state.answer2}</p>
            </div>

        )
    };
}

