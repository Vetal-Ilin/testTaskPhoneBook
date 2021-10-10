import React from 'react';
import CallButton from '@components/CallButton/CallButton';

export default function DefaultContactsCard(props) {
    return (
        <article className='default-contacts-card'>
            <div className='default-contacts-card__text'>
                <div className='default-contacts-card__text__name'><p>{props.name}</p></div>
                <div className='default-contacts-card__text__number'><p>{props.number}</p></div>
            </div>
            <CallButton number={props.number} />
        </article>
    )
}
