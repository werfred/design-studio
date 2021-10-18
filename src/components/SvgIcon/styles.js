import styled from 'styled-components'


export const SvgIcon = styled.span`
  cursor: pointer;
  > * path {
    transition: all 0.15s;
    fill: ${props => props.defaultFill ? props.defaultFill : 'var(--color-text)'};
  }
  :hover {
    > * path {
      fill: ${props => props.fill}
    }
  }
`
