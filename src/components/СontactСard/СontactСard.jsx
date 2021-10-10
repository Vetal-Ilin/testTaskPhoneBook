import React, {useState} from 'react';
import iconDelete from '@images/iconCloseNavBar.svg';
import iconСhanges from '@images/iconСhanges.svg';
import iconUndo from '@images/iconUndo.svg'
import FormChangingContact from '@components/FormChangingContact/FormChangingContact';
import CallButton from '@components/CallButton/CallButton';
import NumberError from '@components/NumberError/NumberError';

export default function СontactСard({contact, contacts, changeContact, deleteContact}) {

    const [activeChange, setActiveChange] = useState(false);
    const [existenceNumberChange, setExistenceNumberChange] = useState(false);
    const [shortNumberChange, setShortNumberChange] = useState(false);


    let onClickButtonDelete = () => {
        deleteContact(contact)
    }

    let onClickButtonChange = () => {
        setActiveChange(!activeChange)
    }

    let onClickConfirm = () => {
        setActiveChange(false)
    }

    let checkingContactModificationErrors = (obj) => {
        const beforeChanginContact = obj.beforeChanginContact;
        const afterChanginContact = obj.afterChanginContact;
        const allContacts = contacts; 

        let repetitionOriginalArray = [];

        if (afterChanginContact.name === '' & afterChanginContact.number === '') {
            setActiveChange(false)
            return
        }

        if (afterChanginContact.name === '') {
            afterChanginContact.name = beforeChanginContact.name
        } else if (afterChanginContact.name !== '' & afterChanginContact.number === '' ) {
            afterChanginContact.number = beforeChanginContact.number
            afterChanginContact.id = beforeChanginContact.id
            changeContact({beforeChanginContact: beforeChanginContact, afterChanginContact: afterChanginContact})
            setActiveChange(false)
            return
        }

        if (afterChanginContact.number !== '') {
            afterChanginContact.id = afterChanginContact.number
            repetitionOriginalArray = allContacts.find(item => String(item.id) === String(afterChanginContact.id))
        } else {
            afterChanginContact.number = beforeChanginContact.number
            afterChanginContact.id = beforeChanginContact.id
        }

        if (afterChanginContact.number.length !== 10) {
            setShortNumberChange(!shortNumberChange)
            setTimeout(() => setShortNumberChange(false), 1000)
            return
        }

        if (repetitionOriginalArray === undefined) {
            setActiveChange(false)
            changeContact({beforeChanginContact: beforeChanginContact, afterChanginContact: afterChanginContact})
        } else {
            setExistenceNumberChange(!existenceNumberChange)
            setTimeout(() => setExistenceNumberChange(false), 1000)
        }
    }



    return (
        <article className={activeChange ?  'contact-card active' : 'contact-card'}>
            <div className='contact-card__text'>
                <div className='contact-card__text__name'><p>{contact.name}</p></div>
                <div className='contact-card__text__number'><p>{`+7${contact.number}`}</p></div>
                <FormChangingContact className={activeChange ? 'contact-card__text__form-changing-contact' : 'contact-card__text__form-changing-contact active'} 
                    activeChange={activeChange} contact={contact} checkingContactModificationErrors={checkingContactModificationErrors} contacts={contacts} 
                />
               <NumberError  className={!existenceNumberChange && !shortNumberChange ? 'contact-card__number-error' : 'contact-card__number-error active'} 
                existenceNumberChange={existenceNumberChange} shortNumberChange={shortNumberChange}  />
                
            </div>
            <button className={activeChange ? 'contact-card__button' : 'contact-card__button active'} onClick={onClickButtonDelete}>
                <img src={iconDelete} alt='удалить контакт' />
            </button>
            <button className={activeChange ? 'contact-card__button' : 'contact-card__button active'} onClick={onClickButtonChange}>
                <img src={iconСhanges} alt='изменить контакт' />
            </button>
            <button className={activeChange ? 'contact-card__button active' : 'contact-card__button'} onClick={onClickConfirm}>
                <img src={iconUndo} alt='отменить' />
            </button>
            <CallButton number={contact.number} className={activeChange ? 'contact-card__button' : 'contact-card__button active'} />
        </article>
    )
}
