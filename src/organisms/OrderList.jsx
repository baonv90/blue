import React from 'react';
import styled from 'styled-components';

import OrderItem from '../components/OrderItem';
import OrderHeader from '../components/OrderHeader';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  overflow: hidden;
  box-shadow: 0px 0px 3px 0px var(--light-color);
`;

const ListContainer = styled.div`
  overflow-y: auto;
  max-height: 500px;
`;

const OrderList = React.memo(({ data }) => {
  return (
    <Container>
      <OrderHeader />
      <ListContainer>
        {data.map((item, index) => <OrderItem
          key={index}
          {...item}   
        />)}
      </ListContainer>
    </Container>
  )
});

export default OrderList