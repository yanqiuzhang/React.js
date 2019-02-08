import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import Link from 'next/link';

class Projects extends Component {
  constructor() {
    super() 
      this.state = {
        projects: []
      };
  }

  componentDidMount() {
    axios.get('./src/data/projects.json')
    .then(response => {
      this.setState({
        projects: response.data
      })
    })
  }

  render() {
    const projects = this.state.projects
    let projectsList

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div key={project.id} className="min-h-900 my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 float-left">
            <ProjectCard project={project} />
          </div>
        )
      })
    }

    return (
      <div>
        <div className="title-div">
          {projectsList}
        </div>
        <div className="Project-dev">
        <h1 className="content-text">My Projects</h1>
         <div className="Project-dev2">
          <ul>
            <li><Link href="https://github.com/yanqiuzhang/fizzbuzz_js_challenge"><a>FizzBuzz</a></Link></li>
            <li><Link href="https://github.com/yanqiuzhang/Address_Book"><a>Address Book</a></Link></li>
            <li><Link href="https://github.com/yanqiuzhang/BMI_challenge"><a>BMI</a></Link></li>
          </ul>
         </div>
        </div>

        <style jsx>{`
        .content-text{
          text-align: center;
          padding: 20px;
          font-style: italic;
          font-family: "Times New Roman", Times, serif;
          color: #4c9bf1;
          font-size: 40px;
        }
        a{
          font-style: italic;
          color: #4c9bf1;
          font-size: 24px;
          text-decoration: none;
          font-family: "Times New Roman", Times, serif;
          z-index: 1;
        }
        a:hover {
          color: blue;
        }
        li{
          padding-top: 17px;
        }
        .Project-dev{
          margin: 0 auto;
        }
        .Project-dev2{
          width: 100%;
          height: 350px;
          background: url(http://www.europa-re.com/uploads/pb2.png) no-repeat center center;
          background-size: 100% 100%;
          position: relative;
          float: left;
          left: 5px;
          margin: 0;
          opacity: 0.7;
          object-fit:cover;
        }
        `}</style>
      </div>
    )
  };
}

export default Projects