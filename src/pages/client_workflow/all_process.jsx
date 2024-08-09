import React, { useState } from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';
import ProjectSelection from './ProjectSelection';
import ProjectCategoriesOptions from './projectCategoriesOptions';
import Package_box from './package_show';
import Programming_skills from './show_programming_sklls';
import Programming_skills_brif from './programming_skills_brif';
import CompanyList from './show_list_company';

const Allprocess = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [id,Setid] = useState(0);

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
      <ProgressBar now={(step / 6) * 100} />
      {step === 1 && (
        <div controlId="formStep1">
            <ProjectSelection id={id} Setid={Setid}/>
        </div>
      )}
      {step === 2 && (
        <ProjectCategoriesOptions id={id}/>
      )}
      {step === 3 && (
       <Package_box />
      )}
      {step === 4 && (
       <Programming_skills />
      )}
      {step === 5 && (
       <Programming_skills_brif />
      )}
      {step === 6 && (
       <CompanyList />
      )}
      <div className="d-flex justify-content-between">
        {step > 1 && (
          <Button variant="secondary" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {step < 6 ? (
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

export default Allprocess;