import React from 'react'
import Header from '../Components/Header'
import {ColumnDirective,GridComponent,ColumnsDirective,Toolbar,Resize,ContextMenu,Search,Page,ExcelExport,PdfExport,Edit,Inject} from'@syncfusion/ej2-react-grids'
import { employeesData, contextMenuItems, employeesGrid } from '../Data/dummy'
export default function Employees() {
  return (
    <div className='orders--page'>

    <Header title={'Employees'} Category={'page'}/>
      
    <GridComponent

       width="auto"
          dataSource={employeesData}
          allowPaging
          allowSorting
          toolbar={['Search']}
          
        >
          <ColumnsDirective>
           
            {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
         <Inject services={[Page,Toolbar,Search]}/>
        </GridComponent>
   
      </div>
  )
}
