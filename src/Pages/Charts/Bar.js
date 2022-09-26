import React from 'react'
import Header from '../../Components/Header'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../Data/dummy';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
export default function Bar() {
  return (
    <div  className='orders--page'>
    <Header title={'Inflation Rate in percentage'} Category={'Area'}/>
      <div style={{width:'90%',margin:'3em auto'}}>
      <ChartComponent
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{border:{width:'0'}}}
      tooltip={{enable:true}}

      >
        <Inject services={[Legend,Tooltip,ColumnSeries,DataLabel,Category]} />
        <SeriesCollectionDirective>

          {
           barCustomSeries.map((item,index)=> <SeriesDirective key={index}{...item}/>)
          }
        </SeriesCollectionDirective>
       
      </ChartComponent>
    

        </div>

    </div>
  )
}
