import React from 'react'
import {connect} from 'react-redux'

import Loading from '../../widgets/Loading'
import {getKanbanById} from '../../../actions/kanbans'
import KanbanContent from '../../widgets/KanbanContent'
import {generateQuoteMap} from '../../../data'

class KanbanPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id
    }
  }

  componentWillMount() {
    const {getKanbanById} = this.props;
    getKanbanById(this.state.id);
  }

  render() {
    const {isError, isLoading, kanbans} = this.props.kanbans;
    const kanban = kanbans[this.state.id];

    if (kanban != null) {
      return (
        <main>
          {/*todo: вынести в KanbanHeader */}
          <div className="main-head">
            <div className="kanban-name">
              <div className="name-lock">
                <span className="kanban">{kanban.title}</span>
                {kanban.access === 'PUBLIC' ? (
                  <i className="fas fa-lock-open" title="Открытый канбан"/>
                ) : (
                  <i className="fas fa-lock" title="Закрытый канбан"/>
                )}
              </div>
              <span className="host">Создатель</span>
            </div>
            <div className="team">
              <i className="fas fa-users" title="Пользователи канбана"/>
            </div>
          </div>
          <KanbanContent initial={generateQuoteMap(10)} kanban={kanban}/>

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

    // if (isNotFound) {
    //   return <Route component={Error404Page}/>;
    // }

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