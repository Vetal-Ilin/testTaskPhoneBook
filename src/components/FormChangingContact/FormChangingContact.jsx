import React from 'react';
import { useForm } from 'react-hook-form';
import { register } from 'react-scroll/modules/mixins/scroller';

export default function FormChangingContact({className, contact, checkingContactModificationErrors}) {

    const {register, handleSubmit} = useForm();

    let onSubmit = (data) => {
        checkingContactModificationErrors({beforeChanginContact: contact, afterChanginContact: data})
    }

    return (
        <div className={'form-changing-contact ' + className}>
            <form onSubmit={handleSubmit(onSubmit)}  autoComplete='off' className='form-changing-contact__form'>
                <input {...register('name')} placeholder={contact.name} className='form-changing-contact__form__input-name' />
                <input {...register('number')} placeholder={contact.number}  className='form-changing-contact__form__input-number' /> 
                <input type="submit" value='Изменить' className='form-changing-contact__form__input-button'/>      
            </form>
        </div>
    )
}
