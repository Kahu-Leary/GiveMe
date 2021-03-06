import React from 'react'

import { Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import Register from './Register'
import SignIn from './SignIn'
import Home from './Home'
import ListAnItem from './ListAnItem'

import BrowseListings from './BrowseListings'
import ItemDetails from './ItemDetails'
import ContactUs from './ContactUs'
import SearchResults from './SearchResults'
import ItemsByCategory from './ItemsByCategory'

function App () {
  return (
    <>
      <Route path='/categorylist/:category' component={ItemsByCategory} />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/About' component={LandingPage}/>

      <Route exact path='/Home' component={Home} />
      <Route exact path='/ListAnItem' component={ListAnItem} />
      <Route exact path='/listings' component={BrowseListings} />

      <Route exact path='/register' component={Register} />

      <Route exact path='/ItemDetails/:id' component={ItemDetails} />

      <Route exact path='/ContactUs' component={ContactUs} />

      <Route path='/SignIn' component={SignIn} />
      <Route path='/searchresults/:searchinput' component={SearchResults} />

    </>
  )
}

export default App
