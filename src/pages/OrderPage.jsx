import React from 'react';
import styled from 'styled-components';

import Tabs from '../structure/Tabs';
import OrderList from '../organisms/OrderList';
import Tab from '../structure/Tab';

import { getFilteredData } from '../utils/utils';

const Container = styled.div`
  display: flex;
  padding: 1.5rem 3rem;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: var(--title-color);
`;

// tabs definition
const TABS = [
  { text: 'All' },
  { text: 'Open', filter: ['CREATED', 'TRANSMITTED'] },
  { text: 'Preparation', filter: ['IN_PREPARATION', 'PREPARED'] },
  { text: 'Shipped', filter: ['SHIPPED'] },
  { text: 'Delivered', filter: ['DELIVERED'] }
];

// component to display all the orders based on selected tab
const OrderPage = ({ data }) => {
  return (<Container>
    <Title>Orders</Title>
    <Tabs>
      {TABS.map(({ text, filter }, index) => <Tab key={`tab${index}`} title={text} >
        <OrderList data={getFilteredData(data, filter)}/>
      </Tab>)}
    </Tabs>
  </Container>);
};

export default OrderPage;