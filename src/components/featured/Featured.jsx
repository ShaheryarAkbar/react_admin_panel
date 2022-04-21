import './featured.scss';
import {Pie} from 'react-chartjs-2';
import Chart from "chart.js/auto";

const Featured = () => {

    const data = {
        // labels: ['New Orders','Completed','Pending'],
        datasets: [
            {
                data: [13.7, 62.7,23.5],
                borderWidth:1,
                backgroundColor: ['rgba(232,99,132,1)',
                'rgb(0,0,255)',
                'rgb(255,0,0)',
                ],
                pointBackgroundColor: 'rgba(0,0,0,0)',
                backgroundImage: 'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center'
            }
            
        ]
    }

  return (
    <div className='featured'>
      <div className="top">
        <div className="title">Orders</div>
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <Pie data={data} className='piechart'/>
        </div>
        <div className="contentItems">
            <div className="content">
                <span>New Orders</span>
                <button className='btn1'>25%</button>
            </div>
            <hr />
            <div className="content">
                <span>Completed</span>
                <button className='btn2'>65%</button>
            </div>
            <hr />
            <div className="content">
                <span>Pending</span>
                <button className='btn3'>10%</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
