import styled from 'styled-components'
import {MEDIA_QUERIES} from 'constants/mediaQueriesList'


export const ContactSources = styled.div`
  display: flex;
  gap: 44px;
  flex-direction: ${({direction}) => direction || 'row'};
  
  ${MEDIA_QUERIES.md} {
    flex-direction: row;
  }
`

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SocialNetwork = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  svg {
    width: 16px;
  }
`
