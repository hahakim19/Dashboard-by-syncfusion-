import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {
  Button, Cart, Footer, Header, Navbar, Notification, SideBar, ThemeSettings,
  UserProfile, ChartsHeader, LineChart, SparkChart
} from './Components/Index'

import {
  Ecommerce, Orders, Custommer, Kanban, ColorPicker, ColorMapping, Editor,
  Calander, Line, Pie, Pyramide, Employees, Stacked, Area, Bar, Financial
} from './Pages/Index'

import { useStateContext } from './Context/ContextProvider';

import { registerLicense } from '@syncfusion/ej2-base';
import { Transition, CSSTransition } from 'react-transition-group'
import { AiFillSetting } from 'react-icons/ai'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Loading from './Components/Loading';
import Desktop from './Pages/Desktop';



function App() {

  registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFaclxJXGNWf1dpR2NbfU5xdl9DZ1ZVQmY/P1ZhSXxRdkxiXX5dcH1RRWdeV0Y=')

  const { isLoading, setIsThemeOpen, isThemeOpen,
    activeMenu, screenSize, setScreenSize,
    setActiveMenu, setCurrentPage, setIsLoading } = useStateContext()

  const [isPhone, setIsphone] = useState(true)




  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)


    }
    window.addEventListener('resize', handleResize)
    handleResize()
    console.log(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize)

    };
  }, []);





  useEffect(() => {

    if (screenSize <= 900) {
      setActiveMenu(false)
    }
    else {
      setActiveMenu(true)
    }

  }, [screenSize])










  useEffect(() => {


    setTimeout(() => {
      setIsLoading(false)
    }, 2000)





  }, [])


  useEffect(() => {
    if (window.innerWidth < 800) {
      setIsphone(false)
      console.log(isPhone)

    }
  }, [])





  return (


    <div className="App">

      {isPhone ? 

        <BrowserRouter>


          <div className='Box--app--grid' >




            <SideBar />













            <div className={activeMenu ? 'personne' : 'personne otherpersone'}>







              <Navbar />

              <div>

                <div className='flotting--setting' onClick={() => { setIsThemeOpen(true); setActiveMenu(false) }}>
                  <TooltipComponent content={'Settings'} position="TopCenter">
                    <AiFillSetting />
                  </TooltipComponent>

                </div>

                {isThemeOpen && <ThemeSettings />}

                {isLoading ? <Loading /> :

                  <div>


                    <Routes>

                      {/* Dashbord */}

                      <Route path='/' element={<Ecommerce />} />
                      <Route path='/ecommerce' element={<Ecommerce />} />

                      {/* Pages */}

                      <Route path='/Orders' element={<Orders />} />
                      <Route path='/employees' element={<Employees />} />
                      <Route path='/customers' element={<Custommer />} />

                      {/* Apps */}

                      <Route path='/kanban' element={<Kanban />} />
                      <Route path='/color-picker' element={<ColorPicker />} />
                      <Route path='/calendar' element={<Calander />} />
                      <Route path='/editor' element={<Editor />} />

                      {/* charts */}

                      <Route path="/line" element={<Line />} />
                      <Route path="/area" element={<Area />} />
                      <Route path="/bar" element={<Bar />} />
                      <Route path="/pie" element={<Pie />} />
                      <Route path="/financial" element={<Financial />} />
                      <Route path="/color-mapping" element={<ColorMapping />} />
                      <Route path="/pyramid" element={<Pyramide />} />
                  





                    </Routes>
                    <Footer />

                  </div>
                }



              </div>
            </div>












          </div>







        </BrowserRouter> :

<Desktop />
      }
    </div>

  );
}

export default App;
