import React from 'react'
import styled from 'styled-components';
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import {connect} from 'react-redux'

import TicketList from '../TicketList';
import {getKanbanTicketLists, shiftTicketList} from '../../../actions/ticketLists'
import {moveTicketToAnotherList, shiftTicket} from '../../../actions/tickets'

const Wrapper = styled.div.attrs({className: 'wrapper'})`
  height: ${({height}) => height};
  overflow-x: hidden;
  overflow-y: auto;
`;

const Container = styled.div.attrs({className: 'lists'})``;

class KanbanContent extends React.Component {
  onDragEnd = (result) => {
    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    // did not move anywhere - can bail early
    if (source.droppableId === destination.droppableId &&
      source.index === destination.index) {
      return;
    }

    // reordering list
    if (result.type === 'LIST') {
      const kanbanId = this.props.kanban.id;
      const listId = Number(result.draggableId.match(/list-(\d+)/)[1]);
      const position = destination.index;
      this.props.shiftTicketList(kanbanId, listId, position);
    }

    if (result.type === 'TICKET') {
      const sourceListId = Number(source.droppableId.match(/list-(\d+)/)[1]);
      const destinationListId = Number(destination.droppableId.match(/list-(\d+)/)[1]);
      const ticketId = Number(result.draggableId.match(/ticket-(\d+)/)[1]);
      const position = destination.index;
      // shifting in one list
      if (sourceListId === destinationListId) {
        this.props.shiftTicket(destinationListId, ticketId, position);
      }
      // moving to another list
      else {
        this.props.moveTicketToAnotherList(sourceListId, destinationListId, ticketId, position);
      }
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      columns: this.props.kanban.ticketLists,
      ordered: Object.keys(this.props.kanban.ticketLists)
    };
  }

  componentWillMount() {
    const {kanban, getKanbanTicketLists} = this.props;
    getKanbanTicketLists(kanban.id);
  }

  render() {
    const {kanban, ticketLists} = this.props;
    const {containerHeight} = this.props;

    const board = (
      <Droppable
        droppableId="board"
        type="LIST"
        direction="horizontal"
        ignoreContainerClipping={Boolean(containerHeight)}
      >
        {(provided) => (
          <Container innerRef={provided.innerRef} {...provided.droppableProps}>
            {kanban.ticketLists.map((ticketListId, index) => (
              <TicketList
                key={ticketListId}
                index={index}
                ticketList={ticketLists[ticketListId]}
              />
            ))}
          </Container>
        )}
      </Droppable>
    );

    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <Wrapper height={containerHeight}>
          {board}
        </Wrapper>
      </DragDropContext>
    );
  }
}

export default connect(
  state => ({
    kanbans: state.kanbans.kanbans,
    ticketLists: state.ticketLists.ticketLists,
    tickets: state.tickets.tickets
  }),
  dispatch => ({
    getKanbanTicketLists: (id) => {
      dispatch(getKanbanTicketLists(id));
    },
    shiftTicketList: (kanbanId, listId, position) => {
      dispatch(shiftTicketList(kanbanId, listId, position));
    },
    shiftTicket: (listId, ticketId, position) => {
      dispatch(shiftTicket(listId, ticketId, position));
    },
    moveTicketToAnotherList: (sourceListId, destinationListId, ticketId, position) => {
      dispatch(moveTicketToAnotherList(sourceListId, destinationListId, ticketId, position));
    }
  })
)(KanbanContent);