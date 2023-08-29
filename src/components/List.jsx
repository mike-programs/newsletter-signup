import React from 'react';
import iconList from '../assets/images/icon-list.svg'

export default function List({ list }) {
    return (
        <div className='flex my-3'>
            <img src={iconList} alt='Listing icons' className='w-5 mr-3' />
            <span>{list}</span>
        </div>
    )
}
