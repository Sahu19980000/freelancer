import React from 'react'
import Rating from "../img/Rating.png"
import profile from "../img/profile-img.png"
import quote from "../img/Quote.png"

const Testimonialcards = () => {
  return (
    <div className='testimonial-cards'>
       <img src={Rating} />
       <p className='testimonial-text'>“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”</p>
       <div className='profile-section'>
            <div>
                <img src={profile} />
                <strong><p className='testimonial-text'>Robert Fox</p></strong>
                <p className='testimonial-text'>UI/UX Designer</p>
            </div>
            <div>
                <img src={quote} />
            </div>
       </div>
    </div>
  )
}

export default Testimonialcards