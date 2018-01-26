import * as React from 'react';
import { render } from 'react-dom';
import { Redirect } from 'react-router-dom';
import * as Tesseract from 'tesseract.js';
// import axios, { post } from 'axios';
import TextField from './web_objects/TextField.jsx';
// import express from 'express';
// import multer from 'multer';

interface ITicketsState {
  fileName: string,
  progressValue: number
}

class Tickets extends React.Component<{}, ITicketsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      fileName: '',
      progressValue: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fileUpload = this.fileUpload.bind(this);

    // this.app = express();
    // const upload_path = path.join(__dirname, '../tickets/');
    // const multer_upload = multer({ dest: upload_path }).any();
    // this.upload = multer({multer_upload});
  }

  handleChange(event: any) {
    // const fullPath = event.target.value;
    // if (fullPath) {
    //   var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    //   var file = fullPath.substring(startIndex);
    //   if (file.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
    //     file = file.substring(1);
    //   }
    // }

    // this.setState({ fileName: file }, function () {
    //   alert("fileName = " + this.state.fileName);
    // });
    this.setState({
      fileName: event.target.files[0]
    });
  }

  // fileUpload(file) {
  //   const url = require('path').resolve(__dirname, 'tickets');
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data'
  //     }
  //   }
  //   return post(url, formData, config);
  // }

  handleSubmit(event: any) {
    event.preventDefault();
    alert("getting image");
    // const image = require('path').resolve(__dirname, this.state.fileName);
    // alert("image = " + image);

    alert("equis: " + this.state.fileName);
    // this.fileUpload(this.state.fileName).then((response) => {
    //   alert("file uploaded");
    // })

    alert("Tesseract: " + Tesseract);

    const image = require('path').resolve(__dirname, 'tickets/text3.png');
    Tesseract.detect(image)
      .progress(function (info) {
        console.log(info);
      })
      .then(function (data) {
        console.log('done', data);
      })
      .finally(e => {
        console.log('finally\n');
      });

    alert("finished");
  }


  render() {
    return (
      <div className="tickets">
        <h1>Tickets</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='file'
            id='fileId'
            name='fileName'
            onChange={this.handleChange} />
          <hr />
          <input type="submit" value="Analyze" disabled={!this.state.fileName} />
        </form>
        {/* <progress value={this.progressValue} max="100"></progress> */}
      </div>
    );
  }
}

export default Tickets;