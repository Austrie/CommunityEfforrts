
import React, {Component} from "react";
import {Bar, Line} from "react-chartjs-2";
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBlock,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from "reactstrap";

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ],
};

const cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ],
};

const cardChartOpts2 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ],
};

const cardChartOpts3 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }],
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ],
};

const cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6,
    }],
    yAxes: [{
      display: false,
    }]
  }
}

// Social Box Chart
const socialBoxData = [
  {data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook'},
  {data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter'},
  {data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin'},
  {data: [35, 23, 56, 22, 97, 23, 64], label: 'google'}
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      }
    ]
  };
  return () => data;
};

const socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients'
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients'
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews'
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic'
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR'
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate'
  }
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label
      }
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [{
      display: false,
    }],
    yAxes: [{
      display: false,
    }]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  },
  legend: {
    display: false
  }
};

// Main Chart

// convert Hex to RGBA
function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: convertHex(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3
    }
  ]
}

const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false,
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        stepSize: Math.ceil(250 / 5),
        max: 250
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  }
}


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    return (
      <div className="animated fadeIn">

        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Alerts Log
                </CardHeader>
                <CardBlock className="card-body">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Audio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jan 9, 2017</td>
                        <td>3:43PM</td>
                        <td><a><u>Play</u></a></td>
                      </tr>
                      <tr>
                        <td>Feb 13, 2017</td>
                        <td>2:51PM</td>
                        <td><a><u>Play</u></a></td>
                      </tr>
                      <tr>
                        <td>Feb 27, 2017</td>
                        <td>11:50AM</td>
                        <td><a><u>Play</u></a></td>
                      </tr>
                      <tr>
                        <td>Derick Maximinus</td>
                        <td>3:02PM</td>
                        <td><a><u>Play</u></a></td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBlock>
              </Card>
            </Col>
          </Row>



          <Row>
            <Col xs="12" sm="6" md="3">
              <Card>
                <CardHeader>
                  Camera 1
                  <Badge color="success" className="float-right">Active</Badge>
                </CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src={window.location.origin + '/img/surv1.jpg'} />
                </CardBlock>
              </Card>
            </Col>

            <Col xs="12" sm="6" md="3">
              <Card>
                <CardHeader>
                  Camera 2
                  <Badge color="success" className="float-right">Active</Badge>
                </CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src={window.location.origin + '/img/surv2.jpg'} />
                </CardBlock>
              </Card>
            </Col>

            <Col xs="12" sm="6" md="3">
              <Card>
                <CardHeader>
                  Camera 3
                  <Badge color="success" className="float-right">Active</Badge>
                </CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src={window.location.origin + '/img/surv3.jpg'} />
                </CardBlock>
              </Card>
            </Col>


            <Col xs="12" sm="6" md="3">
              <Card>
                <CardHeader>
                  Camera 4
                  <Badge color="success" className="float-right">Active</Badge>
                </CardHeader>
                <CardBlock className="card-body">
                  <img width="100%" src={window.location.origin + '/img/surv4.jpg'} />
                </CardBlock>
              </Card>
            </Col>
          </Row>


          <Row>
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Alerts Log
                  </CardHeader>
                  <CardBlock className="card-body">
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Audio</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Jan 9, 2017</td>
                          <td>3:43PM</td>
                          <td><a><u>Play</u></a></td>
                        </tr>
                        <tr>
                          <td>Feb 13, 2017</td>
                          <td>2:51PM</td>
                          <td><a><u>Play</u></a></td>
                        </tr>
                        <tr>
                          <td>Feb 27, 2017</td>
                          <td>11:50AM</td>
                          <td><a><u>Play</u></a></td>
                        </tr>
                        <tr>
                          <td>March</td>
                          <td>3:02PM</td>
                          <td><a><u>Play</u></a></td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBlock>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xs="12" sm="6" lg="3">
                <Card className="text-white bg-primary">
                  <CardBody className="pb-0">
                    <ButtonGroup className="float-right">
                      <ButtonDropdown id='card1' isOpen={this.state.card1}
                        toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                        <DropdownToggle caret className="p-0" color="transparent">
                          <i className="icon-settings"></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem disabled>Disabled action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </ButtonGroup>
                    <h4 className="mb-0">73</h4>
                    <p>Active ShooterScouts</p>
                  </CardBody>
                  <div className="chart-wrapper px-3" style={{height:'70px'}}>
                    <Line data={cardChartData1} options={cardChartOpts1} height={70}/>
                  </div>
                </Card>
              </Col>

              <Col xs="12" sm="6" lg="3">
                <Card className="text-white bg-info">
                  <CardBody className="pb-0">
                    <ButtonGroup className="float-right">
                      <Dropdown id='card2' isOpen={this.state.card2}
                        toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                        <DropdownToggle className="p-0" color="transparent">
                          <i className="icon-location-pin"></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </ButtonGroup>
                    <h4 className="mb-0">9.823</h4>
                    <p>Members online</p>
                  </CardBody>
                  <div className="chart-wrapper px-3" style={{height:'70px'}}>
                    <Line data={cardChartData2} options={cardChartOpts2} height={70}/>
                  </div>
                </Card>
              </Col>

              <Col xs="12" sm="6" lg="3">
                <Card className="text-white bg-warning">
                  <CardBody className="pb-0">
                    <ButtonGroup className="float-right">
                      <Dropdown id='card3' isOpen={this.state.card3}
                        toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                        <DropdownToggle caret className="p-0" color="transparent">
                          <i className="icon-settings"></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </ButtonGroup>
                    <h4 className="mb-0">9.823</h4>
                    <p>Members online</p>
                  </CardBody>
                  <div className="chart-wrapper px-0" style={{height:'70px'}}>
                    <Line data={cardChartData3} options={cardChartOpts3} height={70}/>
                  </div>
                </Card>
              </Col>

              <Col xs="12" sm="6" lg="3">
                <Card className="text-white bg-danger">
                  <CardBody className="pb-0">
                    <ButtonGroup className="float-right">
                      <ButtonDropdown id='card4' isOpen={this.state.card4}
                        toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                        <DropdownToggle caret className="p-0" color="transparent">
                          <i className="icon-settings"></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </ButtonGroup>
                    <h4 className="mb-0">9.823</h4>
                    <p>Members online</p>
                  </CardBody>
                  <div className="chart-wrapper px-3" style={{height:'70px'}}>
                    <Bar data={cardChartData4} options={cardChartOpts4} height={70}/>
                  </div>
                </Card>
              </Col>
            </Row>


            <Row>
              <Col xs="6" sm="6" lg="3">
                <div className="social-box facebook">
                  <i className="fa fa-facebook"></i>
                  <div className="chart-wrapper">
                    <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={90}/>
                  </div>
                  <ul>
                    <li>
                      <strong>89k</strong>
                      <span>friends</span>
                    </li>
                    <li>
                      <strong>459</strong>
                      <span>feeds</span>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col xs="6" sm="6" lg="3">
                <div className="social-box twitter">
                  <i className="fa fa-twitter"></i>
                  <div className="chart-wrapper">
                    <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90}/>
                  </div>
                  <ul>
                    <li>
                      <strong>973k</strong>
                      <span>followers</span>
                    </li>
                    <li>
                      <strong>1.792</strong>
                      <span>tweets</span>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col xs="6" sm="6" lg="3">

                <div className="social-box linkedin">
                  <i className="fa fa-linkedin"></i>
                  <div className="chart-wrapper">
                    <Line data={makeSocialBoxData(2)} options={socialChartOpts} height={90}/>
                  </div>
                  <ul>
                    <li>
                      <strong>500+</strong>
                      <span>contacts</span>
                    </li>
                    <li>
                      <strong>292</strong>
                      <span>feeds</span>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col xs="6" sm="6" lg="3">
                <div className="social-box google-plus">
                  <i className="fa fa-google-plus"></i>
                  <div className="chart-wrapper">
                    <Line data={makeSocialBoxData(3)} options={socialChartOpts} height={90}/>
                  </div>
                  <ul>
                    <li>
                      <strong>894</strong>
                      <span>followers</span>
                    </li>
                    <li>
                      <strong>92</strong>
                      <span>circles</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>)
        }
      }
export default Dashboard;