import React from 'react'
import ReactDOM from 'react-dom/client'
import Head from './Head'
import Section from './Section'
import "./carte.css"
import Aside from './Aside'
import Footer from './Footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className="cont">
          <Head />
          <Section/>
          <Aside/>
          <Footer/>
      </div>

  </React.StrictMode>,
)
