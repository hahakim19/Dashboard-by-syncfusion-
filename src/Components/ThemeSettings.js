import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../Data/dummy';
import { useStateContext } from '../Context/ContextProvider';

export default function ThemeSettings() {
  const {activeMenu,setActiveMenu,setIsThemeOpen,isThemeOpen,setMode,currentMode,setColor,currentColor}=useStateContext();
  return (
    <div className='theme--box--wraper'>
      <div className='theme--box'>
        <div className='box--theme--heders--flex'>
 <p style={{fontWeight:'700',fontSize:'1.2rem',color:'#444444'}}>Theme Settings</p>
 <MdOutlineCancel
 onClick={()=>{setIsThemeOpen(false) ; }}
 className='outlinecancel'
 /*  style={{cursor:"pointer" ,color:'#0101014d' ,fontSize:'1.5rem'}} *//>
       
</div>
{/* <div className='themes--options'>
  <p className='sub-theme-opts'>Theme Options</p>

  <p>

     <input type='radio' name='theme' value='light' checked={currentMode==='ligth'} onChange={setMode}/>
    <label>Light</label>

  </p>

 <p >

   <input type='radio' name='theme' value='dark' checked={currentMode==='dark'} onChange={setMode} />
    <label>Dark</label>

 </p>




   
  </div> */}
  <div className='theme-colors'>

    <p className='sub-theme-opts'>Theme Colors</p>
    <div className='box--of--colors'>
      {themeColors.map((item,index)=>
         <button
         key={index}
         type="button"
         className="colors-to-apply"
         style={{ backgroundColor: item.color }}
         onClick={()=>{console.log(item.color);
        setColor(item.color)}}
        
       >
         <BsCheck style={ item.color===currentColor ? {color:'#fff'}:{display:'none'}}/> 
       </button>
      )

      }
    </div>

  </div>



      </div>
      
    </div>
  )
}
