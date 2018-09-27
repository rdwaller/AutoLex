import React, { Component } from 'react';
import styled from 'styled-components';
import GenerateLexicon from './GenerateLexicon';

const TextArea = styled.textarea`
  display: block;
  margin: 2.5vmin auto 2.5vmin;
  border-radius: 3%;
  padding: 5vmin;
  width: 80vw;
  height: 30vh;
  font-size: 5vmin;
`;

const Input = styled.input`
  display: block;
  margin: 0.5em auto;
  padding: 2vmin 3vmin;
  font-size: 5vmin;
  background-color: #F36C8C;
  font-weight: bold;
  text-shadow: 1px 1px #F36C8C;
  color: #ffffff;
  border-radius: 100px;
  -moz-border-radius: 100px;
  -webkit-border-radius: 100px;
  border: 1px solid #F36C8C;
  cursor: pointer;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;
  -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;
  -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset;

  &:active {
    background-color: green;
    color: red;
  }
`;


class EnterText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedValue: '',
      submittedValue: '',
      processSubmission: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  endProcessSubmission = () => {
    this.setState({ processSubmission: false});
  }

  handleChange(event) {
    this.setState({
      typedValue: event.target.value,
      processSubmission: false
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submittedValue: this.state.typedValue});
    this.setState({processSubmission: true});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextArea placeholder="Enter a text here." value={this.state.typedValue} onChange={this.handleChange} />          
          <Input type="submit" value="Generate Lexicon" />
        </form>
        {this.state.processSubmission && <GenerateLexicon textEntry={this.state.submittedValue} endProcessSubmission={this.endProcessSubmission} />}
      </div>
    );
  }
}

export default EnterText;