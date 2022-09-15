import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';


const validate = values => {
    let error;
    if (!values) {
        error = 'Error';
    }
    return error;
}

const BuyTicketsForm = () => {
    const [counter, setCounter] = useState(0);
    const [isActivePromocode, setIsActivePromocode] = useState(false);

    const formik = useFormik({
        initialValues: {
            category1: { counter },
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const increaseCounter = () => {
        if (counter < 100)
            setCounter(counter => counter + 1);
    }

    const decreaseCounter = () => {
        if (counter > 0)
            setCounter(counter => counter - 1);
    }

    const openPromocodeField = () => {
        setIsActivePromocode(isActivePromocode => !isActivePromocode);
    }



    return (
        <form onSubmit={formik.handleSubmit} className="ticket-form">
            <div className='form-field' id="category-1">
                <div className='form-field__title'>Category</div>

                <div className='form-field__descr'></div>

                <div className='form-field__wrapper'>

                    <div className="form-field__price">1000 ₽</div>

                    <div className='counter'>

                        <button type="button"
                            className={counter < 1 ? 'counter__decr disabled' : 'counter__decr'}
                            onClick={() => decreaseCounter()}>

                            <svg width="10" height="3" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.75" width="10" height="1.5" rx="0.75" fill="white" />
                            </svg>
                        </button>

                        <input
                            type="number"
                            name="price-1"
                            className="counter__value"
                            id="price-1"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={counter}
                            readOnly />


                        <button type="button"
                            className={counter >= 10 ? 'counter__incr disabled' : 'counter__incr'}
                            onClick={() => increaseCounter()}>

                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="4.75" width="10" height="1.5" rx="0.75" fill="white" />
                                <rect x="5.75" y="0.5" width="10" height="1.5" rx="0.75" transform="rotate(90 5.75 0.5)" fill="white" />
                            </svg>

                        </button>


                    </div>
                </div>

            </div>

            <div className='ticket-form__information'>
                <p>Организатор «GENERATION A»<br />
                    ИП Федоренко Кирилл Александрович, <br />
                    ИНН 1263459682</p>
            </div>



            <div className='coupon-block'>
                <div className='coupon-block__dropdown'>
                    <p>Есть промокод?</p>
                    
                    <button type="button" 
                            onClick={() => openPromocodeField()} 
                            className={isActivePromocode ? 'show' : ''}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.55">
                            <path d="M2 4L6 8L10 4" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>

                    </button>
                </div>


                <input
                    type="text"
                    name="promocode"
                    className={isActivePromocode ? 'active' : ''}
                    id="promocode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Введите промокод' />

            </div>

            <button type="submit" className='submit-btn'>Выберите билеты</button>


            
        </form>
    )
}

export default BuyTicketsForm;