import React from 'react'

import axios from '../../../http-common'
import Loading from "../Loading";
import Ticket from "../Ticket";

class TicketList extends React.Component {
  state = {
    isLoading: false,
    tickets: []
  };

  componentWillMount() {
    this.loadTickets();
  }

  async loadTickets() {
    this.setState({isLoading: true});
    const ticketsResponse = await axios.get(this.props.ticketList._links.tickets.href);
    this.setState({
      isLoading: false,
      tickets: ticketsResponse.data._embedded.tickets
    })
  }

  render() {
    const {isLoading, tickets} = this.state;
    const {ticketList} = this.props;

    if (isLoading) {
      return <Loading/>;
    }

    return (
      <div className="list">
        <div className="list-header">
          <h3>{ticketList.title}</h3>
        </div>
        <div className="card-wrapper">
          {tickets.map(ticket => (
            <Ticket ticket={ticket}/>
          ))}
        </div>
      </div>
    );
  }
}

export default TicketList;