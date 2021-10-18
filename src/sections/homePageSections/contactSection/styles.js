import styled from 'styled-components'

import {MEDIA_QUERIES} from 'constants/mediaQueriesList'


export const ContactSection = styled.div`
  padding-bottom: 120px;
  background-color: var(--color-light-bg);
  ${MEDIA_QUERIES.sm} {
    padding-bottom: 60px;
  }

  > * {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    ${MEDIA_QUERIES.sm} {
      flex-direction: column;
      justify-content: center;
    }
  }
`

export const InfoSection = styled.div`
  max-width: 362px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${MEDIA_QUERIES.sm} {
    gap: 14px;
  }

  > * {
    :last-child {
      display: flex;
    }
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 28px;
  gap: 16px;
`

export const SimpleImage = styled.div`
  position: relative;
  z-index: 1;
  margin-right: -80px;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 26%;
    width: 360px;
    height: 170px;
    background: linear-gradient(270deg, #5332AF 0%, #6E60EA 100%);
    border-radius: 27px;
    z-index: -1;
    ${MEDIA_QUERIES.sm} {
      width: 260px;
    }
  }

  ${MEDIA_QUERIES.sm} {
    max-width: 300px;
    margin-right: 0;
  }
`
