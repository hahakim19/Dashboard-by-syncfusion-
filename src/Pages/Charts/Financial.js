import React from 'react'
import Header from '../../Components/Header'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, 
  Inject, HiloSeries, Tooltip, DateTime, Zoom, 
  Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';
  import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../Data/dummy';
export default function Financial() {
  const date1 = new Date('2017, 1, 1');
  function filterValue(value) {
    if (value.x >= date1) {
      // eslint-disable-next-line no-sequences
      return value.x, value.high, value.low;
    }
  }
  const returnValue = financialChartData.filter(filterValue);

  return (
    <div  className='orders--page'>
    <Header title={'AAPLE Historical'} Category={'Financial'}/>
      <div style={{width:'90%',margin:'3em auto'}}>
   
      <ChartComponent
       id="charts"
       primaryXAxis={FinancialPrimaryXAxis}
       primaryYAxis={FinancialPrimaryYAxis}
       chartArea={{ border: { width: 0 } }}
       tooltip={{ enable: true, shared: true }}
       crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}>

<Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>


      </ChartComponent>

        </div>

    </div>
  )
}
