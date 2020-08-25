import React, { Component } from 'react'
import { Card, CardTitle, CardText, Col, Row, Button } from 'reactstrap';
import www from '../../assets/img/brand/www.png';
import wwws from '../../assets/img/brand/wwws.png';
import email from '../../assets/img/brand/email.png';
import dedicated from '../../assets/img/brand/dedicated.png';
import sms from '../../assets/img/brand/sms.png';
import { connect } from 'react-redux';
import { getStatusData } from '../../redux/actions/graphAction';
import Footer from './Footer';
import Graph2 from './Graph2';
import Header from './Header';
import Chart from 'react-apexcharts';


class StatusPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: '',
      showMe: false,
      data: [1],
      data1: [1, 1, 1, 1, 1],
      status: false,
      statusData: [],
      loading: true,
      selectedEnv: '',

      // series: data1,
      options: {
        labels: ['DEVELOPMENT', 'PRODUCTION', 'TWILIO', 'MLS', 'SENDGRID'],
        colors: ['#3498DB'],
        chart: {
          type: 'pie',
        },

        plotOptions: {
          pie: {
            dataLabels: {},
          }
        },

        dataLabels: {
          enabled: true,
          enabledOnSeries: undefined,
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name]
          },
          textAnchor: 'middle',
          distributed: false,
          style: {
            fontSize: '10px',
            /* fontFamily: 'Helvetica, Arial, sans-serif', */
          },
        },
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
            },
            legend: {
              show: true,
            }
          }
        }]
      },
    }
  }


  componentDidMount() {
    this.props.getStatusData()
      .then((res) => {
        console.log("rrests", res)
        this.setState({ statusData: res.data.data }, () => { console.log('status', this.state.statusData) })
      })
  }



  checkAllStatus = (e) => {
    e.preventDefault();
    let allStatusData = []

    this.state.statusData.map((item, i) => {
      if (item.Dev === true) {
        allStatusData.push('#008000')
      } else if (item.Dev === false) {
        allStatusData.push('#FF0000')
      } else if (item.Prod === true) {
        allStatusData.push('#008000')
      } else if (item.Prod === false) {
        allStatusData.push('#FF0000')
      } else if (item.Twilio === true) {
        allStatusData.push('#008000')
      } else if (item.Twilio === false) {
        allStatusData.push('#FF0000')
      } else if (item.MLS === true) {
        allStatusData.push('#008000')
      } else if (item.MLS === false) {
        allStatusData.push('#FF0000')
      } else if (item.Sendgrid === true) {
        allStatusData.push('#008000')
      } else if (item.Sendgrid === false) {
        allStatusData.push('#FF0000')
      }
    })
    // console.log('allStatusData', allStatusData)
    // this.setState({allStatusData}, ()=> console.log(this.state.allStatusData))  

    this.setState(prevState => ({
      ...prevState,
      options: {
        ...prevState.options,
        colors: allStatusData
      }
    }))
    this.setState({
      showMe: !this.state.showMe
    })
  }


  StausChange = (e) => {
    e.preventDefault();

    if (e.target.value === "Dev") {
      this.setState({ selectedEnv: "DEVELOPME SERVER STATUS" })
    } else if (e.target.value === "Prod") {
      this.setState({ selectedEnv: "PRODUCTION SERVER STATUS" })
    } else if (e.target.value === "Twilio") {
      this.setState({ selectedEnv: "TWILIO SERVER STATUS" })
    }
    else if (e.target.value === "MLS") {
      this.setState({ selectedEnv: "MLS SERVER STATUS" })
    } else if (e.target.value === "Sendgrid") {
      this.setState({ selectedEnv: "SENDG SERVER STATUS" })
    } else {
      this.setState({ selectedEnv: e.target.value })
    }
    console.log("tar", e.target.value)
    console.log("tar", e.target.value)
    if (this.state.statusData.length > 0) {
      var onClickButton = this.state.statusData.filter((word) => word[e.target.value] === true);
      if (onClickButton.length === 0) {
        /*  allData1.push('#008000') */
        var x = document.getElementsByClassName("apexcharts-pie-area")[0];
        x.setAttribute("fill", "red");
      } else {
        /*  allData1.setAttribute("fill", "green");  */
        var x1 = document.getElementsByClassName("apexcharts-pie-area")[0];
        x1.setAttribute("fill", "green");
        /*  document.getElementByClassName('apexcharts-pie-area apexcharts-donut-slice-0').setAttribute("fill", "green"); */
      }
    }


  }

  render() {
    console.log("inside render..", this.state.statusData);
    const response = this.props.data

    console.log("response..", response.data)



    return (


      <div style={{ background: "#6c757d" }} className="animated fadeIn" >
        <Header />
        <div style={{ marginLeft: "5%", marginRight: "5%" }} >
          <br />

          <Row>
            <Col sm="2">
              <Card body inverse style={{ backgroundColor: '#007bff' }} className="text-right">
                <img width="20%" src={www} alt="develog" ></img>
                <CardTitle >DEVELOPMENT</CardTitle>
                <Button color="secondary" value="Dev" onClick={this.StausChange}>Check Status</Button>
                <CardText> </CardText>
              </Card>
            </Col>
            <Col sm="2">
              <Card body inverse style={{ backgroundColor: '#FF69B4' }} className="text-right">
                <img width="20%" src={wwws} alt="prolog"></img>
                <CardTitle>PRODUCTION</CardTitle>
                <Button color="secondary" value="Prod" onClick={this.StausChange}>Check Status</Button>
              </Card>
            </Col>
            <Col sm="2">
              <Card body inverse style={{ backgroundColor: '#ff9800' }} className="text-right">
                <img width="20%" src={sms} alt="twilog"></img>

                <CardTitle >TWILIO </CardTitle>
                <Button color="secondary" value="Twilio" onClick={this.StausChange}>Check Status</Button>
              </Card>
            </Col>
            <Col sm="2">
              <Card body inverse style={{ backgroundColor: '#bd09dc' }} className="text-right">
                <img width="20%" src={dedicated} alt="mlslog" ></img>
                <CardTitle>MLS</CardTitle>
                <Button color="secondary" value="MLS" onClick={this.StausChange}>Check Status</Button>
                <CardText> </CardText>
              </Card>
            </Col>
            <Col sm="2">
              <Card body inverse style={{ backgroundColor: '#4507b1' }} className="text-right">
                <img width="20%" src={email} alt="" ></img>
                <CardTitle>SENDGRID</CardTitle>
                <Button color="secondary" value="Sendgrid" onClick={this.StausChange}>Check Status</Button>
              </Card>
            </Col>
            <Col sm="2">
              <Card body inverse style={{ backgroundColor: '#f90a8be0' }} className="text-right">
                <Button color="secondary" value="AllServer" onClick={this.checkAllStatus} >Check All Server Status</Button>
            </Card>
            </Col>
          </Row >
          <br />
          <Row>
            <Col >

              <Card >
                <div>

                  <Graph2 data={this.state.data} />
                  <h4 style={{
                    textAlign: "center",
                    marginLeft: "35",
                    marginRight: "-17"
                  }}>{this.state.selectedEnv}</h4>
                   </div>
              </Card>
            </Col>
            {this.state.showMe ?
              <Col >
                <Card >
                  <div>
                    <div id="chart" >
                      <ul>
                        <li style={{ color: 'green', fontSize: '20px' }}>Server is up</li>
                        <li style={{ color: 'red', fontSize: '20px' }}>Server is down</li>
                      </ul>
                      <Chart options={this.state.options} series={this.state.data1} type="pie" height={330} />'
                         <h4 style={{
                        textAlign: "center",
                        marginLeft: "-47px",
                        marginRight: "50px"
                      }} >ALL SERVER STATUS</h4>
                    </div>
                  </div>
                </Card>
              </Col> : null}
           </Row>
           <br />
        </div>
        <div className="animated fadeIn">
          <Footer />
        </div>


      </div >
     );
  }
}
const mapStateToProps = (state) => {
  console.log("store.....", state)
  return {
    data: state.graph.graphs,
  }
}
export default connect(mapStateToProps, { getStatusData })(StatusPage);