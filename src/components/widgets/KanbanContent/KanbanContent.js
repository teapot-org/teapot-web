import React from 'react'
import styled from 'styled-components';
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import {connect} from 'react-redux'

import TicketList from '../TicketList';
import reorder, {reorderQuoteMap} from '../../../reorder';
import {getKanbanTicketLists} from '../../../actions/ticketLists'

const ParentContainer = styled.div`
  height: ${({height}) => height};
  overflow-x: hidden;
  overflow-y: auto;
`;
//
// const Container = styled.div`
//   display: inline-flex;
// `;

const Container = styled.div.attrs({
  className: 'lists'
})``;

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
    if (result.type === 'COLUMN') {
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

    const data = reorderQuoteMap({
      quoteMap: this.state.columns,
      source,
      destination,
    });

    this.setState({
      columns: data.quoteMap,
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      columns: this.props.initial,
      ordered: Object.keys(this.props.initial)
    };
  }

  componentWillMount() {
    const {kanban, getKanbanTicketLists} = this.props;
    getKanbanTicketLists(kanban.id);
  }

  render() {
    const columns = this.state.columns;
    const ordered = this.state.ordered;
    const {kanban, containerHeight, ticketLists} = this.props;

    const board = (
      <Droppable
        droppableId="board"
        type="COLUMN"
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
      <div className="wrapper">
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        >
          {board}
        </DragDropContext>
      </div>
    );
  }
}

export default connect(
  state => ({
    ticketLists: state.ticketLists.ticketLists
  }),
  dispatch => ({
    getKanbanTicketLists: (id) => {
      dispatch(getKanbanTicketLists(id));
    }
  })
)(KanbanContent);