import styled, {css} from 'styled-components'
import {MEDIA_QUERIES} from 'constants/mediaQueriesList'


export const Button = styled.button`
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 36px;
  display: inline-block;
  outline: none;
  transition: all 0.15s;
  color: #fff;
  :active {
    transform: translateY(2px);
  }
  
  ${MEDIA_QUERIES.md} {
    padding: 10px 20px;
    font-size: 12px;
  }
  ${MEDIA_QUERIES.sm} {
    padding: 9px 18px;
  }

  ${({buttonType}) => {
    switch (buttonType) {
      case 'empty':
        return css`
          border: 2px solid ${({borderColor}) => borderColor || '#fff'};;
          background-color: transparent;
          &:hover {
            border-color: var(--color-primary);
            color: var(--color-primary);
          }
        `
      case 'filled':
        return css`
          border: 2px solid transparent;
          background-color: var(--color-primary);
          &:hover {
            background-color: rgba(95, 71, 202, 0.8);
          }
          &:active {
            background-color: rgb(82, 56, 206);
          }
        `
      case 'arrow':
        return css`
          border: 2px solid ${({borderColor}) => borderColor || '#fff'};
          background-color: transparent;
          border-radius: 6px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          > svg {
            transition: all 0.15s;
            transform: rotate(${props => props.rotate ? props.rotate : '0'}deg);
            > path {
              fill: #fff;
            }
          }
          &:hover {
            border-color: var(--color-primary);
            color: var(--color-primary);
            > svg {
              transition: all 0.15s;
              > path {
                fill: var(--color-primary);
              }
            }
          }
        `
    }
  }};
`

Button.defaultProps = {
  buttonType: 'filled'
}
