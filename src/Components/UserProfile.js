import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import avatar from '../Data/avatar.jpg'
import { userProfileData } from '../Data/dummy';
import {useStateContext} from '../Context/ContextProvider'
export default function UserProfile() {
  const {currentColor,setIsClicked,handleClick}=useStateContext()
  return (
    <div className='Container--card--user'>
      <div className='box--card--user'>
        <div className='user--head--flex'>
          <h2>User Profile</h2>
          <MdOutlineCancel className='outlinecancel' onClick={()=>{handleClick('userProfile')}} />
        </div>
        <div className='user--info--flex'>
          <div> <img className='img--user--profile' src={avatar} /></div>
          <div>
            <h3 style={{margin:0,marginBottom:'0.6em',}} >Michel Roberts</h3>
            <p className='info--user'>Administrator</p>
            <p className='info--user bold'>info@shop.com</p>
          </div>

        </div>
      {userProfileData.map((item,index)=> <div key={index} className='section--users--flex'>
        <button  type="button"
                 style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className='btn--item--list--user'
              
              
              > {item.icon}</button>
               <div>
              <p className="ptag1-user--list">{item.title}</p>
              <p className="ptag2-user--list"> {item.desc} </p>
            </div>
              
        </div>)


      }
       <div className='btn--logout--box'>

      
        <button 
        style={{backgroundColor:currentColor}}
        className='btn--logout--user'>
          Logout
        </button>
      </div>
      </div>

    </div>
  )
}
