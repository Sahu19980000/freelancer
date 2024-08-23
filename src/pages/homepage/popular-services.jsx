import React from 'react'
import groupone from '../../img/Group 90.png'
import grouptwo from '../../img/Group 91.png'
import groupthree from '../../img/Group 92.png'
import main_image from '../../img/pexels-goumbik-574071.png'

const Popularservices = () => {
  return (
    <div class="popular-services-container bg-light">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h1 class="py-4">Popular Services</h1>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-8">
                            <img src={main_image} class="img-fluid rounded" />
                        </div>
                        <div class="col-md-4">
                            <div class="sub-gallery">
                                <img src={groupone} class="img-fluid" />
                                <img src={grouptwo} class="img-fluid" />
                                <img src={groupthree} class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-12">
                            <p className='h4 text-center p-3'><strong>Application Development</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-8">
                        <img src={main_image} class="img-fluid rounded" />
                        </div>
                        <div class="col-md-4">
                        <div class="sub-gallery">
                                <img src={groupone} class="img-fluid" />
                                <img src={grouptwo} class="img-fluid" />
                                <img src={groupthree} class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-12">
                        <p className='h4 text-center p-3'><strong>Application Development</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-8">
                        <img src={main_image} class="img-fluid rounded" />
                        </div>
                        <div class="col-md-4">
                        <div class="sub-gallery">
                                <img src={groupone} class="img-fluid" />
                                <img src={grouptwo} class="img-fluid" />
                                <img src={groupthree} class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-12">
                        <p className='h4 text-center p-3'><strong>Application Development</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popularservices