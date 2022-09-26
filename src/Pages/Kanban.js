import React from 'react'
import Header from '../Components/Header'
import {KanbanComponent,ColumnDirective,ColumnsDirective} from '@syncfusion/ej2-react-kanban'
import {kanbanData,kanbanGrid} from '../Data/dummy'
export default function Kanban() {
  return (
    <div className='orders--page'>
<Header title={'Kanban'} Category={'App'}/>

<KanbanComponent
id='kanban'
dataSource={kanbanData}
cardSettings={{contentField:'Summary',headerField:"Id"}}
keyField='Status'
>
<ColumnsDirective>
{
  kanbanGrid.map((item,index)=><ColumnDirective key={index} {...item} />)
}
</ColumnsDirective>

</KanbanComponent>
    </div>
  )
}
