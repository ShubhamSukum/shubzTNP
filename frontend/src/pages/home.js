import React from 'react';
import "../components/navbar.css";
import { Link } from 'react-router-dom';

export const Home = () => {
  return (<>
      <div className='home-page'>
          <h1>TrackTNP</h1>
          <br/><br/>

          <Link to={"/visualize2020"}><button className='btn btn-primary'>Visualize 2020-21 Data</button></Link>
          <br/>
          <Link to={"/visualize2021"}><button className='btn btn-warning'>Visualize 2021-22 Data</button></Link>
          <br/>
          <Link to={"/visualize2022"}><button className='btn btn-success'>Visualize 2022-23 Data</button></Link>
          <br/>
          <Link to={"/visualize2023"}><button className='btn btn-danger'>Visualize 2023-24 Data</button></Link>


      </div>
  </>)
}