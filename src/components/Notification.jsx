import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({value_data}) => {
  const notify_success = () => toast.success("Successfully resgitration!", {
    position: "top-right"
  });

  const notify_error = () => toast.error("Successfully resgitration!", {
    position: "top-right"
  });

  const [check_sucess,Set_check_status] = useState("success")
  alert(value_data);
  return (
    <div>
      
        <button onClick={
          check_sucess=="success"?notify_success():notify_error
        }>Notify!</button>
        <ToastContainer />
    </div>
  )
}

export default Notification