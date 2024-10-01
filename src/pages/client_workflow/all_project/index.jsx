import React from 'react'
import Mainheading from '../../../components/Mainheading'
import Button from '../../../components/Buttton'
import Project_bg from "../../../img/final-project-bg.png"
import ProjectsCreated from './Allproject'

const All_project = () => {
  return (
    <div className='all-project-container'>
       <div className="container">
          <div className="row">
            <div className="col-md-8">
            <Mainheading title="Didn’t find what you are looking for?" />
            <p>Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse habitant elementum dignissim arcu mauris. Ullamcorper euismod id commodo mi nec. Sit egestas mauris imperdiet feugiat eros, sapien at pellentesque.</p>
            <Button className="freelancer-dark-btn" title="Post A Project" />
            </div>
            <div className="col-md-4">
               <img src={Project_bg} />
            </div>
          </div>

          <div className="row">
            <ProjectsCreated />
          </div>
       </div>
    </div>
  )
}

export default All_project