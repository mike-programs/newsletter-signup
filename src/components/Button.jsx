import React from 'react'

export default function Button({ content, handleClick }) {
    return (
        <p className='bg-darkSlateGray hover:bg-tomato text-white p-4 rounded-lg text-center font-medium lg:text-sm cursor-pointer'
            onClick={handleClick}>{content}
        </p>
    )
}
