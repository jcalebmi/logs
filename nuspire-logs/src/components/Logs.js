import Log from './Log.js';
import React from 'react';
import QuerySelector from './QuerySelector.js';
import '../App.css';

class Logs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="logs">
        <p>Use the selector to see how many log files share common data within a particular column</p>
        <h3>Apache Log Files</h3>
        <QuerySelector query={this.props.query}/>
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                {this.props.headers.map(h => <th key={JSON.stringify(h)}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {this.props.logs.map(log => <Log
                key={JSON.stringify(log)}
                log={log} />)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Logs;