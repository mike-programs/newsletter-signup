import React, { useState } from 'react';

export default function CallToAction({ inputVal }) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const errorStyles =
        'border-2 w-full p-3 text-sm rounded-lg focus:outline-red focus:placeholder-red focus:bg-lightRed active:border-red';

    const [email, setEmail] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const isValid = emailPattern.test(email);

    function handleChange(e) {
        setEmail(e.target.value);
        inputVal(e.target.value);
    }

    function handleFocus() {
        setIsFocused(true);
    }

    function handleBlur() {
        setIsFocused(false);
    }

    return (
        <div>
            <div className='flex justify-between'>
                <span className='text-xs py-4'>Email Address</span>
                <span className={isFocused && !isValid ? 'text-xs py-4 text-red' : 'hidden'}>
                    {isFocused ? 'Valid email required' : null}
                </span>
            </div>
            <input
                type='text'
                placeholder='example@gmail.com'
                className={isValid ? 'border-2 w-full p-3 text-sm rounded-lg outline-black' : errorStyles}
                onChange={handleChange}
                value={email}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
}
