import React from 'react'
import Header from '../../Components/Header'
import { LineChart } from '../../Components/Index'
export default function Line() {
  return (
    <div  className='orders--page'>
    <Header title={'Inflation Rate'} Category={'Chart'}/>
      <div style={{width:'90%',margin:'3em auto'}}>

        <LineChart/>

        </div>

    </div>
  )
}
