import React, {useEffect} from 'react';

import СontactСard from '@components/СontactСard/СontactСard.jsx';
import DefaultContactsCard from '@components/DefaultContactsCard/DefaultContactsCard';

export default function ListСontacts({contacts = [], deleteContact, changeContact}) {

    return (
        <section className='list-contacts'>
            <DefaultContactsCard name='Служба спасения' number='911' />
            {contacts.map((item) => <СontactСard contact={item} contacts={contacts} key={item.id} deleteContact={deleteContact} changeContact={changeContact} />)}
        </section>
    )
}