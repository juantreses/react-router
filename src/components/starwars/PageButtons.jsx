import React from 'react'

export default function PageButtons(props) {
    return (
        <>
            <a className="previous round" onClick={() => props.otherPage(props.links.prevLink)}>&#8249;</a>
            <a className="next round" onClick={() => props.otherPage(props.links.nextLink)}>&#8250;</a>    
        </>
    )
}
