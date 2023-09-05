import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function AgentDetails() {

    const [extraInfo, setExtraInfo] = useState([])

    const param = useParams()

    React.useEffect(() => {
        fetch(`https://valorant-api.com/v1/agents/${param.id}`)
            .then(res => res.json())
            .then(data => setExtraInfo(data.data.abilities))
    }, [])

    const ab = extraInfo.map(obj => (
        <div>
            <h3>{obj.displayName}</h3>
            <p>{obj.description}</p>
        </div>
    ));

    return (
        <div>
            {ab}
        </div>
    )

}