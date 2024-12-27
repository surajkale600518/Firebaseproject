import React, { useEffect, useState } from 'react'
import "./Form.css";
import { useFormik } from 'formik';
import axios from 'axios';
export const Register = () => {
  const [states, setStates] = useState([]); // State-level data
  const [districts, setDistricts] = useState([]); // District-level data
  const [subdistricts, setSubdistricts] = useState([]); // Sub-District-level data
  const [villages, setVillages] = useState([]); // Village-level data


  const [states1, setStates1] = useState([]); // State-level data
  const [districts1, setDistricts1] = useState([]); // District-level data
  const [subdistricts1, setSubdistricts1] = useState([]); // Sub-District-level data
  const [villages1, setVillages1] = useState([]); // Village-level data



  function statesChange(e) {
    // setStates1(e.target.value);
    setStates1(e.target.value);
    console.log(e.target.value);
    axios.get(`https://krushi-serv-2024-1.onrender.com/state/${e.target.value}`)
      .then((res) => setDistricts(res.data));
      // districtsChange(e.target.value);
  }
  // console.log("State: ",states1)
  
  function districtsChange(dist,state) {
    setDistricts1(dist.target.value);
    // console.log("State ", state + " Dist ", dist.target.value)
     axios
       .get(`https://krushi-serv-2024-1.onrender.com/state/${state}/${dist.target.value}`)
       .then((res) => setSubdistricts(res.data));
 }

  function subdistrictsChange(sub,state,dist)
  {
    console.log("Welcome",sub.target.value,state,dist);
    
     axios
       .get(`https://krushi-serv-2024-1.onrender.com/state/${state}/${dist}/${sub.target.value}`)
      .then((res) => setVillages(res.data));
    
   
  }


  useEffect(() => {
    //Fetch all state data
    axios
      .get("https://krushi-serv-2024-1.onrender.com/state/")
      .then((res) => {
        setStates(res.data);
        
        // setSubdistricts(res.data);
        // setVillages(res.data);
      })
      .catch((error) => console.error("Error fetching state data:", error));

  }, []); 
  // console.log(states1)


  const [btndis , setBtndis] = useState({display:'none'});

  function tragetbtn(e)
  {
    if(e.target.checked === true)
    {
      setBtndis({display:'block'})
    }
    else
    {
      setBtndis({display:'none'})
    }
  }

  const formik = useFormik({
    initialValues:{
      fname:'',
      mobile:'',
      email:'',
      password:'',
      age:'',
      gender:'',
      statedata:'',
      districtsdata:'',
      sub_districtsdata:'',
      villagesdata:'',

    },
    onSubmit:(user)=>{
      axios.post('https://krushi-serv-2024-1.onrender.com/userRegister',user);
      alert('user register successfully...')
    }
  })
    return (
        <div className="farmer-registration-form">
          <form onSubmit={formik.handleSubmit}>
            <h1 style={{marginTop:"60px", textAlign:"center"}}>Register Form</h1>
            <div className="form-row">
              <label>
                Farmer Name<span>*</span>
                <input type="text" name='fname' placeholder="Name" onChange={formik.handleChange}/>
              </label>
             
             <div className="form-row">
             <label>
                Email<span>*</span>
                <input type="email" name='email' placeholder="Enter Your Email" onChange={formik.handleChange}/>
              </label>
             
              <label>
                PassWord<span>*</span>
                <input type="password" name='password' placeholder="Enter Your Password" onChange={formik.handleChange}/>
              </label>
             </div>
             <label>
                Mobile Number<span>*</span>
                <input type="number" name='mobile' placeholder="+91" onChange={formik.handleChange}/>
              </label>
              <label>
                Age<span>*</span>
                <input type="number" name='age' placeholder="Age" onChange={formik.handleChange}/>
              </label>
            </div>
            <div className="form-row">
              <label>
                Gender<span>*</span>
                <select required name='gender'onChange={formik.handleChange}>
                  <option value="">Select Gender</option>
                  <option n value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
              <label>
                Select State<span>*</span>
                <select
              name="statedata"
              onChange={(e) => {
                statesChange(e);
                
                formik.handleChange(e);
              }}
            >
              <option value="">Choose Your State</option>
              {states.map((items, index) =>
                items.states.map((items1, index1) => (
                  <option key={`${index}-${index1}`} value={items1.name}>
                    {items1.name}
                  </option>
                ))
              )}
            </select>
               
              </label>
              <label>
                District<span>*</span>
                <select
              name="districtdata"
              onChange={(e) => {
               
                 districtsChange(e,states1);
               
                formik.handleChange(e);
              }}
            >
              <option value="">Choose Your District</option>
              {districts.map((districts, index) => (
                <option key={`${index}`} value={districts.name}>
                  {districts.name}
                </option>
              ))}
            </select>
                </label>
            </div>
            <div className="form-row">
              <label>
               Taluka<span>*</span>
               <select
              name="sub_districtdata"
              onChange={(e) => {
                formik.handleChange(e);
                subdistrictsChange(e,states1,districts1);
              }}
            >
              <option value="">Choose Your Sub-District</option>
              {subdistricts.map((items, index) => (
                <option key={`${index}`} value={items.name}>
                  {items.name}
                </option>
              ))}
            </select>
                </label>
              <label>
                Village<span>*</span>
                <select name="villagesdata" onChange={formik.handleChange}>
              <option value="">Choose Your Village</option>
              {
              villages.map((items,index) => 
              (
                <option key={`${index}`} value={items}>{ items}</option>
              )
                )
             }
            </select>
              </label>
              <label>
                Language<span>*</span>
                <select name='lang'>
                  <option value="Select Language">Select Language</option>
                  <option value="English">English</option>
                  <option value="Marath">Marathi</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </label>
            </div>
           
            <div className="form-row">
              <label className="consent">
                <input type="checkbox"  onChange={tragetbtn} style={{width:"15px", margin:"5px"}}/>
                I give my explicit consent  register with  SMS, calls.
              </label>
            </div>
            <div className="form-row">
              <button type="submit" style={btndis}>Submit</button>
            </div>
          </form>
        
        </div>
      );
    }
    
