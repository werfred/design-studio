import styled from 'styled-components'
import {Field, Form} from 'formik'
import {MEDIA_QUERIES} from 'constants/mediaQueriesList'


export const ContactPageContainer = styled.div`
  background: linear-gradient(90deg, var(--color-primary) 50%, var(--color-dark-bg) 50%);
  ${MEDIA_QUERIES.md} {
    background: var(--color-dark-bg);
  }
  > * {
    padding-top: 100px;
    padding-bottom: 80px;
    background: linear-gradient(90deg, var(--color-primary) 320px, var(--color-dark-bg) 320px);
    display: flex;
    gap: 120px;
    min-height: calc(100vh - 160px);
    ${MEDIA_QUERIES.lg} {
      gap: 60px;
    }
    ${MEDIA_QUERIES.md} {
      background: unset;
      gap: 40px;
      padding-top: 40px;
      padding-bottom: 40px;
      min-height: calc(100vh - 120px);
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

export const Sidebar = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-right: 30px;
  ${MEDIA_QUERIES.md} {
    flex-direction: row;
    gap: 30px;
    padding-right: 0;
    max-width: 100%;
    > * {
      :nth-child(2){
        display: none;
      }
    }
  }
`


export const BackToHome = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 10px;
  ${MEDIA_QUERIES.md} {
    display: none;
  }
  svg {
    transition: transform 0.2s ease-in-out;
  }

  :hover, :active {
    svg {
      transform: translateX(-4px);
    }
  }
`


export const MainContent = styled.div``

export const ContactForm = styled(Form)`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  input[type="file"] {
    display: none;
  }
`

export const FieldUpload = styled(Field)``

export const UploadLabel = styled.label`
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 36px;
  display: flex;
  align-items: center;
  gap: 12px;
  outline: none;
  transition: all 0.15s;
  color: #fff;

  border: 1px solid var(--color-primary);
  background-color: transparent;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  ${MEDIA_QUERIES.md}{
    padding: 8px 16px;
    font-size: 12px;
  }
`


export const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
`
