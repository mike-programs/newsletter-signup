import React from 'react'
import List from './List'
import CallToAction from './CallToAction'
import Button from './Button'

export default function Content({ handleClick, inputVal }) {

    const listItems = ['Products discovery and building what matters', 'Measuring to ensure updates are a success', 'And much more!'];

    return (
        <div className='p-7 text-base lg:w-80 lg:p-4' >
            <div>
                <h1 className='font-bold text-4xl mb-5'>Stay Updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
            </div>
            <div>
                {listItems.map((list, index) => (
                    <List key={index} list={list} />
                ))}
            </div>
            <div>
                <CallToAction inputVal={inputVal} />
            </div>
            <div className='my-8'>
                <Button content='Subscribe to my monthly newsletter' handleClick={handleClick} />
            </div>
        </div>
    )
}
