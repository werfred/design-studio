import * as Styles from '../styles/homePageStyles'
import Seo from '../components/Seo'
import Layout from 'layout'
import HeroSection from '../sections/homePageSections/heroSection'
import AdvantagesSection from '../sections/homePageSections/advantagesSection'
import PortfolioSection from '../sections/homePageSections/portfolioSection'
import ReviewsSection from '../sections/homePageSections/reviewsSection'
import ContactSection from '../sections/homePageSections/contactSection'


export default function HomePage() {
  return (
    <>
      <Seo />
      <Layout>
        <Styles.HomePageContainer>
          <HeroSection />
          <AdvantagesSection />
          <PortfolioSection />
          <ReviewsSection />
          <ContactSection />
        </Styles.HomePageContainer>
      </Layout>
    </>
  )
}
