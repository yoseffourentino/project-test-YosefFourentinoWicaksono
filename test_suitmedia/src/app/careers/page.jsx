import Banner from "@/components/Banner";
import Header from "@/components/Header";
import BannerImage from '../../assets/bannerImage.jpg'

export default function Careers() {
    return (
        <>
        <Header />
            <main>
            <Banner
                imageUrl={BannerImage.src}
                title="Careers"
                subtitle="We Craft Modern Digital Experiences"
            />
            </main>
        </>
    );
}