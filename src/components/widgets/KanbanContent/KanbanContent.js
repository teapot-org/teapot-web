import React from 'react'
import styled from 'styled-components';
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import {connect} from 'react-redux'

import TicketList from '../TicketList';
import reorder, {reorderKanban} from '../../../reorder';
import {getKanbanTicketLists} from '../../../actions/ticketLists'

const Wrapper = styled.div.attrs({className: 'wrapper'})`
  height: ${({ height }) => height};
  overflow-x: hidden;
  overflow-y: auto;
`;

const Container = styled.div.attrs({className: 'lists'})``;

class KanbanContent extends React.Component {
  onDragStart = (initial) => {
    // publishOnDragStart(initial);
  };
  onDragEnd = (result) => {
    // publishOnDragEnd(result);

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

    // reordering column
    if (result.type === 'LIST') {
      const ordered = reorder(
        this.state.ordered,
        source.index,
        destination.index
      );

      this.setState({
        ordered,
      });

      return;
    }

    const data = reorderKanban({
      kanbans: this.props.kanbans,
      ticketLists: this.props.ticketLists,
      tickets: this.props.tickets,
      source,
      destination
    })

    // const data = reorderQuoteMap({
    //   quoteMap: this.state.columns,
    //   source,
    //   destination,
    // });

    // this.setState({
    //   columns: data.quoteMap,
    // });
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
    const columns = this.state.columns;
    const ordered = this.state.ordered;
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
            {kanban.ticketLists.map((key, index) => (
              <TicketList
                key={key}
                index={index}
                ticketList={ticketLists[key]}
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
    }
  })
)(KanbanContent);