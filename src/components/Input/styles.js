import styled, {css} from 'styled-components'
import {Field} from 'formik'

import {MEDIA_QUERIES} from 'constants/mediaQueriesList'
import {ScrollBar} from 'constants/globalStyles'


export const InputStyles = css`
  width: 100%;
  background-color: transparent;
  font-size: 18px;
  color: #fff;
  padding: 16px 0;
  outline: none;
  border-radius: 2px;
  border: 2px transparent;
  border-bottom: 2px solid ${props => props.error === 'true' ? 'red' : '#000000'};
  transition: all 0.2s;
  margin-top: 10px;
  
  &::placeholder {
    color: var(--color-text);
  }

  &:focus {
    border-bottom: 2px solid ${props => props.error === 'true' ? 'red' : 'var(--color-primary)'};
  }
 
  ${MEDIA_QUERIES.lg} {
    font-size: 16px;
  }

  ${MEDIA_QUERIES.md} {
    font-size: 14px;
  }

  ${MEDIA_QUERIES.sm} {
    padding: 12px 20px;
  }
`

export const Label = styled.label``

export const Input = styled(Field)`
  ${InputStyles};
`

const TextAreaStyles = css`
  resize: none;
  border: 2px solid ${props => props.error === 'true' ? 'red' : '#000000'};
  &:focus {
    border: 2px solid ${props => props.error === 'true' ? 'red' : 'var(--color-primary)'};
  }
  padding: 10px;
  height: 152px;
  ${ScrollBar};
`

export const TextArea= styled.textarea`
  ${InputStyles};
  ${TextAreaStyles};
`
