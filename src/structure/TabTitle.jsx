import React, { useCallback } from 'react'
import styled from 'styled-components';


const Container = styled.div`
  border-radius: .5rem;
  font-size: .825rem;
  padding: 0.25rem .5rem;
  margin-right: .5rem;
  background: ${({ isSelected }) => isSelected ?  'var(--primary-color)' : 'var(--grey-color)'};
  color: ${({ isSelected }) => isSelected ? 'white' : 'var(--text-color)'};
  cursor: pointer;
`;


const TabTitle = ({ title, isSelected, setSelectedTab, index }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <Container
      onClick={onClick}
      isSelected={isSelected}
    >
      {title}
    </Container>
  )
}

export default TabTitle