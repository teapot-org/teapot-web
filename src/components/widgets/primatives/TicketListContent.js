import React from 'react';
import styled from 'styled-components';
import {Draggable, Droppable} from 'react-beautiful-dnd';
import {connect} from 'react-redux'

import Ticket from './Ticket';
import {getTicketListTickets} from '../../../actions/tickets'

const Wrapper = styled.div.attrs({className: 'card-wrapper'})``;
const DropZone = styled.div.attrs({className: 'drop-zone'})``;
const ScrollContainer = styled.div.attrs({className: 'scroll-container'})``;

const InnerTicketList = connect(
  state => ({
    tickets: state.tickets.tickets
  }),
  dispatch => ({
    getTicketListTickets: (id) => {
      dispatch(getTicketListTickets(id));
    }
  })
)(class extends React.Component {
  componentWillMount() {
    const {ticketList, getTicketListTickets} = this.props;
    getTicketListTickets(ticketList.id);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.ticketList !== this.props.ticketList;
  }

  render() {
    const {ticketList, tickets} = this.props;

    return ticketList.tickets.map((ticketId, index) => (
      <Draggable key={ticketId} draggableId={'ticket-' + ticketId} index={index}>
        {(dragProvided, dragSnapshot) => (
          <Ticket
            key={ticketId}
            ticket={tickets[ticketId]}
            isDragging={dragSnapshot.isDragging}
            provided={dragProvided}
          />
        )}
      </Draggable>
    ));
  }
});

class InnerList extends React.Component {
  render() {
    const {ticketList, dropProvided} = this.props;

    return (
      <DropZone innerRef={dropProvided.innerRef}>
        <InnerTicketList
          ticketList={ticketList}
        />
        {dropProvided.placeholder}
      </DropZone>
    );
  }
}

class TicketListContent extends React.Component {
  render() {
    const {
      ignoreContainerClipping,
      isDropDisabled,
      style,
      ticketList
    } = this.props;

    return (
      <Droppable
        droppableId={'list-' + ticketList.id}
        type="TICKET"
        direction="vertical"
        ignoreContainerClipping={ignoreContainerClipping}
        isDropDisabled={isDropDisabled}
      >
        {(dropProvided, dropSnapshot) => (
          <Wrapper
            style={style}
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDropDisabled={isDropDisabled}
            {...dropProvided.droppableProps}
          >
            <ScrollContainer>
              <InnerList
                ticketList={ticketList}
                dropProvided={dropProvided}
              />
            </ScrollContainer>
          </Wrapper>
        )}
      </Droppable>
    );
  }
}

export default TicketListContent;