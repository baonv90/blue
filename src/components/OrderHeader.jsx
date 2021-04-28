import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  font-size: .825rem;
  line-height: 1.5rem;
  align-items: center;
  height: 2.5rem;
  color: var(--title-color);
  border-bottom: 1px solid var(--grey-color);
  background: var(--light-color);
`;

const RefContainer = styled.div`
  width: 20%;
  min-width: 140px;
  padding-left: 20px;
`;

const TextContainer = styled.div`
  width: 15%;
  min-width: 140px;
`;

const Description = styled.div`
  width: 30%;
  min-width: 180px;
`;

const StatusContainer = styled.div`
  min-width: 160px;
`;

const Organization = styled.span`
  width: 15%;
  min-width: 120px;
`;


const OrderHeader = () => {
  return (<Container>
    <RefContainer>{'Reference'}</RefContainer>
    <TextContainer>{'Operator'}</TextContainer>
    <Organization>{'OGZ'}</Organization>
    <Description>{'Description'}</Description>
    <StatusContainer>{'Status'}</StatusContainer>
  </Container>);
};

export default OrderHeader;