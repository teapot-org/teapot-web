import React from 'react';
import styled from 'styled-components';

const Container = styled.a.attrs({className: 'card-container'})`
  box-shadow: ${({ isDragging }) => (isDragging ? '0 0 3px rgba(0,0,0,0.2)' : 'none')};
  background-color: ${({ isDragging }) => (isDragging ? 'white' : '#fafafa')};
`;
const Content = styled.div.attrs({className: 'card-content'})``;
const Title = styled.h4.attrs({className: 'card-name'})``;
const Description = styled.p.attrs({className: 'card-description'})``;

export default class Ticket extends React.PureComponent {
  render() {
    const {ticket, isDragging, provided} = this.props;

    return (
      <Container
        isDragging={isDragging}
        innerRef={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Content>
          <Title>{ticket.title}</Title>
          <Description>{ticket.description}</Description>
        </Content>
      </Container>
    );
  }
}

