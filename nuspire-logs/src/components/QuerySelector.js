import React from 'react';

class QuerySelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.options = [
      'all',
      'log_id',
      'ip',
      'date',
      'request',
      'response',
      'bytes_sent',
      'referer',
      'user_agent'
    ]
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
    this.props.query(e.target.value);
  }

  render() {
    return(
      <div className="query">
        <label>Select a query option: </label>
        <select
          value={this.state.value}
          onChange={this.handleChange}>
          {this.options.map(option => <option key={JSON.stringify(option)} value={option}>{option}</option>)}
        </select>
      </div>
    )
  }
}
export default QuerySelector;