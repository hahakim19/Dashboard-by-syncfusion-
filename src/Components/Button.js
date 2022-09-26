import React from 'react'

export default function Button({content,ClassName,customfunc,bgColor,color,icon}) {

  return (
    <div>
      <button 
       style={{backgroundColor:bgColor}}
       className={ClassName} 
       onClick={()=>customfunc}>
       {icon} {content}
      </button>
    </div>
  )
}
