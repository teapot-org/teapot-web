import React from 'react'
import {connect} from 'react-redux'
import {Route} from "react-router";
import {Container, Card, Header, Segment, Grid} from 'semantic-ui-react';

import Loading from '../../widgets/Loading'
import Error404Page from "../Error404Page";
import {getKanbanById} from '../../../actions/kanbans'
import './index.css'

class KanbanPage extends React.Component {
  componentWillMount() {
    const {id} = this.props.match.params;
    const {getKanbanById} = this.props;
    getKanbanById(id);
  }

  render() {
    const {isLoading, kanban} = this.props.kanbans;

    if (isLoading) {
      return <Loading/>;
    }

    if (kanban != null) {
      return (
        <Grid stretched padded>
          <Grid.Row>
            <Grid.Column>
              <Header>Доска {kanban.title}</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched className='wrapper'>
            <Grid.Column>
              <Segment/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }

    return <Route component={Error404Page}/>
  }
}

export default connect(
  state => ({
    kanbans: state.kanbans
  }),
  dispatch => ({
    getKanbanById: (id) => {
      dispatch(getKanbanById(id));
    }
  })
)(KanbanPage);