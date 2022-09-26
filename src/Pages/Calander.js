import React from 'react'
import {ScheduleComponent,ViewDirective,ViewsDirective,Day,Week,WorkWeek,Month,Agenda,Inject,Resize,DragAndDrop} from '@syncfusion/ej2-react-schedule'
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars'
import {scheduleData} from '../Data/dummy'
import Header from '../Components/Header'
export default function Calander() {
  return (
    <div className='orders--page'>


      <Header title='Calender' Category='App'/>

      <ScheduleComponent height={'70vh'}
      eventSettings={{dataSource:scheduleData}}
      selectedDate={new Date(2022,8,10)}
      >

        <Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]}/>

      </ScheduleComponent>


    </div>
  )
}
