import React from 'react'
import Header from '../../Components/Header'
import { PyramidData } from '../../Data/dummy';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective,
   AccumulationSeriesDirective, Inject, AccumulationLegend, 
   AccumulationDataLabel, AccumulationTooltip, PyramidSeries,
    AccumulationSelection } from '@syncfusion/ej2-react-charts';

export default function Pyramide() {
  return (
    <div  className='orders--page'>
    <Header title={'Food Comparison Chart'} Category={'Pyramid'}/>

      <div style={{width:'90%',margin:'3em auto'}}>
      <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{ background: 'white' }}
          tooltip={{ enable: true }}
       
        >
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    
        </div>

    </div>
  )
}
