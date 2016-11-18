// eslint-disable-next-line
import React, {Component, PropTypes} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AndroidIcon from 'material-ui/svg-icons/hardware/phone-android'


const chartData = [
  {name: '0ヶ月目', docomo: 0, simFree: 2400, amt: 2400},
  {name: '12ヶ月目', docomo: 4000, simFree: 2400, amt: 2400},
  {name: '24ヶ月目', docomo: 4000, simFree: 2400, amt: 2400},
  {name: '36ヶ月目', docomo: 3000, simFree: 1398, amt: 2210},
  {name: '48ヶ月目', docomo: 2000, simFree: 9800, amt: 2290},
];

class PaymentChart extends Component {
  
  //cst for constructor
  //sfc for stateless functional component
  constructor(props) {
    super(props);
    this.state = {open: this.props.open};
  }
  
  handleOpen = () => {
    this.setState({open: true});
    console.log(this.state)
    console.log(this.props.form)
  };
  
  handleClose = () => {
    this.setState({open: false});
    console.log(this.state)
  };
  
  
  render() {
    
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];
    
    return (
      <MuiThemeProvider>
        <div className="chart">
          <RaisedButton
            onTouchTap={this.handleOpen}
            label="Submit"
            labelPosition="before"
            primary={true}
            icon={<AndroidIcon/>}
            style={{marginLeft: "18px"}}
          />
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
            
            <LineChart width={600} height={300} data={chartData}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Line type="monotone" dataKey="simFree" stroke="#8884d8" activeDot={{r: 8}}/>
              <Line type="monotone" dataKey="docomo" stroke="#82ca9d"/>
            </LineChart>
          
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

PaymentChart.propTypes = {};
PaymentChart.defaultProps = {};

export default PaymentChart;

