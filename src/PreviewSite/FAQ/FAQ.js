import React from 'react'
import './FAQ.css'
import faq1 from '../../images/faqImages/faq1.jpg'
import faq2 from '../../images/faqImages/faq2.jpg'
import faq3 from '../../images/faqImages/faq3.jpg'

export default class Faq extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            faqImage1: faq1,
            faqImage2: faq2,
            faqImage3: faq3,
            question1: 'question 1',
            answer1: 'answer1',
            question2: 'question 2',
            answer2: 'answer2',
        }
    }

    render() {
        return (
            <>
                <h1>FAQ</h1>
                <img src={this.state.faqImage1} alt='faq logo' />
                <h2>{this.state.question1}</h2>
                <p>{this.state.answer1}</p>
                <h2>{this.state.question2}</h2>
                <p>{this.state.answer2}</p>
                <img src={this.state.faqImage1} alt='faq logo' />
            </>
        )
    };
}

