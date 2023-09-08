import React from 'react'
import { useState } from 'react'

export default function Card(props) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true)
    }

    function handleMouseLeave() {
        setIsHovered(false)
    }


    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={isHovered ? "each-agent" : "each-agent-nothovered"} key={props.id}>
            {isHovered ? 
                <div className='agent-text'>
                    <h1 className='agent-name'>{props.name}</h1><p className="agent-info">{props.story}</p>
                </div> :
                <img className='agent-img' src={props.pic} alt={props.name} />
            }
        </div>
    )

}