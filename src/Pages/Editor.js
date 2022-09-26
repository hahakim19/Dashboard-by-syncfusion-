import React from 'react'
import Header from '../Components/Header'
import {HtmlEditor,Image,Inject,Link,QuickToolbar,RichTextEditorComponent,Toolbar} from '@syncfusion/ej2-react-richtexteditor'
import {EditorData} from '../Data/dummy'
export default function Editor() {
  return (
    <div className='orders--page'>
<Header title={'Editor'} Category={'App'}/>
<RichTextEditorComponent>
<EditorData/>
  <Inject services={[HtmlEditor,Image,Link,QuickToolbar,Toolbar]}/>
</RichTextEditorComponent>
    </div>
  )
}
