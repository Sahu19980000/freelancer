import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProjectSelection = ({id,Setid}) => {
  const [selected, setSelected] = useState(null);
  const [store_categories,Setcategories] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      axios.get('https://ubm.annapurnadhamagro.com/api/explore/project',
      {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        alert("show categories");
        Setcategories(result.data);
        
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          alert(
            "Message: " + (err.response.message || err.response.statusText)
          );
        } else if (err.request) {
          alert("Message: No response from server. Please try again later.");
        } else {
          alert("Message: " + err.message);
        }
      });
    }
  
  }, [])
  

  const handleSelect = (index) => {
    // setSelected(type);
     Setid(index);
     
  };

  return (
    <div>
      {
        store_categories.map((ele,index)=>{
          return(
            <>
              <button id={index} className='bg-primary border-0 text-white m-4 p-2 rounded' onClick={() => handleSelect(index)}>{ele.name}</button>
              
            </>
          )
        })
      }
    </div>
  );
};

export default ProjectSelection;
