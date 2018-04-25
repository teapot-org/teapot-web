import React from 'react'
import {connect} from 'react-redux'
import {Route} from "react-router";

import Loading from '../../widgets/Loading'
import Error404Page from "../Error404Page";
import {getKanbanById} from '../../../actions/kanbans'
import KanbanContent from '../../widgets/KanbanContent'
import {generateQuoteMap} from '../../../data'

class KanbanPage extends React.Component {
  componentWillMount() {
    const {id} = this.props.match.params;
    const {getKanbanById} = this.props;
    getKanbanById(id);
  }

  render() {
    const {isLoading, kanban} = this.props.kanbans;

    if (isLoading) {
      return (
        <main>
          <Loading/>
        </main>
      );
    }

    if (kanban != null) {
      return (
        <main>
          {/*todo: вынести в KanbanHeader */}
          <div className="main-head">
            <div className="kanban-name">
              <div className="name-lock">
                <span>{kanban.title}</span>
                <img src="images/lock.jpg" alt="lock" className="lock" title="Закрытый канбан"/>
              </div>
              <span className="host">Создатель</span>
            </div>
            <div className="team"></div>
          </div>
          <KanbanContent initial={generateQuoteMap(10)}/>
        </main>
      );
    }

    return <Route component={Error404Page}/>;
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