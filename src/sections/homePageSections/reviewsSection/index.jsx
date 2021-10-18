import Image from 'next/image'

import * as Styles from './styles'
import BaseContainer from '../../../components/BaseContainer'
import Typography from '../../../components/Typography'

import photo from 'images/reviews/photo.png'


const ReviewsSection = () => {
  return (
    <Styles.ReviewsSection>
      <BaseContainer>
        <Typography tag={'h4'} fontWeight={700} textColor={'var(--color-dark-bg)'} size={4}>
          Customer Reviews
        </Typography>

        <Styles.ReviewsGrid>
          {Array.from(Array(12).keys()).map((item, index) => (
            <Styles.ReviewCard key={index}>
              <Styles.ReviewHeader>
                <Image src={photo} alt={'director'} width={76} height={77} />
                <Styles.ProjectName>
                  <Typography size={3} textColor={'var(--color-dark-bg)'}>John Doe</Typography>
                  <Typography textColor={'var(--color-text)'}>CEO</Typography>
                  <Typography fontWeight={700} textColor={'var(--color-text)'}>Facebook</Typography>
                </Styles.ProjectName>
              </Styles.ReviewHeader>

              <Styles.ReviewContent>
                <Typography fontWeight={600} size={1} textColor={'#000'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi
                </Typography>
              </Styles.ReviewContent>
            </Styles.ReviewCard>
          ))}
        </Styles.ReviewsGrid>

      </BaseContainer>
    </Styles.ReviewsSection>
  )
}

export default ReviewsSection
