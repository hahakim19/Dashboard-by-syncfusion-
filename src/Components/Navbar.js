import React from 'react'
import {AiOutlineMenu} from  'react-icons/ai'
import {FiShoppingCart} from  'react-icons/fi'
import {BsChatLeft} from  'react-icons/bs'
import {RiNotification3Line} from  'react-icons/ri'
import {MdKeyboardArrowDown} from  'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {useStateContext} from '../Context/ContextProvider'

import avatar from '../Data/avatar.jpg';

import {Notification,UserProfile,Cart,Chat}from './Index'


const NavButton=({title,customFunc,icon,color,dotColor,classNameObj})=>{

return(
<TooltipComponent
content={title}
position="BottomCenter"
className='toolTip--navbar'
>
<button onClick={customFunc} className={classNameObj} style={{color}}>
  <span className='dotColor--navbar' 
  style={{backgroundColor:dotColor}}> </span>
    {icon}
</button>

</TooltipComponent>)
  
}


export default function Navbar() {

  const  {activeMenu,setActiveMenu,handleClick,isClicked,currentColor} = useStateContext()


  return (
    <div className='Navbar--flex'>


      <NavButton  className='Menu-default'
        title={"Menu"}

        icon={<AiOutlineMenu/>}
        customFunc={()=>{ setActiveMenu(prev=>!prev)} }
        classNameObj={'navboutton'}
        dotColor={'transparent'}
      />

      <div className='navBar--other--items--flex'> 

      <NavButton  className='Menu-default'
        title={"Cart"}
        icon={<FiShoppingCart/>}
        dotColor={'transparent'}
        classNameObj={'navboutton'}
        customFunc={()=>{handleClick('cart')}}
      />
       <NavButton  className='Menu-default'
        title={"Chat"}
        icon={<BsChatLeft />}
        dotColor={currentColor}
        classNameObj={'navboutton'}
        customFunc={()=>{handleClick('chat')}}
      />
       <NavButton  className='Menu-default'
        title={"Notification"}
        icon={<RiNotification3Line/>}
        dotColor={currentColor}
        classNameObj={'navboutton'}
        color={""}
        customFunc={()=>{handleClick('notification')}}
      />
   
      <TooltipComponent 
      content="Profil"
      position="BottomCenter"
      className='user--things'
     >

      <div className='box-user-stuff--flex' onClick={()=>{handleClick('userProfile')}}>
        <div className='box--img--profil'>
             <img className='profil--img'
          src={avatar}
          alt='user-profile'/>

        </div>
        
          <div className='user-text'>
            
            <span>Hi,</span>
            <span style={{fontWeight:'700' , marginRight:'1em'}}>  Michel</span> 
           
           </div>
          
<MdKeyboardArrowDown style={{fontSize:'1.3rem',marginRight:'1em'}}/>
      </div>

      </TooltipComponent>

      </div>
     {/*  {isClicked.cart && <Cart/>} */}
      {isClicked.notification && <Notification/>}
      {isClicked.chat && <Chat/>}
      {isClicked.userProfile && <UserProfile/>}
    </div>
  )
}
