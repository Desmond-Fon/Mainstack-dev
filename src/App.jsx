// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Content } from './components/Content'
import { Header } from './components/Header'
import {SideNav} from './components/SideNav'
import { DataProvider } from './context/data'
// import { useContext, useEffect } from 'react'
// import { DataContext } from './context/data'
// import axios from 'axios'

function App() {
  // const { chartData, setChartData } = useContext(DataContext);

  // useEffect(() => {
  //   axios
  //     .get('https://fe-task-api.mainstack.io/')
  //     .then((response) => {
  //       setChartData(response);

  //     });
  // }, [setChartData]);

  // console.log(chartData);

  return (
    <>
          <DataProvider>
          <div className='h-[100vh] overflow-hidden w-full font-montserrat'>
      {/* <Container maxW={'container'}> */}
        <div className="grid grid-cols-[304px,1fr]">
          <div className='overflow-y-auto max-h-screen'>
            {/* <SideNavigation /> */}
            {/* <div>side nav</div> */}
            <SideNav />
          </div>
          <div className=''>
            {/* <Header /> */}
            {/* <div>header</div> */}
            <Header />
            <div className='overflow-y-auto h-[100vh]'>
              {/* <Outlet /> */}
              {/* <div>content</div> */}
              <Content />
            </div>
          </div>
        </div>
      {/* </Container> */}
    </div>
          </DataProvider>
    </>
  )
}

export default App
