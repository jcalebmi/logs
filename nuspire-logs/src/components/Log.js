import React from 'react';
import '../App.css';

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.values = Object.values(this.props.log);
  }

  render() {
    return(
      <tr className="data">
        {this.values.map((v, i) => <td key={JSON.stringify(v + i)}>{v}</td>)}
      </tr>
    )
  }
}

export default Log;