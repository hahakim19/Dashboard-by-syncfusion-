import React from 'react'
import {TypeAnimation} from 'react-type-animation'

export default function Desktop() {
  return (
    <div className='desktop--flex'>
        <div className='box--text'>
            <TypeAnimation
            sequence={['I hacked you and stolen your informations',
            2000,
            'Now i can do anyting with your phone',
            2000,
            "of course i'am kidding you just can't load this website on your mobile",1000,
            "sorry About that have a good day",2000
        
        ]}

       
       
            
            
            />
        </div>
        
    </div>
  )
}
