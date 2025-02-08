import React from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { FaDollarSign, FaShoppingCart, FaChartLine, FaRedoAlt, FaUserInjured, FaPiggyBank } from 'react-icons/fa';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
    // Line chart data
    const lineData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Revenue Statistics",
          data: [12500, 14000, 11000, 17000, 15000, 16500, 13000],
          fill: true,
          borderColor: "#36A2EB",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          pointBackgroundColor: "#36A2EB",
        },
      ],
    };
  
    // Bar chart data
    const barData = {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: 'Quarterly Sales',
          data: [50000, 60000, 40000, 70000],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          borderRadius: 10,
        },
      ],
    };
  
    // Pie chart data
    const pieData = {
      labels: ['Database', 'Email Account', 'Domains', 'Data'],
      datasets: [
        {
          label: 'Server Status',
          data: [60, 12, 18, 10],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        },
      ],
    };
  
    const lineOptions = {
      responsive: true,
      maintainAspectRatio: false, // Ensures charts occupy 100% height and width of container
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Revenue Over Time',
          color: '#333',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: '#f0f0f0',
          },
        },
        x: {
          grid: {
            color: '#f0f0f0',
          },
        },
      },
    };
  
    // Bar chart options with better layout
    const barOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Quarterly Sales',
          color: '#333',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: '#f0f0f0',
          },
        },
        x: {
          grid: {
            color: '#f0f0f0',
          },
        },
      },
    };
  
    const pieOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Server Status',
          color: '#333',
        },
      },
    };
  
    return (
      <div className="dashboard-container">
        <div className="top-stats">
          <div className="stat-card">
            <FaDollarSign className="stat-icon" />
            <h2>Revenue</h2>
            <p>$25,054</p>
          </div>
          <div className="stat-card">
            <FaRedoAlt className="stat-icon" />
            <h2>Refund</h2>
            <p>$1,874</p>
          </div>
          <div className="stat-card">
            <FaShoppingCart className="stat-icon" />
            <h2>Current Sales</h2>
            <p>287</p>
          </div>
          <div className="stat-card">
            <FaChartLine className="stat-icon" />
            <h2>Recurring Sales</h2>
            <p>$2,284</p>
          </div>
        </div>
  
        <div className="charts">
          <div className="chart-container">
            <Line data={lineData} options={lineOptions} />
          </div>
          <div className="chart-container">
            <Bar data={barData} options={barOptions} />
          </div>
          <div className="chart-container">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>

        <div className="other-stats">
          <div className="patients">
            <FaUserInjured className="stat-icon" />
            <h2>34,042</h2>
            <p>Patients this month</p>
          </div>
          <div className="stock-market">
            <FaChartLine className="stat-icon" /> {/* Icon added here */}
            <h2>Stock Market</h2>
            <p>XU200: +120.45</p>
            <p>Jake Weary: +142.41</p>
            <p>Globel IPC: +215.45</p>
          </div>
          <div className="savings">
            <FaPiggyBank className="stat-icon" />
            <h2>$1,560.75</h2>
            <p>Savings Progress</p>
          </div>
        </div>
  
        <style jsx>{`
          .dashboard-container {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 20px;
            padding: 20px;
            background: linear-gradient(to right, #e8f1f9, #fff);
            font-family: 'Poppins', sans-serif;
          }
  
          .top-stats {
            grid-column: span 12;
            display: flex;
            justify-content: space-between;
          }
  
          .stat-card {
            background: linear-gradient(135deg, #36A2EB, #4BC0C0);
            padding: 30px;
            border-radius: 15px;
            width: 22%;
            text-align: center;
            color: white;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
  
          .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
          }
  
          .stat-icon {
            font-size: 28px;
            margin-bottom: 15px;
          }
  
          .charts {
            display: flex;
            grid-column: span 12;
            gap: 20px;
          }
  
          .chart-container {
            background: white;
            padding: 25px;
            border-radius: 20px;
            flex-grow: 1;
            height: 400px; /* Set a fixed height to make charts fill the available space */
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.05);
          }
  
          .other-stats {
            grid-column: span 12;
            display: flex;
            justify-content: space-between;
          }
  
          .patients, .stock-market, .savings {
            background: white;
            padding: 25px;
            border-radius: 15px;
            width: 30%;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.05);
          }
  
          h2 {
            color: #333;
            font-size: 22px;
            margin-bottom: 10px;
          }
  
          p {
            color: #666;
            font-size: 16px;
          }
  
          /* Hover effects for cards */
          .patients:hover, .stock-market:hover, .savings:hover {
            transform: translateY(-5px);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
          }
  
          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .top-stats, .other-stats {
              flex-direction: column;
            }
            .stat-card, .patients, .stock-market, .savings {
              width: 100%;
              margin-bottom: 20px;
            }
            .charts {
              flex-direction: column;
            }
            .chart-container {
              height: 300px;
            }
          }
        `}</style>
      </div>
    );
};

export default Dashboard;
