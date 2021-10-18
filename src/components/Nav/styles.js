import styled, {css} from 'styled-components'
import {MEDIA_QUERIES} from 'constants/mediaQueriesList'


export const Navigation = styled.nav`
  height: 80px;
  background-color: var(--color-dark-bg);

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
  ${MEDIA_QUERIES.md} {
    height: 60px;
  }

  > * {
    display: flex;
    align-items: center;
    flex-grow: 1;
    height: 100%;
  }
`

export const Logo = styled.a`
  cursor: pointer;
  line-height: 0;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 36px;
  margin-left: auto;
  gap: 30px;

  svg {
    width: 16px;
  }

  ${MEDIA_QUERIES.sm} {
    margin-right: 20px;
    gap: 8px;

    svg {
      width: 12px;
    }
  }
`
