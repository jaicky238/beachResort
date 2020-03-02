import React, { Component } from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';
export default class Home extends Component {
    render() {
        return (
        <>
           <Hero>
               <Banner title="Luxuriousrooms" subtitle="Deluxe room starting from $299">
                    <Link to="/rooms" className="btn-primary">
                        our Rooms
                    </Link>
               </Banner>
           </Hero>
            <Services/>
            <FeaturedRoom/>
            </>
      
        )
    }
}
