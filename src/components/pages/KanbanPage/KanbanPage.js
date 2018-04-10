import React from 'react'
import {connect} from 'react-redux'
import {Route} from "react-router";

import Loading from '../../widgets/Loading'
import Error404Page from "../Error404Page";
import {getKanbanById} from '../../../actions/kanbans'

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
        <div>
          <p>Доска</p>
          <p>{kanban.title}</p>
        </div>
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