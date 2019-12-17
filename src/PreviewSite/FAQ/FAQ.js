import React from 'react'
import './FAQ.css'
import faqImage from '../../images/faqImages/faq1.jpg'

export default class Faq extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            faqImage: faqImage
        }
    }

    render() {
        return (
            <>
                <h1>FAQ</h1>

                <img src={this.state.faqImage} alt='faq logo' />
                <p>What is Hogsozzle, where does it take place and when is it? Can I perform at the festival or operate a stall? Can I bring my own alcohol?What will the weather be like? What are accomodation options if I’m not camping? You can find the answers to all these questions and more in this section.</p>
            </>
        )
    };
}

