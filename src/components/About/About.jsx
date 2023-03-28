import React from 'react'
import imageSrc from './../Textform/image.png'; 
const About = () => {
  return (
    <div id='About' className="container my-5">
    <div className="row">
      <div className="col-md-6">
        <img src={imageSrc} alt="Profile" className="img-fluid mb-4" />
      </div>
      <div className="col-md-6">
        <h2>About Text Tool</h2>
        <p className="lead">
          Text Tool is a simple and powerful web application that provides a set of utilities to manipulate text, including removing extra spaces, converting text to uppercase or lowercase, and more.
        </p>
        <p>
          With Text Tool, you can quickly and easily format your text the way you want it, saving time and effort in the process. Whether you're a writer, a student, or just someone who works with text on a regular basis, Text Tool is the perfect solution for all your text manipulation needs.
        </p>
        <p>
          So why wait? Try out Text Tool today and see how it can make your life easier!
        </p>
      </div>
    </div>
  </div>
  )
}

export default About