import styled from 'styled-components'
import {ScrollBar} from 'constants/globalStyles'
import {MEDIA_QUERIES} from 'constants/mediaQueriesList'


export const ReviewsSection = styled.div`
  background-color: var(--color-light-bg);
  padding: 120px 0;
  ${MEDIA_QUERIES.sm} {
    padding: 60px 0;
  }
`

export const ReviewCard = styled.div`
  max-width: 320px;
  padding: 20px;
  background: #fff;
  border-radius: 22px;
  ${MEDIA_QUERIES.sm} {
    padding: 8px;
  }
`

export const ReviewHeader = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 2px solid #F4F4F4;
  gap: 40px;
  ${MEDIA_QUERIES.md} {
    gap: 10px;
    padding-bottom: 10px;
  }

  > * {
    :nth-child(1) {
      align-self: flex-start;
    }
  }
`

export const ProjectName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const ReviewContent = styled.div`
  padding-top: 20px;
  ${MEDIA_QUERIES.md} {
    padding-top: 10px;
  }
`

export const ReviewsGrid = styled.div`
  margin-top: 60px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  max-height: 280px;
  overflow: auto;
  ${ScrollBar};
  
  ${MEDIA_QUERIES.md} {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    grid-gap: 12px;
  }
  ${MEDIA_QUERIES.xs} {
    grid-template-columns: 1fr;
  }
`
