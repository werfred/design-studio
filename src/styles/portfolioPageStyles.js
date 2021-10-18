import styled, {css} from 'styled-components'
import Typography from 'components/Typography'
import {MEDIA_QUERIES} from 'constants/mediaQueriesList'
import {ScrollBar} from 'constants/globalStyles'


export const PortfolioPageContainer = styled.div`
  background-color: var(--color-dark-bg);
  padding: 30px 0;
  min-height: calc(100vh - 160px);

  > * {
    position: relative;
    display: flex;
    gap: 20px;

    ${MEDIA_QUERIES.xl} {
      flex-direction: column;
      padding: 15px;
    }

    ${MEDIA_QUERIES.md} {
      min-height: calc(100vh - 120px);
    }
  }
`

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  ${MEDIA_QUERIES.xl} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
`

export const FiltersContainer = styled.div`
  align-self: flex-start;
  background-color: #1F1F24;
  border-radius: 8px;
  max-width: 264px;
  padding: 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  ${MEDIA_QUERIES.xl} {
    max-width: 100%;
    flex-wrap: nowrap;
    align-items: center;
    overflow: auto;
  }

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-dark-bg);
    border-top: 2px solid var(--color-dark-bg);
    border-bottom: 2px solid var(--color-dark-bg);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
    border-radius: 34px;
  }
`

const Option = css`
  transition: all 0.15s;
  background-color: ${props => props.selected ? 'var(--color-primary)' : '#171717'};
  color: ${props => props.selected ? '#fff' : '#8D8D8D'};
  border-radius: 30px;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
  flex-shrink: 0;
`

export const FilterOption = styled.span`
  ${Option};
`

export const MainFilterOption = styled.span`
  ${Option};
  width: 100%;
  padding: 14px 16px;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 12px;

  ${MEDIA_QUERIES.xl} {
    width: unset;
    margin-bottom: 0;
  }
  ${MEDIA_QUERIES.md} {
    padding: 8px 10px;
  }
`


/* works */
export const WorksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  ${MEDIA_QUERIES.xl} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${MEDIA_QUERIES.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${MEDIA_QUERIES.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
`

export const Work = styled.div`
  position: relative;
  cursor: pointer;
  max-height: 174px;
  max-width: 264px;

  ::after {
    position: absolute;
    transition: all 0.2s ease-in-out;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 38.44%, #000000 100%);
    background-size: 300% 300%;
  }

  img {
    transition: all 0.2s ease-in-out;
  }

  :hover {
    ::after {
      background-size: 100% 100%;
    }

    img {
      transform: scale(1.1);
    }
  }
`

export const WorkName = styled(Typography)`
  opacity: ${({isHovered}) => isHovered && 1 || 0};
  pointer-events: ${({isHovered}) => isHovered && 'all' || 'none'};
  transition: 0.2s;
  position: absolute;
  bottom: 14px;
  left: 10px;
  z-index: 1;
`

export const OpenButton = styled.span`
  position: absolute;
  top: 14px;
  left: 10px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  padding: 6px 10px;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  transition: background 0.1s;
  z-index: 1;

  ${MEDIA_QUERIES.sm} {
    top: 7px;
    left: 5px;
    padding: 4px 8px;
  }

  :hover {
    background: rgba(0, 0, 0, 0.6);
  }
`

export const WorkDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 15px;
  width: 100%;
  z-index: 10;
  display: flex;
  transition: 0.2s ease-in-out;
  align-items: stretch;
  max-height: calc(100vh - 120px);
  overflow: auto;

  ${({open}) => open ? css`
    opacity: 1;
    pointer-events: all;
  ` : css`
    opacity: 0;
    pointer-events: none;
  `}
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`


export const ShowCase = styled.div`
  width: calc(100% - 40px);
  background-color: #eeeeee;
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: max-content;
  ${MEDIA_QUERIES.xl} {
    grid-template-columns: 1fr;
  }
  ${MEDIA_QUERIES.sm} {
    width: calc(100% - 28px);
  }

  > * {
    cursor: pointer;

    img {
      transition: all 0.2s ease-in-out;
    }

    :hover {
      img {
        transform: scale(1.1);
      }
    }

    :nth-child(1) {
      grid-column: 1 / 3;
      ${MEDIA_QUERIES.xl} {
        grid-column: 1 / 2;
      }
    }
  }
`

export const Border = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--color-primary);
  width: 42px;
  ${MEDIA_QUERIES.sm} {
    width: 28px;
  }
`

export const ClosePopupButton = styled.span`
  position: absolute;
  top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  left: 50%;
  transform-origin: left;
  transform: translateY(50%) rotate(90deg);
`

export const ProjectName = styled.span`
  position: absolute;
  bottom: 24%;
  display: flex;
  flex-shrink: 0;
  white-space: nowrap;
  left: 50%;
  transform-origin: left;
  transform: translateY(50%) rotate(90deg);
`
