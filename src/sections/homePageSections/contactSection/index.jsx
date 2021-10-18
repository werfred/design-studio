import Image from 'next/image'
import Link from 'next/link'

import * as Styles from './styles'
import BaseContainer from 'components/BaseContainer'
import Typography from 'components/Typography'
import Button from 'components/Buttons'
import SvgIcon from 'components/SvgIcon'

import girl from 'images/girl.png'
import Instagram from '../../../images/social-icons/instagram.svg'
import Telegram from '../../../images/social-icons/telegram.svg'
import Email from '../../../images/social-icons/email.svg'


const ContactSection = () => {
  return (
    <Styles.ContactSection>
      <BaseContainer>
        <Styles.InfoSection>
          <Typography size={4} fontWeight={'700'} textColor={'var(--color-dark-bg)'} tag={'h2'}>
            Find out the cost of design development
          </Typography>
          <Typography size={3} textColor={'var(--color-text)'}>
            Fill out the form and we will answer you within 24 hours
          </Typography>
          <div>
            <Link href={'/contacts'}>
              <a><Button>Submit your application</Button></a>
            </Link>
            <Styles.SocialMediaContainer>
              <SvgIcon fill={'#DF3939'} defaultFill={'var(--color-dark-bg)'}>
                <Instagram />
              </SvgIcon>

              <SvgIcon fill={'#00C2FF'} defaultFill={'var(--color-dark-bg)'}>
                <Telegram />
              </SvgIcon>

              <SvgIcon fill={'#FAC43A'} defaultFill={'var(--color-dark-bg)'}>
                <Email />
              </SvgIcon>
            </Styles.SocialMediaContainer>
          </div>
        </Styles.InfoSection>

        <Styles.SimpleImage>
          <Image src={girl} quality={90} alt={'girl-with-laptop'} />
        </Styles.SimpleImage>
      </BaseContainer>
    </Styles.ContactSection>
  )
}

export default ContactSection
