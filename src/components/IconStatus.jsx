import React, { useMemo } from 'react'
import styled from 'styled-components';

const STATUSES = [
  { id: 'CREATED', text: 'Created', color: '#8ecdff'},
  { id: 'TRANSMITTED', text: 'Transmited', color: '#2196f3'}, 
  { id: 'IN_PREPARATION', text: 'Preparing', color: '#3f51b5'}, 
  { id: 'PREPARED', text: 'Prepared', color: '#ffeb3b'}, 
  { id: 'SHIPPED', text: 'Shipped', color: '#ff9800'}, 
  { id: 'DELIVERY_EXCEPTION', text: 'Error', color: '#ff5722'}, 
  { id: 'DELIVERED', text: 'Delivered', color: 'var(--success-color)'}, 
];

const Container = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: .625rem;
  height: .625rem;
  background: ${({ color }) => color};
  border-radius: 50%;
  margin-right: .5rem;
`;

const StatusText = styled.span`
  font-size: .825rem;
  font-weight: 600;
  color: var(--title-color);
`;


const IconStatus = ({ status }) => {
  const currentStatus = useMemo(() => {
    return STATUSES.find(stt => stt.id === status)
  }, [status]) || {};

  return (
    <Container>
      <Circle color={currentStatus.color || '--var(light-color)'} />
      <StatusText>{currentStatus.text}</StatusText>
    </Container>
  )
}

export default IconStatus