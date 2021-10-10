import React, {useEffect} from 'react';

export default function NumberError({existenceNumberAdd, shortNumberAdd, existenceNumberChange, shortNumberChange, className}) {

    let errorText;

    if(existenceNumberAdd) {
        errorText = 'Номер уже есть'
    } else if (shortNumberAdd) {
        errorText = 'Некорректный номер'
    } else if (existenceNumberChange) {
        errorText = 'Номер уже есть'
    } else if (shortNumberChange) {
        errorText = 'Некорректный номер'
    }
    
    return (
        <div className={'number-error ' + className}>
            <div className='menu-add-contact__form__error'>
                <p>{errorText}</p>
            </div>
        </div>
    )
}
