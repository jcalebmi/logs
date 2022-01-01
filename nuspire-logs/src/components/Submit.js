import React from 'react';

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 'copy',
      log: '',
      logInfo: {
      'ip': '',
      'date': '',
      'request': '',
      'response': '',
      'bytes_sent': '',
      'referer': '',
      'user_agent': ''
      }
    }

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleForm = (e) => {
    this.setState(prevState => ({
      logInfo: {
        ...prevState.logInfo,
        [e.target.name]: e.target.value
      }
    }))
    console.log(this.state.logInfo)
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="submitContainer">
        <p>Add an Apache Log line into the database</p>
        <div className="formContainer">
          <label>Choose an option for submission: </label>
          <select
            name="option"
            value={this.state.option}
            onChange={this.handleChange}>
            <option value="copy">Copy and Paste</option>
            <option value="form">Fill out Form</option>
          </select>
          {this.state.option === "copy" ?
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="log"
                value={this.state.log}
                placeholder="Paste Apache Log Line Here"
                onChange={this.handleChange}/>
              <button type="submit">Submit</button>
            </form>
            :
            <form onSubmit={this.handleSubmit}>
              {Object.keys(this.state.logInfo).map(input => {
                return (
                  <div key={JSON.stringify(input)}>
                    <label htmlFor={input}>{input}: </label><br />
                    <input
                      type="text"
                      name={input}
                      value={this.state.logInfo[input]}
                      placeholder={input}
                      onChange={this.handleForm}/>
                  </div>
                )
              })}
              <button type="submit">Submit</button>
            </form>}
        </div>

      </div>
    )
  }
}

export default Submit;