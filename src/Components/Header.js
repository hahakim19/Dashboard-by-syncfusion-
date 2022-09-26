import React from 'react'

export default function Header({Category,title}) {
  return (
    <div>
      <p className='header--category'>
        {Category}
      </p>
      <p className='header--title'>
      {title}
      </p>

    </div>
  )
}
