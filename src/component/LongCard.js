import React from 'react'
import { useState } from 'react'

export default function LongCard(props) {

    return (
        <div className="x">
            <h1 className="ability-title">{props.name}</h1>
            <img className="ability-image" src={props.pic} alt={props.name} />
            <p className="ability-description">{props.description}</p>
        </div>
    )

}