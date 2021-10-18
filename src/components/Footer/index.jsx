import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import * as Styles from './styles'
import BaseContainer from '../BaseContainer'
import Typography from '../Typography'


const Footer = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    if (router.pathname === '/contacts') {
      setCurrentPage('contacts')
    }
  }, [router.pathname])

  return (
    <Styles.Footer currentPage={currentPage}>
      <BaseContainer>
        <Typography textColor={'#f5f5f5'}>© Design Studio. All rights reserved.</Typography>
      </BaseContainer>
    </Styles.Footer>
  )
}

export default Footer
