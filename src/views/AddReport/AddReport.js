import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import firebase from "../../javascript/firebase/firebase-setup";
import {geolocated} from 'react-geolocated';
import Geocode from "react-geocode";

class AddReport extends Component {

  constructor(props) {
    super(props)
    Geocode.setApiKey("AIzaSyDAPQZ7tiK4gG1zZ3TX1Q4GArhuS0mnays");
    Geocode.enableDebug();
    this.state = {
      open: false,
      name: "",
      address: "",
      additional_information: "",
      type: 0,
      ...props
    };
  }

  componentDidMount() {
    console.log("THIS STATE: ", this.state)
    try {
      Geocode.fromLatLng(this.state.coords.longitude, this.state.coords.latitude)
        .then(response => {
          const address = response.results[0].formatted_address;
          console.log(address);
          this.setState({address});
        },
        error => {
          console.error(error);
        }
      );
    } catch(err) {
      console.log(err)
    }
  }

  handleOpenModal = () => {
    this.setState({ open: true});
  }

  handleCloseModal = () => {
    this.setState({ open: false });
  }

  routeHome = () => {
    this.state.history.push('/some/path')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.name == "" || this.state.address == "" ||
      this.state.additional_information == "" || this.state.type == "0") {
        this.handleOpenModal();
      } else {
        const ref = firebase.database().ref('temp2higher/reports')
        const report = {
          name: this.state.name,
          address: this.state.address,
          additional_information: this.state.additional_information,
          type: this.state.type,
          time: Date.now(),
          state: "0"
        }
        console.log(ref)
        ref.push(report, this.routeHome);

      }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Modal open={this.state.open} onClose={this.handleCloseModal} little>
          <h2>Some fields were not answered!</h2>
        </Modal>
        <Card>
          <CardHeader>
            <strong>Submit a Report</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="name">Name</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="text-input" name="name" placeholder="John Doe" text={this.state.address} onChange={this.handleChange}/>
                  <FormText color="muted">Your name: John Doe</FormText>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="address">Address</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="text-input" name="address" onChange={this.handleChange} placeholder="1234 Sunroad Apt 204, Cleveland, Ohio 44101"/>
                  <FormText color="muted">The address of the location being reported: 1234 Sunroad Apt 204, Cleveland, Ohio 44101</FormText>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="additional_information">Additonal Information</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="textarea" onChange={this.handleChange} name="additional_information" id="textarea-input" rows="9"
                         placeholder="Any additional information..."/>
                </Col>
              </FormGroup>


              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="type">Type of Report</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input onChange={this.handleChange} type="select" name="type" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Abandoned House</option>
                    <option value="2">Pot Hole</option>
                    <option value="3">Streetlight</option>
                    <option value="4">Other</option>
                  </Input>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <Button type="submit" size="sm" color="primary" onClick={this.handleSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    userDecisionTimeout: 5000
  }
})(AddReport);
