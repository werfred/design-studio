import styled from 'styled-components'
import {MEDIA_QUERIES} from 'constants/mediaQueriesList'


export const HeroSection = styled.div`
  padding: 60px 0;
  background-color: var(--color-dark-bg);

  ${MEDIA_QUERIES.md} {
    padding: 30px 0;
  }
  > * {
    display: flex;
    gap: 60px;
    align-items: center;

    ${MEDIA_QUERIES.sm} {
      justify-content: center;
    }
  }
`

export const HeroImage = styled.div`
  width: 50%;
  
  ${MEDIA_QUERIES.sm} {
    display: none;
  }
`

export const IntroText = styled.div`
  max-width: 50%;

  ${MEDIA_QUERIES.sm} {
    max-width: 100%;
  }

  > * + * {
    margin-top: 42px;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 20px;

  ${MEDIA_QUERIES.sm} {
    gap: 12px;
  }
`
