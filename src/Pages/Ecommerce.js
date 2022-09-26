import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkChart } from '../Components/Index'
import { earningData, SparklineAreaData, ecomPieChartData, recentTransactions, weeklyStats, dropdownData, medicalproBranding } from "../Data/dummy"
import { useStateContext } from '../Context/ContextProvider'
import svg from '../Data/welcome-bg.svg'
import { MdPermIdentity } from 'react-icons/md'
export default function Ecommerce() {
const {currentColor} = useStateContext()




  return (
    <div className='ecommerce--container'>

      <div className='img--container--svg' >

        <img src={svg} className='img--svg' />

        <div className='ecommerce--info--baner'>
          <p className='p1-ecommerce'>Earnings</p>
          <p className='p2-ecommerce'>544.654$</p>

          <Button ClassName='btn--download' bgColor={currentColor} content='Download' />
        </div>


      </div>
      <div className='card--ecommerce--grid'>
        {
          earningData.map((item, index) => {
            return (
              <div className='card--ecommerce'>

                <button className={`item--${item.title} button--icons`} style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                  {item.icon}
                </button>
                <p style={{ margin: '0' }}>
                  <span className='ecommerce--amount' >
                    {item.amount}
                  </span>
                  <span className='ecommerce--percentage' style={{ color: item.pcColor, opacity: '0.5' }}>{item.percentage}</span>
                </p>

                <p className='ecommerce--title' >{item.title}</p>

              </div>
            )
          })
        }
      </div>
      <div className='grid--ecommerce--charts'>
        <div>
          <p>Revenue Updates</p>
          <div className='box--info--ecommerce' >
            <div className='box--of--box'>

           
            <div className='box--info--ecommerce--child1'>
            <p className='texte--info-ecom'>$93,438</p> 
            <span>24%</span>
            </div>
            <p style={{fontSize:'0.8em',color:'grey' ,fontWeight:'500',margin:'0'}}>Budget</p>
   
           {/*  <p className='texte--info-ecom'>$43,438</p>  */}
         </div>
         <div className='box--of--box'>

           
<div className='box--info--ecommerce--child1'>
<p className='texte--info-ecom'>$43,438</p> 


</div>
<p style={{fontSize:'0.8em',color:'grey' ,fontWeight:'500',margin:'0'}}>Expense</p>

{/*  <p className='texte--info-ecom'>$43,438</p>  */}
</div>
<div className='ecommerce--line--chart'>

<SparkChart 
currentColor='red'
id='line-sparkLine'
type="Line"
height='100px'
width='80%'
data={SparklineAreaData}
color='red'


/>

</div>

<Button
content='Download Reports'
bgColor={currentColor}
color='#fff'
ClassName='btn--reports'
/>

          </div>







        </div>





        <div className='second--grid'>
          <div className='box--heders--Bud-exp'>
             <p className='legend--satcked'>
            <GoPrimitiveDot/> <span> Expense</span>
          </p>

          <p className='legend--satcked green'>
      <GoPrimitiveDot/> <span>
           Budget</span>
          </p>
         
          </div>
         

            <div className='barchart--ecommerce'>
          <Stacked width={'90%'}
             height={'295px'}
        /> 
            </div>


        </div>
      </div>


    </div>
  )
}
