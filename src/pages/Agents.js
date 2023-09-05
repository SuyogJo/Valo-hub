import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Agents() {
    const [info, setInfo] = useState([])

    React.useEffect(() => {
        fetch('https://valorant-api.com/v1/agents')
            .then(res => res.json())
            .then(obj => setInfo(obj.data))
    }, [])

    const agentCard = info.map((agent) => {
        return (
            <Link className="link-agents" to= {`/agents/${agent.uuid}`}>
                <div className='each-agent' key={agent.uuid}>
                    <h1>{agent.displayName}</h1>
                    <img style={{width: "220px", height: "200px"}} src={agent.fullPortrait} alt={agent.displayName} />
                    <p>{agent.description}</p>
                </div>
            </Link>
        )
    })

    return (
        <div className='agent-card'>
            {agentCard}
        </div>
    )
}