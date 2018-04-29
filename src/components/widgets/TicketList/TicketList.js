import React from 'react';
import {Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components';

import TicketListContent from '../primatives/TicketListContent';

const Container = styled.div.attrs({
  className: 'list'
})``;

const Header = styled.div.attrs({
  className: 'list-header'
})``;

const Title = styled.h3``;

class TicketList extends React.Component {
  render() {
    const ticketList = this.props.ticketList;
    const index = this.props.index;

    return (
      <Draggable draggableId={'ticket-list-' + index} index={index}>
        {(provided, snapshot) => (
          <Container
            innerRef={provided.innerRef}
            {...provided.draggableProps}
          >
            <Header
              isDragging={snapshot.isDragging}
            >
              <Title
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
              >
                {ticketList.title}
              </Title>
            </Header>
            <TicketListContent
              listId={'ticket-list-' + index}
              listType="QUOTE"
              ticketList={ticketList}
            />
          </Container>
        )}

      </Draggable>
    );
  }
}

export default TicketList;