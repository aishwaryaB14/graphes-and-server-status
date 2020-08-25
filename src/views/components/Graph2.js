import React, { Component } from 'react'
import Chart from 'react-apexcharts';
/* import '../../Style.css'; */
class Graph2 extends Component {

  constructor(props) {
    super(props);
    const data = this.props && this.props.data;

    console.log("ggggg data..111...", data)

    this.state = {
      
     series: data, 
       options: {
         
        labels: ['DEVELOPMENT','PRODUCTION','TWILIO','MLS','SENDGRID' ], 
    /*   labels:['TRUE','RED'], */
      colors:  ['#3498DB'],  
         legend: {
          show: false
        },  
        chart: {
          type: 'pie',
        }, 
     
        plotOptions: {
          pie: {
            dataLabels: {
              position: 'top'
            },
          }
        },
        dataLabels: {
          enabled: false,
           formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name]
          },
          textAnchor: 'start',
          distributed: false,
          },
        responsive: [{
          breakpoint: 600,
        
          options: {
            chart: {
              
            },  
            legend: {
              markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#3498db',
        fillColors: '#3498db' ,
        radius: 12,
        background: '#3498db',
          
        textCenter: {
            textAlign: ' right',
        },
          
      },
         }
          }
        }]
      },
    };
  }
  

  render() {
    return (
      <div>
           <div id="chart">
          <ul>
                  <li style={{color: 'green',fontSize:"20px"}}>Server is up</li>
                   <li style={{color: 'red',fontSize:"20px" }}>Server is down</li>
                   <h4></h4>
               </ul>
         <Chart options={this.state.options}  series={this.state.series}   type="donut" height={355} />
        </div>
      </div>
    )
  }
}

export default Graph2;