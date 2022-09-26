import React from 'react'

import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import Header from '../Components/Header'
export default function ColorPicker() {
  const changeColor=(args)=>{
    document.querySelector('.color--tester').style.color=args.currentValue.hex;
  }
  return (
    <div className='orders--page'>
          <Header title={'Employees'} Category={'page'}/>
      <div >
        <p className='color--tester'>Choose your Color </p>
      </div>

      <div className='colorpicker--grid'>
        <div>
          <p className='color--text'>Inline Pallete</p>
          <ColorPickerComponent id="inline-palette" mode="Palette" modeSwitcher={false} inline showButtons={false} change={changeColor} />
        </div>
        <div>
<p className='color--text'>Inline Picker</p>
<ColorPickerComponent id='colorpicker'showButtons={false} mode="Picker" modeSwitcher={false} inline={true} change={changeColor}  />
        </div>
      </div>

    </div>
  )
}
