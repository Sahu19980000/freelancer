import React, { useState } from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';
import ProjectSelection from './ProjectSelection';
import ProjectCategoriesOptions from './projectCategoriesOptions';
import Package_box from './package_show';
import Programming_skills from './show_programming_sklls';
import Programming_skills_brif from './programming_skills_brif';
import CompanyList from './show_list_company';
import Technology_page from './technology_page';
import ExplorePages from '.././ExplorePages';
import All_project from './all_project';
import website_banner from "../../img/explore-banner.png";

const Allprocess = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [id,Setid] = useState(0);
  const [planmakeid, setplan] = useState(0);
  const [plan_type,Setplantype] = useState('');

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
    <Form onSubmit={handleSubmit} className='bg-white p-0 '>
      {/* <ProgressBar now={(step / 6) * 100} /> */}
      {/* <All_project /> */}
      
      {step === 1 && (
        <div controlId="formStep1" className='formstepone p-4' >
            <ProjectSelection 
            id={id} 
            Setid={Setid} 
            setStep={setStep} 
            step={step}
            />
        </div>
      )}

      {step === 2 && (
        <div controlId="formStep1" className='formstepone p-4 ' >
        <ProjectCategoriesOptions 
        id={id} 
        Setid={Setid} 
        setStep={setStep} 
        step={step}/>

        </div>
        
      )}

      {step === 3 && (
       <Package_box 
       id={id} 
       planmakeid={planmakeid} 
       setStep={setStep} 
       step={step} 
       setplan={setplan} 
       Setplantype={Setplantype} 
       plan_type={plan_type}/>
      )}

      {step === 4 && (
        <div controlId="formStep1" className='formstepone p-4 '>
        <Programming_skills 
        planmakeid={planmakeid} 
        plan_type={plan_type} 
        Setid={Setid}
        id={id}
        setStep={setStep} 
        step={step}
        />
        </div>
       
      )}

      {step === 5 && (
       <Programming_skills_brif 
       setStep={setStep} 
        step={step}
       />
      )}

      {step === 6 && (
       <Technology_page setStep={setStep} 
       step={step}/>
      )}

      {step === 7 && (
       <ExplorePages setStep={setStep} 
       step={step}/>
      )}

     {step === 8 && (
       <All_project setStep={setStep} 
       step={step}/>
      )}

      

      {/* {step === 7 && (
       <All_project setStep={setStep} 
       step={step}/>
      )} */}


      <div className="d-flex justify-content-between">
        {step > 1 && (
          <Button variant="secondary" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {step < 9 ? (
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