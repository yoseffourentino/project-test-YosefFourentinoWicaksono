import Banner from "@/components/Banner";
import Header from "@/components/Header";
import BannerImage from '../../assets/bannerImage.jpg'

export default function Contact() {
    return (
        <>
        <Header />
            <main>
            <Banner
                imageUrl={BannerImage.src}
                title="Contact"
                subtitle="We Craft Modern Digital Experiences"
            />
            </main>
        </>
    );
}