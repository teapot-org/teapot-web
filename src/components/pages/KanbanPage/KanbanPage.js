import React from 'react'
import {connect} from 'react-redux'

import Loading from '../../widgets/Loading'
import {getKanbanById} from '../../../actions/kanbans'
import KanbanContent from '../../widgets/KanbanContent'

class KanbanPage extends React.Component {
  componentWillMount() {
    const {getKanbanById, match: {params: {id}}} = this.props;
    getKanbanById(id);
  }

  render() {
    const {kanbans: {isError, kanbans}, match: {params: {id}}} = this.props;
    const kanban = kanbans[id];

    if (kanban != null) {
      return (
        <main>
          <div className="main-head">
            <div className="kanban-name">
              <div className="name-lock">
                <span className="kanban">{kanban.title}</span>
                {kanban.access === 'PUBLIC' ? (
                  <i className="lock fas fa-lock-open" title="Открытый канбан"/>
                ) : (
                  <i className="lock fas fa-lock" title="Закрытый канбан"/>
                )}
              </div>
              <span className="host">Создатель</span>
            </div>
            <div className="team">
              <i className="fas fa-users" title="Пользователи канбана"/>
            </div>
          </div>
          <KanbanContent kanban={kanban}/>

          {isError ? <p>Ошибка при загрузке доски!</p> : null}
        </main>
      );
    }

    if (isError) {
      return (
        <main>
          <p>Ошибка при загрузке доски!</p>
        </main>
      );
    }

    return (
      <main>
        <Loading/>
      </main>
    );
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