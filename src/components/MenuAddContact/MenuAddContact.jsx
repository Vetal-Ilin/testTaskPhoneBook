import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { register } from 'react-scroll/modules/mixins/scroller';
import NumberError from '@components/NumberError/NumberError';

export default function MenuAddContact({onClickSubmitAdd, existenceNumberAdd, shortNumberAdd, contacts = []}) {

    const {register, handleSubmit, reset} = useForm();

    let onSubmit = (data) => {
        onClickSubmitAdd(data)
    }

    useEffect(() => {
        reset({name: '', number: ''})
    }, [contacts])

    return (
        <section className='menu-add-contact'>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='menu-add-contact__form'>
                    <input {...register('name', {required: true})} placeholder='Введите имя' className='menu-add-contact__form__input-name' />
                    {(!existenceNumberAdd && !shortNumberAdd) ?
                        <input {...register('number')} placeholder='Номер телефона без +7'  className='menu-add-contact__form__input-number' /> :
                        <NumberError className='menu-add-contact__form__number-error'  existenceNumberAdd={existenceNumberAdd} shortNumberAdd={shortNumberAdd}/>
                    }
                    <input type="submit" value='Добавить контакт' className='menu-add-contact__form__input-button' />
                </form>
        </section>
    )
}