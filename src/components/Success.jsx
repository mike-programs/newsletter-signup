import React from 'react';
import successImage from '../assets/images/icon-success.svg'
import Button from './Button';

export default function Success({ handleDismissed, email }) {
    return (
        <div className='sm:bg-charcoalGray sm:h-screen md:flex md:justify-center md:items-center'>
            <div className='p-5 h-full sm:bg-white sm:rounded-3xl md:w-[50%] md:h-[65%] md:p-12 lg:h-[75%] xl:h-[60%] lg:w-[37%]'>
                <div className='mt-[10%] mb-7 md:m-0'>
                    <img src={successImage} alt='success icon' />
                </div>
                <div>
                    <h1 className='font-bold text-4xl my-5'>Thanks for Subscribing!</h1>
                    <p className='leading-6'>
                        A confirmation email has been sent to <span className='font-bold'>{email}</span>.
                        Please open it and click the button inside to confirm your
                        subscription
                    </p>
                </div>
                <div className='pt-[100%] sm:pt-[10%] lg:pt-10'>
                    <Button content='Dismiss message' handleClick={handleDismissed} />
                </div>
            </div>
        </div>
    )
}
