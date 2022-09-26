import React from 'react'
import Header from '../Components/Header'
import {ColumnDirective,GridComponent,ColumnsDirective,Selection,Toolbar,Search,Page,Edit,Inject,Sort,Filter, Resize} from'@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../Data/dummy'

export default function Custommer() {
  const toolbarOptions = ['Delete'];
  return (
    <div className='orders--page'>
      <Header title={'Customers'} Category={'page'}/>
 
      <GridComponent

    width="100%"
   dataSource={customersData}
   allowPaging
   allowSorting
   allowResizing
   selectionSettings={ { persistSelection: true }}
   toolbar={toolbarOptions}
   editSettings={{allowDeleting:true,allowEditing:true}}
   
 >
   <ColumnsDirective>
    
     {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} maxWidth='240px' />)}
   </ColumnsDirective>
  <Inject services={[Resize,Page,Toolbar,Selection,Edit,Sort,Filter]}/>
 </GridComponent> 
    </div>
  )
}
