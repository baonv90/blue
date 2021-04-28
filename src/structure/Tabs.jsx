import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import TabTitle from './TabTitle';


const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const Header = styled.div`
  display: flex;
`;

// tabs component
const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const renderTitles = useCallback((items) => items.map(({ props }, index) => {
    const { title } = props;
    return <TabTitle
      key={index}
      title={title}
      index={index}
      isSelected={selectedTab === index}
      setSelectedTab={setSelectedTab}
    />
  }), [setSelectedTab, selectedTab]);

  return (
    <TabsContainer>
      <Header>
        {renderTitles(children)}
      </Header>
      {children[selectedTab]}
    </TabsContainer>
  )
}

export default Tabs