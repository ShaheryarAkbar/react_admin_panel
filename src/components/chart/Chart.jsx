import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      Sales: 400,
      Orders: 240
    },
    {
      name: 'Feb',
      Sales: 300,
      Orders: 198
    },
    {
      name: 'Mar',
      Sales: 200,
      Orders: 280
    },
    {
      name: 'Apr',
      Sales: 280,
      Orders: 390
    },
    {
      name: 'May',
      Sales: 180,
      Orders: 400
    },
    {
      name: 'Jun',
      Sales: 390,
      Orders: 300
    },
    {
      name: 'Jul',
      Sales: 340,
      Orders: 400
    },
    {
      name: 'Aug',
      Sales: 180,
      Orders: 400
    },
    {
      name: 'Sep',
      Sales: 390,
      Orders: 300
    },
    {
      name: 'Oct',
      Sales: 490,
      Orders: 300
    },
    {
      name: 'Nov',
      Sales: 250,
      Orders: 150
    },
  ];

const Chart = () => {
  return (
    <div className='chart'>
      <div className="top">
        <div className="title">
          <span>Sales Figures</span>
          <div className='content'>
          <span className='cont'>Sales</span>
          <span className='conts'>Orders</span>
          </div>
        </div>
      </div>
      <div className="bottom">
      <ResponsiveContainer width="100%" height={380}>
            <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="Sales" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="Orders" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart
