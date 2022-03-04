import React from 'react'
import { Contentbar } from './Contentbar'
import { Footer } from './Footer'
import { Header } from './Header'
import { Navbar } from './Navbar'
import { Toolbar } from './Toolbar'
export const Testproject=()=> 
{
    return(
        <> 
         <h1> My Test Project </h1>
         <Header/>
         <Toolbar/>
         <Navbar/>
         <Contentbar/>
         <Footer/>
        </>
           )
}