import React, { Component } from 'react';
import firebase from "../../javascript/firebase/firebase-setup";
import {CSVLink, CSVDownload} from 'react-csv';


import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

class Reports extends Component {

  constructor(props) {
    super(props);

    this.state = {
      csvData: [],
      items: [],
      page: 1
    }
  }

  getItems() {
    var ref = firebase.database().ref('temp2higher/reports');
    ref.once('value', snapshot => {
      let values = snapshot.val()
      console.log(values)
      let items = []
      for (let key in values) {
        items.push(values[key])
      }
      items.sort((a, b) => {
        if (a.time > b.time) {
          return 1;
        } else if (a.time < b.time) {
          return -1;
        }
        return 0;
      })
      console.log("Get Items Called: ", items)
      this.setState({items}, () => {
        this.setCSVObject()
      })
    });
  }

  setCSVObject() {
    const csvData = this.state.items.map((value) => {
      return [value.name, JSON.stringify(value.time), value.address, value.additional_information, JSON.stringify(value.type), value.status]
    })

    csvData.unshift(["Name", "Time", "Address", "Additional Information", "Type", "Status"])
    print("CSV: ", csvData)

    this.setState({csvData})
  }

  setPage(num) {
    this.setState({page: num})
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <div>
        <CSVLink data={this.state.csvData}>Download me</CSVLink>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> <strong>List of Reports</strong> (By Date)
          </CardHeader>
          <CardBody>
            <Table hover bordered striped responsive size="sm">
              <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Address</th>
                <th>Additional Information</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
              </thead>
              <tbody>
                {console.log("Render called: ", this.state)}
              {this.state.items.map((value) => {
                console.log("Map called: ", value)
                return (
                  <tr>
                    <td>{value.name}</td>
                    <td>{(new Date(value.time)).toLocaleDateString()}</td>
                    <td>{value.address}</td>
                    <td>{value.additional_information}</td>
                    <td>{value.type}</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                )
              })}

              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Reports;
