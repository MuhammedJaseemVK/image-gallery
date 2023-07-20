import React from 'react';
import logo from '../assets/logo512.png'

function Card() {
    return (
        <div>
            <div className='gallery-card'>
                <div className='image-card'>
                    <img src={logo} />
                    <div className='image-details'>
                        <h3>Text1</h3>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card