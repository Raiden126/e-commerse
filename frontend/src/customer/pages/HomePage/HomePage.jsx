import React from 'react'
import MainCarrosel from '../../components/HomeCarrosel/MainCarrosel'
import HomeSectionCarrousel from '../../components/HomeSectionCarrousel/HomeSectionCarrousel'
import { mens_kurta } from '../../../Data/mens_kurta';

const HomePage = () => {
  return (
    <div>
        <MainCarrosel />
        <div className='py-20 space-y-10 flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarrousel data={mens_kurta} sectionName="Men's Kurta"/>
            <HomeSectionCarrousel data={mens_kurta} sectionName="Men's Shoes"/>
            <HomeSectionCarrousel data={mens_kurta} sectionName= "Men's Shirt"/>
            <HomeSectionCarrousel data={mens_kurta} sectionName="Women's saree"/>
            <HomeSectionCarrousel data={mens_kurta} sectionName="Women's dress"/>
        </div>
    </div>
  )
}

export default HomePage