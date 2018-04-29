import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({className: 'card-content'})``;
const Title = styled.h3.attrs({className: 'card-name'})``;
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
        <Title>{ticket.title}</Title>
        <Description>{ticket.description}</Description>
      </Container>
    );
  }
}

