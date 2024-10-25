// Benefits.jsx

import './Benefits.css';

import { BiGitCompare } from 'react-icons/bi';
import { FaTasks } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaBullseye } from 'react-icons/fa';
import { FaTachometerAlt } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';





const Benefits = () => {
  return (
    <section className="benefits-container"  id='benefits'>
      <div className="header">
        <button className="benefit-button" >Benefits</button>
        <h1>
           <span style={{color: '#4cc9f0'}}>ILERA</span>AI services are <span className="">already helping to</span>
        </h1>
      </div>
      
      <div className="benefits-cards">
        <div className="card">
          <div className="icon-container">
            {/* <img src={FaHome} alt="Icon 1" className="icon" /> */}
            <BiGitCompare size={50} color="#fff" />
          </div>
          <h3>Enhanced medical decision making</h3>
          <p>
          By offering intelligent suggestions, the AI empowers healthcare professionals to make more informed and precise decisions.
          </p>
        </div>
        
        <div className="card">
          <div className="icon-container">
          <FaTasks size={50} color="#fff" />
          </div>
          <h3>Reduced workload for medical staff</h3>
          <p>
          By automating routine diagnostic tasks, the AI reduces
           the workload on medical professionals, allowing them to focus on critical cases.
          </p>
        </div>
        
        <div className="card">
          <div className="icon-container">
          <FaBook size={50} color="#fff" />
          </div>
          <h3>Continuous learning and adaptation</h3>
          <p>
          The AI improves over time by learning from new patient data,
           providing even more accurate and personalized diagnostics in the future
          </p>
        </div>
        
       
        <div className="card">
          <div className="icon-container">
          <FaBullseye size={50} color="#fff" />
          </div>
          <h3>Increase diagnostic accuracy</h3>
          <p>
          The AI analyzes patient data to provide accurate diagnostic suggestions, reducing human errors in medical assessments.
          </p>
        </div>
        <div className="card">
          <div className="icon-container">
          <FaTachometerAlt size={50} color="#fff" /> 
          </div>
          <h3>Faster diagnosis processing</h3>
          <p>
          The system quickly processes large datasets, allowing healthcare professionals to make timely decisions without delays.
          </p>
        </div>
        <div className="card">
          <div className="icon-container">
          <FaInfoCircle size={50} color="#fff" />
          </div>
          <h3>Real-time patient information access</h3>
          <p>
          Seamless integration with hospital systems ensures up-to-date patient data is available instantly for doctors
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
