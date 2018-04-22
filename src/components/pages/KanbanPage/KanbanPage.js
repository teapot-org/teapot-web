import React from 'react'
import {connect} from 'react-redux'
import {Route} from "react-router";

import Loading from '../../widgets/Loading'
import TicketList from '../../widgets/TicketList'
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
      return (
        <main>
          <Loading/>
        </main>
      );
    }

    if (kanban != null) {
      return (
        <main>
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
          <div className="wrapper">
            <div className="lists">
              {kanban.ticketLists.map(list => (
                <TicketList ticketList={list}/>
              ))}
              <div className="list" id="add-new">
                <div className="add">
                  <p>+</p>
                  <p>Список</p>
                </div>
              </div>
            </div>
          </div>
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