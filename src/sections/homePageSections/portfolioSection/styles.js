import styled from 'styled-components'
import {MEDIA_QUERIES} from 'constants/mediaQueriesList'


export const PortfolioSection = styled.div`
  padding-top: 60px;
  padding-bottom: 120px;
  background-color: var(--color-dark-bg);

  ${MEDIA_QUERIES.sm} {
    padding: 40px 0;
  }

  > * {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    ${MEDIA_QUERIES.lg} {
      flex-direction: column;
      gap: 30px;
    }
  }
`

export const InfoSection = styled.div`
  max-width: 260px;
  display: flex;
  gap: 20px;
  flex-direction: column;

  ${MEDIA_QUERIES.lg} {
    max-width: 100%;
    align-self: flex-start;
    gap: 0;
  }
`

export const WorksContainer = styled.div`
  display: grid;
  cursor: pointer;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  ${MEDIA_QUERIES.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px;
  }

  > * {
    opacity: 0.8;
    transition: all 0.2s;

    :hover, :active {
      transform: scale(1.1);
      opacity: 1;
    }
  }
`
