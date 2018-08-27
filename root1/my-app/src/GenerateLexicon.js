import React, { Component } from 'react';

//this.props.endProcessSubmission()

class GenerateLexicon extends Component {

  componentDidMount() {
    this.props.endProcessSubmission();
  }

  render() {
    const textEntry = this.props.textEntry
    const strippedText = textEntry.replace(/[^\w\s]/gi,'').replace(/\r?\n|\r/gi,' ');
    const splitText = strippedText.split(' ');
    console.log(splitText);
    return (
      <div>
        <p>{strippedText}</p>
      </div>
    );
  }
}

export default GenerateLexicon;