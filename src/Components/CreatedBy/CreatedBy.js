import React from 'react';
import './CreatedBy.css';
import concert from '../../images/concertphoto.jpg';

class CreatedBy extends React.Component {

    render() {
        return (
            <>
                <div className='created-by'>
                    <div>
                        <img src={concert} alt='concert logo' />
                    </div>
                    <br /><br />
                    <h1>Created by...</h1>
                    <p>- name, github, profile</p>
                    <p>- name, github, profile</p>
                    <p>- name, github, profile</p>
                    <p>- name, github, profile</p>
                </div>
            </>
        )
    }
}
export default CreatedBy; 