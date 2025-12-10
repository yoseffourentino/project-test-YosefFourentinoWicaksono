import Banner from "@/components/Banner";
import Header from "@/components/Header";
import BannerImage from '../../assets/bannerImage.jpg'

export default function Work() {
    return (
        <>
        <Header />
            <main>
            <Banner
                imageUrl={BannerImage.src}
                title="Work"
                subtitle="We Craft Modern Digital Experiences"
            />
            </main>
        </>
    );
}