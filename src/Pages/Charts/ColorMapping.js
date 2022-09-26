import React from 'react'
import Header from '../../Components/Header'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,
   Inject, ColumnSeries, Category, Tooltip, Legend, 
   RangeColorSettingsDirective, RangeColorSettingDirective 
  } from '@syncfusion/ej2-react-charts';

  import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../Data/dummy';
export default function ColorMapping() {
  return (
    <div  className='orders--page'>
    <Header title={'USA CLIMATE - WEATHER BY MONTH'} Category={'Color Mappping'}/>

      <div style={{width:'90%',margin:'3em auto'}}>
 
      <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ mode: 'Range', background: 'white' }}
          tooltip={{ enable: true }}
        width='100%'
        margin={'auto'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
          </RangeColorSettingsDirective>
        </ChartComponent>
        </div>

    </div>
  )
}
