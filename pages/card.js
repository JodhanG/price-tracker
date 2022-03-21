import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 200px;
  height: 150px;
  border: 1px solid ${props => props.color};
  border-radius: 15px;
  justify-content: start;
  font-size: 1em;
  color: white;
  background: #40464437;
`;

const Content = styled.div`
  align-self: start;
  padding-top: 10px;
  padding-left: 8px;
`;

export function Card({ children, color, title }) {
  return (
    <Container color={color}>
      <Content>
        <h5>{title}</h5>
      </Content>
    </Container>
  );
}