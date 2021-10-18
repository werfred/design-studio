import Link from 'next/link'

import * as Styles from './styles'
import BaseContainer from 'components/BaseContainer'
import Typography from 'components/Typography'
import Button from 'components/Buttons'

import HeroImage from '../../../images/hero-image.svg'


const HeroSection = () => {
  return (
    <Styles.HeroSection>
      <BaseContainer>
        <Styles.IntroText>
          <Typography fontWeight={700} size={5} tag={'h1'} textColor={'#fff'}>
            Professional graphics - vector and bitmap layouts
          </Typography>
          <Typography tag={'p'}>
            Graphic design for your company or product will help you to establish
            yourself favorably from competitors, gain the trust of customers and partners.
          </Typography>

          <Styles.Buttons>
            <Link href={'/contacts'}>
              <a><Button>Details</Button></a>
            </Link>
            <Link href={'/portfolio'}>
              <a><Button buttonType={'empty'} borderColor={'var(--color-primary)'}>Portfolio</Button></a>
            </Link>
          </Styles.Buttons>
        </Styles.IntroText>

        <Styles.HeroImage>
          <HeroImage />
        </Styles.HeroImage>
      </BaseContainer>
    </Styles.HeroSection>
  )
}

export default HeroSection
