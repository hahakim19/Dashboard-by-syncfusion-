import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { chatData } from '../Data/dummy';
import { useStateContext } from '../Context/ContextProvider'
export default function Chat() {
  const { currentColor,  handleClick } = useStateContext()

  return (
    <div className='container--chat--card'>
      <div className='box--card--notif'>
        <div className='user--head--flex'>
          <h2>Messages</h2>
          <MdOutlineCancel className='outlinecancel' onClick={() => { handleClick('chat') }} />
        </div>
        <div>
          {chatData.map((item,index)=><div key={index} className='box--notif--flex'>
      <img src={item.image} alt={item.message} className='img--notification'/>
      <div className='box-not'>
<p className='header--notif'>{item.message}</p>
<p className='content--notif'>{item.desc}</p>
<p className='content--notif'> {item.time} </p>
      </div>

          </div>)

          }
        </div>

        <div className='btn--logout--box'>

      
<button 
style={{backgroundColor:currentColor}}
className='btn--logout--user'>
 See All Messages
</button>
</div>
      </div>

    </div>
  )
}
