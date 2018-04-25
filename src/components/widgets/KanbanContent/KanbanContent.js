import React from 'react'
import styled from 'styled-components';
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import Column from '../Column';
import reorder, {reorderQuoteMap} from '../../../reorder';

const ParentContainer = styled.div`
  height: ${({height}) => height};
  overflow-x: hidden;
  overflow-y: auto;
`;

const Container = styled.div`
  display: inline-flex;
`;

class KanbanContent extends React.Component {
  state = {
    columns: this.props.initial,
    ordered: Object.keys(this.props.initial),
  };

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

  render() {
    const columns = this.state.columns;
    const ordered = this.state.ordered;
    const {containerHeight} = this.props;

    const board = (
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={Boolean(containerHeight)}
      >
        {(provided) => (
          <Container innerRef={provided.innerRef} {...provided.droppableProps}>
            {ordered.map((key, index) => (
              <Column
                key={key}
                index={index}
                title={key}
                quotes={columns[key]}
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
          {this.props.containerHeight ? (
            <ParentContainer height={containerHeight}>{board}</ParentContainer>
          ) : (
            board
          )}
        </DragDropContext>
      </div>
    );
  }
}

export default KanbanContent;