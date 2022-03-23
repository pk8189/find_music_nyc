import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import styled from 'styled-components'

const SC = {};

function LocationPin({ text }) {
  return(
    <SC.StyledLocationPin>
      <SC.PinIcon>
        <Icon icon={locationIcon} />
      </SC.PinIcon>
      <SC.PinText >{text}</SC.PinText >
    </SC.StyledLocationPin>
  )
}

SC.StyledLocationPin = styled.div`
  display: flex;
  align-items: center;
`;

SC.PinIcon = styled.div`
  font-size: 4rem;
  color: black;
`;

SC.PinText = styled.p`
  font-size: 1.3em;
  color: black;
`;


export default LocationPin;
