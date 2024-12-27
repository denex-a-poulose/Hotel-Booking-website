import React from 'react'
import NavBar from '../common/NavBar'
import Banner from './Banner'
import SortComponent from './SortComponent'
import Explore from './Explore'
import Footer from '../common/Footer'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <SortComponent />
            <Explore />
            <Footer />
        </div>
    )
}

export default Home