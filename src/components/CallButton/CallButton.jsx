import React from 'react';
import callNumber from '@images/callNumber.svg'

export default function CallButton(props) {
    return (
        <div className={'call-button ' + props.className}>
            <a href={`tel: ${props.number}`}>
                <img src={callNumber} alt='Позвонить' />
            </a>
        </div>
    )
}
