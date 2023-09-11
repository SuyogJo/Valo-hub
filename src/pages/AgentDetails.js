import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LongCard from '../component/LongCard';

export default function AgentDetails() {

    const [extraInfo, setExtraInfo] = useState([])
    const [generalObject, setGeneralObject] = useState([])

    const param = useParams()

    React.useEffect(() => {
        fetch(`https://valorant-api.com/v1/agents/${param.id}`)
            .then(res => res.json())
            .then(data => (setExtraInfo(data.data.abilities), setGeneralObject(data.data.voiceLine.mediaList)))
    }, [])

    const au = generalObject.map(obj => (
        <div className="audio-div">
            <h1 className='audio-text'>Agent Audio Sound</h1>
            <audio className="audio" controls> <source src={obj.wave} type="audio/wav"></source> doesnt support audio fam 
            </audio>
        </div>
    ));

    const ab = extraInfo.map(obj => (
        <LongCard name={obj.displayName} pic={obj.displayIcon} description={obj.description}/>
    ));

    return (
        <div className="backdrop">
            {au}
            <div className='agent-longcard'>
                {ab}
            </div>
        </div>
    )

}