import React, { Component } from 'react';
import axios from 'axios' ;
import CvCard from "./CvCard";

class Cv extends Component {
  constructor(){
    super();
    this.state = {
      cvs: []
    }
  }

  componentDidMount(){
    axios.get('./src/data/Cv.json')
    .then(response => {
      this.setState = {
        cvs: response.data
      }
    })
  }

  render() {
    const cvs = this.state.cvs
    let Cvlist

    if (cvs.length > 0) {
      Cvlist = cvs.map(cv => {
        return (
          <div key = {cv.id} >
            <CvCard cv={cv} />
          </div>
        )
      })
    }
  
    return (
      <div>
        <div style={{paddingTop: '20px'}}>
         {Cvlist}
        </div>
      </div>
    )
  }
}

export default Cv
