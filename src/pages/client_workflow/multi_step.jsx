import React, { useState } from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';
import ProjectSelection from './ProjectSelection';
import ProjectCategoriesOptions from './projectCategoriesOptions';
import Package_box from './package_show';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <Form onSubmit={handleSubmit} className='bg-white p-5'>
      <ProgressBar now={(step / 3) * 100} />
      {step === 1 && (
        <div controlId="formStep1">
            <ProjectSelection />
        </div>
      )}
      {step === 2 && (
        <ProjectCategoriesOptions />
      )}
      {step === 3 && (
       <Package_box />
      )}
      <div className="d-flex justify-content-between">
        {step > 1 && (
          <Button variant="secondary" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {step < 3 ? (
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </div>
    </Form>
  );
};

export default MultiStepForm;