import React from 'react';
import {Draggable} from 'react-beautiful-dnd'
import {connect} from 'react-redux'
import styled from 'styled-components';

import TicketListContent from '../primatives/TicketListContent';

const Container = styled.div.attrs({className: 'list'})``;
const Header = styled.div.attrs({className: 'list-header'})``;
const Title = styled.h4``;

class TicketList extends React.Component {
  render() {
    const {ticketList, index, isAuthenticated} = this.props;

    return (
      <Draggable
        draggableId={'list-' + ticketList.id}
        index={index}
        isDragDisabled={!isAuthenticated}
      >
        {(provided, snapshot) => (
          <Container
            innerRef={provided.innerRef}
            {...provided.draggableProps}
          >
            <Header
              isDragging={snapshot.isDragging}
              style={{backgroundColor: snapshot.isDragging ? 'white' : '#f5f5f5'}}
            >
              <Title
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
              >
                {ticketList.title}
              </Title>
            </Header>
            <TicketListContent ticketList={ticketList}/>
          </Container>
        )}
      </Draggable>
    );
  }
}

export default connect(
  state => ({
    isAuthenticated: state.oauth.isAuthenticated
  }),
  dispatch => ({})
)(TicketList);