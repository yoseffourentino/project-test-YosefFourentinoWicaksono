"use client"

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import IdeasList from './IdeasList'
import BannerImage from '../../assets/bannerImage.jpg'



export default function IdeasPage() {

    return (
        <>
            <Header />
            <main>
            <Banner
                imageUrl={BannerImage.src}
                title="Ideas"
                subtitle="We Craft Modern Digital Experiences"
            />
            <IdeasList />
            </main>
        </>
    )
}