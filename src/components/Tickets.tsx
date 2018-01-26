import * as React from 'react';
import { render } from 'react-dom';
import { Redirect } from 'react-router-dom';
import * as Tesseract from 'tesseract.js';
// import axios, { post } from 'axios';
import TextField from './web_objects/TextField.jsx';
// import express from 'express';
// import multer from 'multer';

interface ITicketsState {
  fileName: any,
  progressValue: number,
  textFromImage: string
}

class Tickets extends React.Component<{}, ITicketsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      fileName: null,
      progressValue: 0,
      textFromImage: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.progressUpdate = this.progressUpdate.bind(this);
    this.result = this.result.bind(this);
  }

  handleChange(event: any) {
    this.setState({ fileName: event.target.files[0] });
  }

  handleSubmit(event: any) {
    event.stopPropagation();
    event.preventDefault();

    //var file = this.state.fileName;
    //var language = 'eng';

    Tesseract.recognize(this.state.fileName, 'eng')
      .progress(this.progressUpdate)
      .then(this.result)
  }

  result(res: any) {
    console.log('result was:', res)
    this.progressUpdate({ status: 'done', data: res });
  }


  progressUpdate(packet: any) {
    var log = document.getElementById('log');
    var line = document.createElement('div');
    var statusInfo = document.getElementById('statusInfo');
    var span = document.getElementById('info');

    if ('progress' in packet) {
      var progress = document.querySelector('progress');
      progress.value = packet.progress;
      progress.max = 1;
      span.innerHTML = `Analyzing file: ${this.state.fileName.name}...`;
    }


    if (packet.status == 'done') {
      if (line.hasChildNodes()) {
        line.removeChild(line.firstChild);
      }
      var pre = document.createElement('pre');
      this.setState({ textFromImage: packet.data.text });

      pre.appendChild(document.createTextNode(packet.data.text));
      line.innerHTML = '';
      line.appendChild(pre);

      span.innerHTML = 'Finished!'
    }

    log.insertBefore(line, log.firstChild);
  }

  render() {
    return (
      <div className="tickets">
        <h1>Tickets</h1>
        <div className="ticketsForm">
          <form onSubmit={this.handleSubmit}>
            <input
              type='file'
              id='fileId'
              name='fileName'
              onChange={this.handleChange} />
            <hr />
            <input type="submit" value="Analyze" disabled={!this.state.fileName} accept=".jpg, .jpeg, .png" />
          </form>
        </div>
        <hr />
        <div id="status" className="ticketsStatus">
          <progress value={this.state.progressValue} max="100"></progress>
          <div id="statusInfo" className="statusInfo">
            Status: <span id="info" />
          </div>
          <div id="log" />
        </div>
      </div>
    );
  }
}

export default Tickets;