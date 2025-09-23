import React from 'react'
import AppRoutes from './routes/AppRoutes'
import FullScreenNav from './components/navbar/FullScreenNav'

const App = () => {
  return (
    <div className='relative h-screen w-screen overflow-x-hidden'>
      <AppRoutes />
      <FullScreenNav />
    </div>
  )
}

export default App
