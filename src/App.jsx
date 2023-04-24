// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {SideNav} from './components/SideNav'

function App() {


  return (
    <>
          <div className='h-[100vh] overflow-hidden w-full font-montserrat'>
      {/* <Container maxW={'container'}> */}
        <div className="grid grid-cols-[304px,1fr]">
          <div className='overflow-y-auto max-h-screen'>
            {/* <SideNavigation /> */}
            {/* <div>side nav</div> */}
            <SideNav />
          </div>
          <div className=' bg-blue-700'>
            {/* <Header /> */}
            <div>header</div>
            <div className='overflow-y-auto max-h-screen'>
              {/* <Outlet /> */}
              <div>content</div>
            </div>
          </div>
        </div>
      {/* </Container> */}
    </div>
    </>
  )
}

export default App
