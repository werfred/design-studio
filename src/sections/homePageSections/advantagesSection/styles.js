import styled, {css} from 'styled-components'

import Typography from 'components/Typography'
import {MEDIA_QUERIES} from 'constants/mediaQueriesList'


export const AdvantagesSection = styled.div`
  padding: 60px 0;
  background-color: var(--color-dark-bg);
  ${MEDIA_QUERIES.sm} {
    padding: 40px 0;
  }

  > * {
    display: flex;
    align-items: flex-start;
    gap: 80px;
    ${MEDIA_QUERIES.lg} {
      flex-direction: column;
    }
    ${MEDIA_QUERIES.md} {
      gap: 30px;
    }
  }
`

export const HeadingsContainer = styled.div`
  max-width: 268px;
  width: 100%;
  padding: 16px 12px 16px 20px;
  box-shadow: 0 0 45px 12px rgba(0, 0, 0, 0.25);
  background-color: var(--color-grey-bg);
  border-radius: 8px;
  position: relative;

  display: flex;
  flex-direction: column;

  ::before {
    content: '';
    position: absolute;
    left: 24px;
    top: 8%;
    width: 3px;
    height: 84%;
    border-radius: 32px;
    background-color: #000;
  }
  
  ${MEDIA_QUERIES.lg} {
    padding: 12px 16px;
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
    ::before {
      top: 0;
      left: 16px;
      width: calc(100% - 32px);
      height: 3px;
    }
  }
  ${MEDIA_QUERIES.sm} {
    padding: 10px 0;
    ::before {
      left: 0;
      width: 100%;
    }
  }
`

export const Heading = styled(Typography)`
  cursor: pointer;
  padding: 20px 26px;
  position: relative;
  transition: color 0.15s;
  color: #8D8D8D;

  ${MEDIA_QUERIES.md} {
    padding: 14px 20px;
  }

  ${MEDIA_QUERIES.sm} {
    padding: 8px 12px;
    font-size: 13px;
  }
  ${MEDIA_QUERIES.xs} {
    padding: 8px 12px;
    font-size: 10px;
  }

  &:hover {
    color: #fff;
  }

  ${props => props.active ? css`
    color: #fff;

    ::before {
      content: '';
      position: absolute;
      width: 5px;
      height: 100%;
      top: 0;
      left: 3px;
      border-radius: 32px;
      background-color: var(--color-primary);
    }
    ${MEDIA_QUERIES.lg} {
      ::before {
        height: 5px;
        width: 90%;
        top: -14px;
      }
    }
    ${MEDIA_QUERIES.sm} {
      ::before {
        top: -10px;
        height: 4px;
      }
    }
  ` : null};
`

export const Slider = styled.div`
  flex-grow: 1;
`

export const SlideHeading = styled(Typography)`
  max-width: 50%;
  ${MEDIA_QUERIES.lg} {
    max-width: 100%;
  }
`

const Slide = css`
  display: ${props => props.active ? 'flex' : 'none'};
  padding: 0 20px;
  justify-content: space-between;
  position: relative;
  flex-direction: column;
  gap: 30px;
  ${MEDIA_QUERIES.lg} {
    padding: 0;
  }
  ${MEDIA_QUERIES.sm} {
    gap: 15px;
  }
`

/* abouts us */
export const SlideAboutUs = styled.div`
  ${Slide};

  > * {
    :nth-child(2) {
      display: flex;
      gap: 60px;
      ${MEDIA_QUERIES.sm} {
        flex-direction: column;
        gap: 20px;
      }
    }
  }
`

/* work process */
export const SlideWorkProcess = styled.div`
  ${Slide};
`

export const WorkSteps = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  ${MEDIA_QUERIES.sm} {
    flex-direction: column;
    gap: 10px;
  }
  > * {
    max-width: 240px;
    width: 100%;
    position: relative;
  }
`

export const WorkStep = styled.div`
  position: relative;
  gap: 40px;

  > * {
    :nth-child(1) {
      margin-bottom: 40px;
      ${MEDIA_QUERIES.sm} {
        display: none;
      }
    }
  }
`

export const Circle = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-dark-bg);
`

export const Line = styled.div`
  position: absolute;
  height: 2px;
  background-color: var(--color-primary);
  width: 100%;
  top: 23px;
  left: 46px;
`

/* clients */
export const SlideClients = styled.div`
  ${Slide};
`

export const ClientsLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  ${MEDIA_QUERIES.sm} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
`

/* contact us */
export const SlideContactUs = styled.div`
  ${Slide};
`
