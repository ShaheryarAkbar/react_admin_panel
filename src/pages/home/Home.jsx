import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="Total Orders"/>
          <Widget type="Total Earnings"/>
          <Widget type="Total Customers"/>
          <Widget type="Total Employees"/>
        </div>

        <div className="charts">
          <Chart />
          <Featured />
        </div>
      </div>
    </div>
  )
}

export default Home
