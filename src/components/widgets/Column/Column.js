import React from 'react';
import {Draggable} from 'react-beautiful-dnd'
import {borderRadius, colors, grid} from '../../../constants/constants';

import styled from 'styled-components';
import QuoteList from '../primatives/QuoteList';
import Title from '../primatives/Title';

const Container = styled.div`
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: ${({isDragging}) => (isDragging ? colors.blue.lighter : colors.blue.light)};
  transition: background-color 0.1s ease;

  &:hover {
    background-color: ${colors.blue.lighter};
  }
`;

class Column extends React.Component {
  render() {
    const title = this.props.title;
    const quotes = this.props.quotes;
    const index = this.props.index;
    return (
      <Draggable draggableId={title} index={index}>
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
                {title}
              </Title>
            </Header>
            <QuoteList
              listId={title}
              listType="QUOTE"
              quotes={quotes}
            />
          </Container>
        )}

      </Draggable>
    );
  }
}

export default Column;