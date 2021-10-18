import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'

import * as Styles from './styles'
import BaseContainer from 'components/BaseContainer'
import Typography from 'components/Typography'
import Button from 'components/Buttons'
import {works} from 'constants/portfolioWorks'

import work from '../../../images/works/work.png'


const PortfolioSection = () => {
  const router = useRouter()

  return (
    <Styles.PortfolioSection>
      <BaseContainer>
        <Styles.InfoSection>
          <Typography size={4} fontWeight={700} tag={'h2'}>Our last works</Typography>
          <Typography tag={'p'}>
            We also design websites, landing pages, promo sites and online stores.
          </Typography>

          <Link href={'/portfolio'}>
            <a><Button>View all</Button></a>
          </Link>
        </Styles.InfoSection>

        <Styles.WorksContainer>
          {works.slice(0, 4).map((work, index) => (
            <Image quality={90} onClick={() => router.push('/portfolio')}
                   key={index} src={work.image} alt={'work'} height={300} width={400} />
          ))}
        </Styles.WorksContainer>
      </BaseContainer>
    </Styles.PortfolioSection>
  )
}

export default PortfolioSection
