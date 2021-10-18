import Link from 'next/link'

import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import * as Styles from './styles'
import BaseContainer from 'components/BaseContainer'
import SvgIcon from 'components/SvgIcon'
import Button from 'components/Buttons'

import Instagram from '../../images/social-icons/instagram.svg'
import Telegram from '../../images/social-icons/telegram.svg'
import Email from '../../images/social-icons/email.svg'


const Nav = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    if (router.pathname === '/contacts') {
      setCurrentPage('contacts')
    }
  }, [router.pathname])

  return (
    <Styles.Navigation currentPage={currentPage}>
      <BaseContainer>
        <Link href={'/'} passHref>
          <Styles.Logo>
            <picture>
              <source srcSet="/logo-small.svg" media="(max-width: 576px)" />
              <img src="/logo.svg" alt="design studio" />
            </picture>
          </Styles.Logo>
        </Link>

        <Styles.SocialMediaContainer>
          <Link href={'#'}>
            <a><SvgIcon fill={'#DF3939'}>
              <Instagram />
            </SvgIcon></a>
          </Link>
          <Link href={'#'}>
            <a><SvgIcon fill={'#00C2FF'}>
              <Telegram />
            </SvgIcon></a>
          </Link>
          <Link href={'#'}>
            <a><SvgIcon fill={'#FAC43A'}>
              <Email />
            </SvgIcon></a>
          </Link>
        </Styles.SocialMediaContainer>
        <Link href={'/contacts'}>
          <a><Button buttonType={'empty'}>Submit your application</Button></a>
        </Link>
      </BaseContainer>
    </Styles.Navigation>
  )
}

export default Nav
