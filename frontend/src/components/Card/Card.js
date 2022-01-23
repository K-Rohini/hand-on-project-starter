import React from 'react'
import './Card.css'
import card from '../../assets/img1.png'
const Card = (props) => {
    var img = require('../../assets/img'+props.id+'.png');
    return (
          <div className='card'>
                <img src={img} className="card-img"></img>
                <h4 className="heading">{props.heading}</h4> 
                <p className="desc">{props.desc}</p>
            </div>
    )
}

export default Card
