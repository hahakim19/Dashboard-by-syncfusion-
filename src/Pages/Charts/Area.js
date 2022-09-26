import React from 'react'
import Header from '../../Components/Header';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend ,Tooltip} from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis} from '../../Data/dummy'
export default function Area() {
  return (
    <div  className='orders--page'>
    <Header title={'Inflation Rate in percentage'} Category={'Area'}/>
      <div style={{width:'90%',margin:'3em auto'}}>
      <ChartComponent
      id='area-chart'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      tooltip={{enable:true}}
      chartArea={{border:{width:'0'}}}
      
      >

        <Inject services={[Legend,DateTime,SplineAreaSeries,Tooltip]}/>
        <SeriesCollectionDirective>
          {
            areaCustomSeries.map((item,index)=><SeriesDirective key={index}{...item}/>)
          }
        </SeriesCollectionDirective>
      </ChartComponent>
    

        </div>

    </div>
  )
}
