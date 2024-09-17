import React from 'react'
import MainCarrosel from '../../components/HomeCarrosel/MainCarrosel'
import HomeSectionCarrousel from '../../components/HomeSectionCarrousel/HomeSectionCarrousel'

const HomePage = () => {
  return (
    <div>
        <MainCarrosel />
        <div className='py-20 space-y-10 flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarrousel />
            <HomeSectionCarrousel />
            <HomeSectionCarrousel />
            <HomeSectionCarrousel />
        </div>
    </div>
  )
}

export default HomePage