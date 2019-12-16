import React from 'react';
import './FaqForm.css';
import './generalFormStyle.css'


export default class FaqBackend extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputs: []};
    }

    appendInput(e) {
        e.preventDefault()
        this.setState({inputs: [...this.state.inputs, this.state.inputs.length + 1]}, 
            () => console.log(this.state)
        )
    }

    decreaseInput(e) {
        e.preventDefault()
        if(this.state.inputs.length > 0) {
            this.state.inputs.pop();
            this.setState(() => ({inputs: this.state.inputs}));
        }
    }

    render() {
        return (
              <div className='FaqsFormPage'>


               <form>
                <h1>FAQs</h1>
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
               <button onClick={ (e) => this.decreaseInput(e) }>
                   Remove FAQ
               </button>
               </form>
               </div>

        );

    }
}