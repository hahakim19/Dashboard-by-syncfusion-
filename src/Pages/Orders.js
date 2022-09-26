import React from 'react'
import Header from '../Components/Header'
import {ColumnDirective,GridComponent,ColumnsDirective,Resize,ContextMenu,Filter,Sort,Page,ExcelExport,PdfExport,Edit,Inject} from'@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../Data/dummy'

export default function Orders() {
  return (
    <div className='orders--page'>

  <Header title={'Orders'} Category={'page'}/>
    
  <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        
      >
        <ColumnsDirective>
         
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
       <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit]}/>
      </GridComponent>
 
    </div>
  )
}
