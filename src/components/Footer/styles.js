import styled, {css} from 'styled-components'

import {MEDIA_QUERIES} from 'constants/mediaQueriesList'


export const Footer = styled.div`
  background-color: var(--color-dark-bg);
  height: 80px;
  display: flex;
  align-items: center;

  ${MEDIA_QUERIES.md} {
    height: 60px;
  }

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  ${({currentPage}) => currentPage === 'contacts' ? css`
    background: linear-gradient(90deg, var(--color-primary) 50%, var(--color-dark-bg) 50%);
    
    > * {
      background: linear-gradient(90deg, var(--color-primary) 320px, var(--color-dark-bg) 320px);
    }

    ${MEDIA_QUERIES.md} {
      background: var(--color-dark-bg);
      > * {
        background: unset;
      }
    }
  ` : null}
`
