import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from "../images/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay.jpg"
import '../pages/HomeStyle.css'

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer'>
          <h1>Fast Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
          <button>
            ORDER NOW
          </button>
          </Link>
        
        </div>

      </div>
    </Layout>
  )
}

export default Home
