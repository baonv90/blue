import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: ${({ status }) => !!status ? 'block' : 'none'};
  position: absolute;
  width: 100%;
`;

const StatusDisplay = styled.div`
  display: flex;
  font-size: .825rem;
  line-height: 1rem;
  transition: all .5s ease;
  background: ${({ status }) => status === 'error' ? 'var(--alert-color)' : 'var(--success-color)' };
  color: white;
  justify-content: center;
`;

const displayStatus = (status) => {
  switch (status) {
    case 'error' : return 'Oops, there seems to have network issues, trying to reconnect ...';
    case 'open' : return 'Reconnected!';
    default: return '';
  }
};

// handle network issues UI
const NetworkStatus = ({ status }) => {
  return (<Container status={status} >
    <StatusDisplay status={status}>{displayStatus(status)}</StatusDisplay>
  </Container>);
};

export default NetworkStatus;