import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponennt } from '@syncfusion/ej2-react-popups'
import { links } from '../Data/dummy'
import { useStateContext } from '../Context/ContextProvider';


export default function SideBar() {

const {activeMenu,setActiveMenu,screenSize,currentColor}=useStateContext()

const [isHover,setIsHover]=useState([-1,-1 ])
const [isActiveLink,setIsActiveLink]=useState([0,0])

const handleMouseEnter = (index) => {
  setIsHover(index);
};

const handleMouseLeave = () => {

  setIsHover([-1,-1]);

};

const boxStyle = {
backgroundColor:currentColor,
color:'white',
opacity:'0.8',
borderRadius:'10px',
transition:'all 0.3s',
padding: '0.5em 0.5em',

};






const handleToggle=()=>{
 setActiveMenu(false)

}

const closeSideBar=()=>{
if(activeMenu && screenSize <=900 ){
  setActiveMenu(false)

}
}

  return (

    <div className={activeMenu? "sidebar--container":"sidebar--container sidebarclosed--component"}>

      <div className='sidebar--icons--header--flex'>
        <div className='box--flex--sidebar--heders'>
          <SiShopware className='shopware' />
          <h2>Shoppy</h2>
        </div>

        <MdOutlineCancel className='outlinecancel'
          onClick={handleToggle}

        />

      </div>

   <div className='container--items'>
  
        {links.map((data, index) =>
          <div className='box--category'
           key={index}
           
           >
            <p className='category--title'>{data.title}</p>
            {data.links.map((item,ind)=>
            
            <NavLink to={`/${item.name}`}
            key={ind}
            className='category--options'
            onClick={closeSideBar}
            
            >
             <div className='navlink--flex'
             onMouseEnter={()=>handleMouseEnter([index,ind])}
             onMouseLeave={handleMouseLeave}
             onClick={()=>{setIsActiveLink([index,ind])}}
           

             style={/* ((isHover[1]=== ind && isHover[0] === index ) ?  boxStyle:{})  && */ (isActiveLink[1]=== ind && isActiveLink[0] === index ) ?  boxStyle:{} } 
             key={ind}
            >
              <span className='icons-category'>{item.icon} </span> 
              <span className='options--items'>{item.name} </span>
              </div> 
             

            </NavLink>
            )}
              </div>


          

        )}
      </div> 



    </div>
  )
}
