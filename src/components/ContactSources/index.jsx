import * as Styles from './styles'
import Typography from 'components/Typography'
import SvgIcon from 'components/SvgIcon'

import Instagram from '../../images/social-icons/instagram.svg'
import Telegram from '../../images/social-icons/telegram.svg'


const ContactSources = ({direction}) => {
  return (
    <Styles.ContactSources direction={direction}>
      <Styles.Email>
        <Typography textColor={'var(--color-text)'}>
          email
        </Typography>
        <Typography>
          <a href={'mailto: pochta@gmail.com'}>pochta@gmail.com</a>
        </Typography>
      </Styles.Email>

      <Styles.SocialMedia>
        <Typography textColor={'var(--color-text)'}>
          Social Networks
        </Typography>
        <Styles.SocialNetwork>
          <SvgIcon fill={'#DF3939'} defaultFill={'#fff'}>
            <Instagram />
          </SvgIcon>
          <Typography fontWeight={'600'} size={1}>
            instagram
          </Typography>
        </Styles.SocialNetwork>
        <Styles.SocialNetwork>
          <SvgIcon fill={'#00C2FF'} defaultFill={'#fff'}>
            <Telegram />
          </SvgIcon>
          <Typography fontWeight={'600'} size={1}>
            telegram
          </Typography>
        </Styles.SocialNetwork>
      </Styles.SocialMedia>
    </Styles.ContactSources>
  )
}

export default ContactSources
