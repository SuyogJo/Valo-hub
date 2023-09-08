import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Card from "../component/Card"

export default function Agents() {
    const [info, setInfo] = useState([])

    React.useEffect(() => {
        fetch('https://valorant-api.com/v1/agents')
            .then(res => res.json())
            .then(obj => setInfo(obj.data))
    }, [])

    const agentCard = info.map((agent) => {
        if (agent.isPlayableCharacter === true) {
        return (
            <Link className="link-agents" to= {`/agents/${agent.uuid}`}>
                <Card id={agent.uuid} name={agent.displayName} pic={agent.fullPortrait} story={agent.description}/>
            </Link>
        )
        }
    })

    return (
        <div className='agent-card'>
            {agentCard}
        </div>
    )
}