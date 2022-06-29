import React, { useState, useEffect } from 'react';
import './Header.css';
import { getDocs } from 'firebase/firestore';
import { colRef } from './firebase';


function Header() {
  
  

  const [inputData, setInputData ] = useState("");
  const [buttonClick, setButtonClick] = useState(false);
  
  
  // const showResult = (e) => {
  //     e.preventDefault();
  //     console.log("showing result")
  //     // {organization && console.log(organization.length)} - its working
  //     {organization && SearchDepartment(organization)}
  //   }

  const showResult = (e) => {
    e.preventDefault();
    setButtonClick(true)
  }
 
  

  useEffect(() => {
    var organization = []
   getDocs(colRef)
    .then((snapshot) => {
      // organization = []
      
      snapshot.docs.forEach((doc) => {
    // console.log("inside snapshot the object", doc.data());
       organization.push(doc.data());
     })
     
    })
    
.then(()=>{
  if (buttonClick) {
    SearchDepartment(organization)
  // console.log(organization[1].name)
  }
  
})
.then(setButtonClick(false))
.catch(err => {
  console.log(err.message);
})
},[showResult])





function SearchDepartment(org) {
  var departmentValue;
  let i;
  for(i=0; i<org.length; i++ ){
    if (inputData == org[i].name) {
        departmentValue = org[i].department;
         alert(departmentValue);
        break
      } 
    console.log("loop number", i, departmentValue) ;
     
  } //for loop
  
}

// function SearchDepartment(org){
//   var departmentValue
//   org.forEach((profile) => {
//     if ((profile.name) === inputData){
//       departmentValue = profile.department
//       }
//       return departmentValue
//   })
//   return departmentValue
// }


// function SearchDepartment(org){
//   org.map((profile) => {
//     if ((profile.name) === inputData){
//       return (profile.department)
//     } 
//     else {
//       alert("Please type a valid name")
//     })






return (
    <div className='header'>
        <h2 id="company">XYZ Organization</h2>
        <div className='headerSearch'>
          
          <input className='headerSearchInput' type="text" placeholder="Search by employee name" 
            onChange={e => { setInputData(e.target.value) }} value={inputData}>
          </input>
          <button className="headerSearchBotton" type="button" onClick={showResult}>
            Search </button>
  
          

        </div>
        
     </div>
     
  )
}

export default Header






