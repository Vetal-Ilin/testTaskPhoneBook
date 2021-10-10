import React, {useState} from 'react';

import MenuAddContact from '@components/MenuAddContact/MenuAddContact.jsx';
import ListСontacts from '@components/ListСontacts/ListСontacts.jsx';

export default function App() {

    const [contacts, setСontacts] = useState([]);
    const [existenceNumberAdd, setExistenceNumberAdd] = useState(false);
    const [shortNumberAdd, setShortNumberAdd] = useState(false);

    let onClickSubmitAdd = (data) => {
        const newContact = {
            name: data.name,
            number: data.number,
            id: data.number
        }
        if(newContact.number.length !== 10) {
            setShortNumberAdd(!shortNumberAdd)
            setTimeout(() => setShortNumberAdd(false), 1000)
            return
        } else if(contacts.find(item => String(item.id) === String(newContact.id))) {
            setExistenceNumberAdd(!existenceNumberAdd)
            setTimeout(() => setExistenceNumberAdd(false), 1000)
            return
        } else {
            setСontacts(prev => [...prev, newContact])
        }
    }

    let deleteContact = (obj) => {
        setСontacts(prev => prev.filter((item) => String(item.id) !== String(obj.id) ))
    }

    let changeContact = (obj) => {
        const {beforeChanginContact} = obj;
        const {afterChanginContact} = obj;
        let arrayWithoutChangeableContact = contacts.filter(item => item.id !== beforeChanginContact.id)
        let newArrayContacts = arrayWithoutChangeableContact.concat(afterChanginContact)
        setСontacts(newArrayContacts)
    }

    return (
        <div className='app'>
            <MenuAddContact onClickSubmitAdd={onClickSubmitAdd} existenceNumberAdd={existenceNumberAdd} shortNumberAdd={shortNumberAdd} contacts={contacts} />
            <ListСontacts contacts={contacts} deleteContact={deleteContact} changeContact={changeContact} />
        </div>
    )
}