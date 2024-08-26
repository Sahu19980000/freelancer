import React from 'react'
import groupone from '../../img/Group 90.png'
import grouptwo from '../../img/Group 91.png'
import groupthree from '../../img/Group 92.png'
import main_image from '../../img/pexels-goumbik-574071.png'
import Mainheading from '../../components/Mainheading'

const Popularservices = () => {
  return (
    <div class="popular-services-container bg-light py-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <Mainheading title="Popular Services" color="#000"  />
                </div>
                <div class="col-md-4 col-12 my-3">
                    <div class="row">
                        <div class="col-8">
                            <img src={main_image} class="img-fluid rounded" />
                        </div>
                        <div class="col-4">
                            <div class="sub-gallery">
                                <img src={groupone} class="img-fluid" />
                                <img src={grouptwo} class="img-fluid" />
                                <img src={groupthree} class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-12">
                        <h4 className='text-center p-3'><strong>Application Development</strong></h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12 my-3">
                    <div class="row">
                        <div class="col-8">
                        <img src={main_image} class="img-fluid rounded" />
                        </div>
                        <div class="col-4">
                        <div class="sub-gallery">
                                <img src={groupone} class="img-fluid" />
                                <img src={grouptwo} class="img-fluid" />
                                <img src={groupthree} class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-12">
                        <h4 className='text-center p-3'><strong>Application Development</strong></h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12 my-3">
                    <div class="row">
                        <div class="col-8">
                        <img src={main_image} class="img-fluid rounded" />
                        </div>
                        <div class="col-4">
                        <div class="sub-gallery">
                                <img src={groupone} class="img-fluid" />
                                <img src={grouptwo} class="img-fluid" />
                                <img src={groupthree} class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-12">
                        <h4 className='text-center p-3'><strong>Application Development</strong></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popularservices