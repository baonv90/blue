import React, { useCallback, useState, useMemo } from 'react';
import styled from 'styled-components';

import IconStatus from './IconStatus';
import Timeline from './Timeline';


const Wrapper = styled.div`
  height: ${({ expand }) => expand ? '8.5rem' : '2.5rem'};
  transition: all 200ms ease;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  font-size: .825rem;
  line-height: 1.25rem;
  align-items: center;
  height: 2.5rem;
  border-bottom: 1px solid var(--light-color);
  cursor: pointer;
`;

const DetailContainer = styled.div`
  height: 6rem;
  background: var(--background-color);
  align-items: center;
  display: ${({ expand }) => expand ? 'flex' : 'none'};
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
  min-width: 180px;
  width: 30%;
  padding-right: .5rem;
`;

const Organization = styled.span`
  width: 15%;
  min-width: 120px;
  font-size: .8rem;
`;

const OrderItem = React.memo((props) => {
  const [expand, setExpand] = useState(false);
  const { reference, organization, data } = props;
  
  // find the last updated status for the order
  const { updates, lastStatus } = useMemo(() => {
    const filtered = data.filter(dat => dat.subtype === 'status_update');
    const updateData = data.filter(dat => dat.subtype === 'data_update');
    const last = [...filtered].pop();
    return { updates: updateData, lastStatus: last };
  }, [data]);

  const { short, operator, description } = lastStatus || {};

  const onItemClick = useCallback(() => {
    setExpand(expand => !expand);
  }, [setExpand]);

  return (<Wrapper expand={expand}>
    <Container onClick={onItemClick}>
      <RefContainer>{reference}</RefContainer>
      <TextContainer>{operator}</TextContainer>
      <Organization>{organization}</Organization>
      <Description>{description}</Description>
      <IconStatus status={short} />
    </Container>
    { expand && <DetailContainer expand={expand}>
      <Timeline current={lastStatus} data={updates} />
    </DetailContainer>}
  </Wrapper>);
});

export default OrderItem;
