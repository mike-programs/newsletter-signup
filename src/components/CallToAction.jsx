import React, { useState } from 'react'

export default function CallToAction({ email, setEmail }) {

    function handleChange(e) {
        setEmail(e.target.value);

    }

    return (
        <div>
            <p className='text-xs py-4'>Email Address</p>
            <input type='text' onChange={handleChange} value={email} placeholder='example@gmail.com'
                className='border-2 w-full p-3 text-sm rounded-lg' />
        </div>
    )
}
