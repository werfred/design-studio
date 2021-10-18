import {useRef, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import * as Styles from '../../styles/portfolioPageStyles'
import Seo from 'components/Seo'
import Layout from 'layout'
import BaseContainer from 'components/BaseContainer'
import Typography from 'components/Typography'
import {categories, works} from 'constants/portfolioWorks'
import {BackToHome} from 'styles/contactsPageStyles'
import Arrow from '../../images/arrow.svg'
import useOutsideClick from 'hooks/clickOutside'

import CloseIcon from '../../images/close.svg'


const PortfolioPage = () => {
  const [portfolioName, setPortfolioName] = useState('')
  const [portfolioImages, setPortfolioImages] = useState([])
  const [open, setOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [currentHoveredWork, setCurrentHoveredWork] = useState('')
  const [currentCategory, setCurrentCategory] = useState('all')
  const [filteredWorks, setFilteredWorks] = useState(works)

  const filterHandler = (category) => {
    if (category === 'all') {
      setFilteredWorks(works)
    } else {
      setFilteredWorks(works.filter((work) => work.category === category))
    }
    setCurrentCategory(category)
  }
  const setMouseOverHandler = (currentWork) => {
    setIsHovered(true)
    setCurrentHoveredWork(currentWork)
  }
  const setMouseOutHandler = () => {
    setIsHovered(false)
    setCurrentHoveredWork('')
  }

  const openPortfolioWork = (images, workName) => {
    setOpen(true)
    setPortfolioImages(images)
    setPortfolioName(workName)
  }

  return (
    <>
      <Seo />
      <Layout>
        <Styles.PortfolioPageContainer>
          <BaseContainer>
            <Styles.Sidebar>
              <Styles.FiltersContainer>
                <Styles.MainFilterOption
                  selected={currentCategory === 'all'}
                  onClick={() => filterHandler('all')}>All works
                </Styles.MainFilterOption>
                {categories.map((category, index) => (
                  <Styles.FilterOption
                    key={index}
                    selected={currentCategory === category.category}
                    onClick={() => filterHandler(category.category)}>
                    {category.categoryName}
                  </Styles.FilterOption>
                ))}
              </Styles.FiltersContainer>
              <Link href={'/'} passHref>
                <BackToHome>
                  <Arrow />
                  <Typography>Back to home page</Typography>
                </BackToHome>
              </Link>
            </Styles.Sidebar>


            <Styles.WorksContainer>
              {filteredWorks.map((work, index) => (
                <Styles.Work key={index}
                             onMouseOver={() => setMouseOverHandler(work.name)}
                             onMouseOut={setMouseOutHandler}
                >
                  <Image src={work.image} alt={''} width={264} height={174} />
                  <Styles.OpenButton onClick={() => openPortfolioWork(work.showCase, work.name)}>Open</Styles.OpenButton>
                  <Styles.WorkName isHovered={isHovered && currentHoveredWork === work.name}
                                   fontWeight={700} textColor={'#fff'}>{work.name}</Styles.WorkName>
                </Styles.Work>
              ))}
            </Styles.WorksContainer>
            <WorkDetailsPopup setOpen={setOpen} open={open} imagesArray={portfolioImages} portfolioName={portfolioName} />
          </BaseContainer>
        </Styles.PortfolioPageContainer>
      </Layout>
    </>
  )
}

const WorkDetailsPopup = ({setOpen, open, imagesArray, portfolioName}) => {
  const closeWorkDetails = useRef('')
  useOutsideClick(closeWorkDetails, () => setOpen(false))
  return (
    <Styles.WorkDetails open={open} ref={closeWorkDetails}>
      <Styles.ShowCase>
        {imagesArray.map((image, index) => (
          <Image key={index} src={image} alt={''} width={1200} height={760} />
        ))}
      </Styles.ShowCase>

      <Styles.Border>
        <Styles.ClosePopupButton onClick={() => setOpen(false)}>
          <CloseIcon />
          <Typography fontWeight={600}>Close</Typography>
        </Styles.ClosePopupButton>

        <Styles.ProjectName>
          <Typography fontWeight={600}>{portfolioName}</Typography>
        </Styles.ProjectName>
      </Styles.Border>
    </Styles.WorkDetails>
  )
}

export default PortfolioPage
