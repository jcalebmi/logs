import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.nav = [
      "View Logs",
      "Submit Logs"
    ]
  }

  handleClick = (e) => {
    this.props.changeView(e.target.value);
  }

  render() {
    return (
      <div className="nav">
        <h1>Logs Viewer</h1>
        <div className="navBar">
          {this.nav.map(button => <button
            key={button}
            onClick={this.handleClick}
            name={button}
            value={button}>{button} </button>)}
        </div>
      </div>
    )
  }
}

export default Nav;