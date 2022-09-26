import React from 'react'
import Header from '../../Components/Header'
import PieChart from '../../Components/Charts/PieChart'
import { pieChartData } from '../../Data/dummy';
export default function Pie() {
  return (
    <div  className='orders--page'>
    <Header title={'Inflation Rate in percentage'} Category={'Area'}/>
      <div style={{width:'90%',margin:'3em auto'}}>
    <PieChart id='pie-chart' data={pieChartData} />
        </div>

    </div>
  )
}
