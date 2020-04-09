import React from 'react';
import { v4 as uuid } from 'uuid';

export default function Results(props) {
    return props.data.map(char => {
        return (
            <>
            <div key={uuid()}>
                <h2>{char.name}</h2>
                <button onClick={() => props.showMore("https://swapi.co/api/people/?search=" + char.name)}>More info</button>
            </div>
            </>
        )
    });
}