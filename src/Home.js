import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
        <div className='departmentContainer'>
            <h1>Departments of XYZ</h1>
            <h2>Purchase</h2>
            <h2>Sells</h2>
            <h2>Production</h2>
            <h2>accounts</h2>
        </div>
        <div className='employeeContainer'>
            <h1>Employees of XYZ</h1>
            <div className='homeRow'>
                <h3>Egdaliya Dolphuwala</h3>
                <h3>Marcacha Murari</h3>
                <h3>Narrakel Dharakka</h3>
            </div>
            <div className='homeRow'>
                <h3>Satyasundar Biswas</h3>
                <h3>Mohmukti Nirban</h3>
                <h3>Bostapocha Bista</h3>
            </div>
            <div className='homeRow'>
                <h3>Asphuta Adata</h3>
                <h3>Dinal Mondal</h3>
                <h3>Prahuti Pradhan</h3>
            </div>

        </div>
      
    </div>
  )
}

export default Home