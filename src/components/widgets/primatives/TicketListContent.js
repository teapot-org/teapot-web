import React from 'react';
import styled from 'styled-components';
import {Draggable, Droppable} from 'react-beautiful-dnd';
import {connect} from 'react-redux'

import Ticket from './Ticket';
import {getTicketListTickets} from '../../../actions/tickets'

const Wrapper = styled.div.attrs({className: 'card-wrapper'})``;

class TicketListContent extends React.Component {
  componentWillMount() {
    const {ticketList, getTicketListTickets} = this.props;
    getTicketListTickets(ticketList.id);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.ticketList !== this.props.ticketList;
  }

  render() {
    const {
      ignoreContainerClipping,
      isDropDisabled,
      listId,
      listType,
      ticketList,
      tickets,
    } = this.props;

    return (
      <Droppable
        droppableId={listId}
        type={listType}
        ignoreContainerClipping={ignoreContainerClipping}
        isDropDisabled={isDropDisabled}
      >
        {(dropProvided, dropSnapshot) => (
          <Wrapper
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDropDisabled={isDropDisabled}
            innerRef={dropProvided.innerRef}
            {...dropProvided.droppableProps}
          >
            {ticketList.tickets.map((key, index) => (
              <Draggable key={index} draggableId={'ticket-' + index} index={index}>
                {(dragProvided, dragSnapshot) => (
                  <Ticket
                    key={index}
                    ticket={tickets[key]}
                    isDragging={dragSnapshot.isDragging}
                    provided={dragProvided}
                  />
                )}
              </Draggable>
            ))}
            {dropProvided.placeholder}
          </Wrapper>
        )}
      </Droppable>
    );
  }
}

export default connect(
  state => ({
    tickets: state.tickets.tickets
  }),
  dispatch => ({
    getTicketListTickets: (id) => {
      dispatch(getTicketListTickets(id));
    }
  })
)(TicketListContent);