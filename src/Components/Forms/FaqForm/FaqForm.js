import React from 'react';
import './FaqForm.css';
import './generalFormStyle.css'

import faq1 from '../../../images/faqImages/faq1.jpg'
import faq2 from '../../../images/faqImages/faq2.jpg'
import faq3 from '../../../images/faqImages/faq3.jpg'


export default class FaqBackend extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputs: [] };
    }

    appendInput(e) {
        e.preventDefault()

        this.setState({ inputs: [...this.state.inputs, this.state.inputs.length + 1] },
            () => console.log(this.state)
        )
    }

    decreaseInput(e) {
        e.preventDefault()

        if (this.state.inputs.length > 0) {
            this.state.inputs.pop();
            this.setState(() => ({ inputs: this.state.inputs }));
        }
    }

    render() {
        return (

            <div className='FaqsFormPage'>

                <h1>FAQs</h1>
                <form>
                    <h2>Please add your frequently asked questions for attendees</h2>
                    <p className='FaqFieldType'>Question:</p>
                    <input type='text' id='faqinput'></input>

                    <p className='FaqFieldType'>Answer:</p>
                    <textarea type='text' id='faqtextarea'></textarea>

                    <p className='FaqFieldType'>Question:</p>
                    <input type='text' id='faqinput' ></input>

                    <p className='FaqFieldType'>Answer:</p>
                    <textarea type='text' id='faqtextarea'></textarea>

                    {this.state.inputs.map(input => (
                        <div className='unstyleMe' key={input}>
                            <p key={input} className='FaqFieldType'>Question:</p>
                            <input type='text' id='faqinput' ></input>

                            <p className='FaqFieldType'>Answer:</p>
                            <textarea type='text' id='faqtextarea'></textarea>
                        </div>
                    ))}

                    <button onClick={(e) => this.appendInput(e)}>
                        Add more FAQs
               </button>
                    <button onClick={(e) => this.decreaseInput(e)}>
                        Remove FAQ
               </button>
                    <p>Select your display image</p>
                    <div className='slide-photo'>
                        <div className='img-item'>
                            <img src={faq1} alt='go' />
                            <input className='box' type="checkbox" name='festival' value="festival" />
                        </div>
                        <div className='img-item'>
                            <img src={faq2} alt='go' />
                            <input className='box' type="checkbox" name='concert' value="concert" />
                        </div>
                        <div className='img-item'>
                            <img src={faq3} alt='go' />
                            <input className='box' type="checkbox" name='music' value="music" />
                        </div>
                    </div>
                    <div className="containerFaq">
                <button className="item">Save</button>
                <button className="item">Preview</button>
                <button className="item">Next</button>
            </div>
                </form>
              
            </div>
        );

    }
}