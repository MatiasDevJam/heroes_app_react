import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
    return (
        <>
            {/* utilizamos nuestro componente Navbar */}
            <Navbar />
            <div className="container mt-2">
                <Routes>
                    <Route exact="true" path="marvel" component={ <MarvelScreen /> } />
                    <Route exact="true" path="hero/:heroeId" element={ <HeroScreen /> } />
                    <Route exact="true" path="dc" element={ <DcScreen /> } />
                    <Route exact="true" path="search" element={ <SearchScreen /> } />

                    
                </Routes>
            </div>
        </>
    )
} 
