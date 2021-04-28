import React from 'react'
import styled from 'styled-components';

const STATUSES = [
  { id: 'CREATED', text: 'Created', color: '#8ecdff'},
  { id: 'TRANSMITTED', text: 'Transmited', color: '#2196f3'}, 
  { id: 'IN_PREPARATION', text: 'Preparing', color: '#3f51b5'}, 
  { id: 'PREPARED', text: 'Prepared', color: '#ffeb3b'}, 
  { id: 'SHIPPED', text: 'Shipped', color: '#ff9800'}, 
  { id: 'DELIVERED', text: 'Delivered', color: 'var(--success-color)'}
];

const DataItem = styled.div`
  display: flex;
  font-size: .8rem;
  padding-left: .5rem;
`;

const StatusWrapper = styled.div`
  display: flex;
  width: 70%;
  padding-left: 1rem;
`;

const DataWrapper = styled.div`
  flex: 1;
  height: 100%;
  overflow: auto;
`;

const Line = styled.div`
  transform: translateY(6px);
  height: 2px;
  width: 80px;
  background: var(--light-color);
  opacity: .5;
  z-index: -1;
`

const Container = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div`
  width: ${({ active }) => active ? '15px' : '10px' };
  height: ${({ active }) => active ? '15px' : '10px' };
  background: ${({ color }) => color};
  border-radius: 50%;
  margin-right: .5rem;
  margin-top: ${({ active }) => active && '-2.5px' };
`;

const StatusText = styled.span`
  font-size: .8rem;
  font-weight: 400;
  color: ${({ active }) => active ? 'var(--title-color)' : 'var(--light-color)'};
`;


const Timeline = React.memo(({ current, data = [] }) => {
  const { short } = current || {};

  return (<>
    <StatusWrapper>
      {STATUSES.map(( { id, color, text }) => {
        const currentStatus = id === short;
        
        return (<Container>
          <Line />
          <Circle active={currentStatus} color={color || '--var(light-color)'} />
          <StatusText active={currentStatus}>{text}</StatusText>
        </Container>)})
      }
    </StatusWrapper>
    <DataWrapper>
      {data.map(({ short, description }) => <DataItem>
        {short} : {description}
      </DataItem>)}
    </DataWrapper>
  </>)
});

export default Timeline