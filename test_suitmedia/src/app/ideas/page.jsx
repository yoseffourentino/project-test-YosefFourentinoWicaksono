"use client"

import { Suspense } from 'react'
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
            <Suspense fallback={<div className="py-8">Loading ideas...</div>}>
                <IdeasList />
            </Suspense>
            </main>
        </>
    )
}