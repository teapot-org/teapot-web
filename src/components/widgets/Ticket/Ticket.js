import React from 'react'

class Ticket extends React.Component {
  render() {
    const {ticket} = this.props;

    return (
      <div className="card-content">
        <h3 className="card-name">{ticket.title}</h3>
        <p className="card-description">
          {ticket.description}
        </p>
      </div>
    );
  }
}

export default Ticket;