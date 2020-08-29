/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// JavaScript library that creates a callendar with events
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Modal,
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
// core components

import { events } from "variables/general.js";

let calendar;

class CalendarView extends React.Component {
  state = {
    events: events,
    alert: null
  };
  componentDidMount() {
    this.createCalendar();
  }
  createCalendar = () => {
    calendar = new Calendar(this.refs.calendar, {
      plugins: [interaction, dayGridPlugin],
      defaultView: "dayGridMonth",
      selectable: true,
      selectHelper: true,
      editable: true,
      events: this.state.events,
      // Add new event
      select: info => {
        this.setState({
          modalAdd: true,
          startDate: info.startStr,
          endDate: info.endStr,
          radios: "bg-info"
        });
      },
      // Edit calendar event action
      eventClick: ({ event }) => {
        this.setState({
          modalChange: true,
          eventId: event.id,
          eventTitle: event.title,
          eventDescription: event.extendedProps.description,
          radios: "bg-info",
          event: event
        });
      }
    });
    calendar.render();
    this.setState({
      currentDate: calendar.view.title
    });
  };
  changeView = newView => {
    calendar.changeView(newView);
    this.setState({
      currentDate: calendar.view.title
    });
  };
  addNewEvent = () => {
    var newEvents = this.state.events;
    newEvents.push({
      title: this.state.eventTitle,
      start: this.state.startDate,
      end: this.state.endDate,
      className: this.state.radios,
      id: this.state.events[this.state.events.length - 1] + 1
    });
    calendar.addEvent({
      title: this.state.eventTitle,
      start: this.state.startDate,
      end: this.state.endDate,
      className: this.state.radios,
      id: this.state.events[this.state.events.length - 1] + 1
    });
    this.setState({
      modalAdd: false,
      events: newEvents,
      startDate: undefined,
      endDate: undefined,
      radios: "bg-info",
      eventTitle: undefined
    });
  };
  changeEvent = () => {
    var newEvents = this.state.events.map((prop, key) => {
      if (prop.id + "" === this.state.eventId + "") {
        this.state.event.remove();
        calendar.addEvent({
          ...prop,
          title: this.state.eventTitle,
          className: this.state.radios,
          description: this.state.eventDescription
        });
        return {
          ...prop,
          title: this.state.eventTitle,
          className: this.state.radios,
          description: this.state.eventDescription
        };
      } else {
        return prop;
      }
    });
    this.setState({
      modalChange: false,
      events: newEvents,
      radios: "bg-info",
      eventTitle: undefined,
      eventDescription: undefined,
      eventId: undefined,
      event: undefined
    });
  };
  deleteEventSweetAlert = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          warning
          style={{ display: "block", marginTop: "-100px" }}
          title="Are you sure?"
          onConfirm={() =>
            this.setState({
              alert: false,
              radios: "bg-info",
              eventTitle: undefined,
              eventDescription: undefined,
              eventId: undefined
            })
          }
          onCancel={() => this.deleteEvent()}
          confirmBtnCssClass="btn-secondary"
          cancelBtnBsStyle="danger"
          confirmBtnText="Cancel"
          cancelBtnText="Yes, delete it"
          showCancel
          btnSize=""
        >
          You won't be able to revert this!
        </ReactBSAlert>
      )
    });
  };
  deleteEvent = () => {
    var newEvents = this.state.events.filter(
      prop => prop.id + "" !== this.state.eventId
    );
    this.state.event.remove();
    this.setState({
      alert: (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Success"
          onConfirm={() => this.setState({ alert: null })}
          onCancel={() => this.setState({ alert: null })}
          confirmBtnBsStyle="primary"
          confirmBtnText="Ok"
          btnSize=""
        >
          A few words about this sweet alert ...
        </ReactBSAlert>
      ),
      modalChange: false,
      events: newEvents,
      radios: "bg-info",
      eventTitle: undefined,
      eventDescription: undefined,
      eventId: undefined,
      event: undefined
    });
  };
  render() {
    return (
      <>
        {this.state.alert}
        <div className="header header-dark bg-info pb-6 content__title content__title--calendar">
          <Container fluid>
            <div className="header-body">
              <Row className="align-items-center py-4">
                <Col lg="6">
                  <h6 className="fullcalendar-title h2 text-white d-inline-block mb-0 mr-1">
                    {this.state.currentDate}
                  </h6>
                  <Breadcrumb
                    className="d-none d-md-inline-block ml-lg-4"
                    listClassName="breadcrumb-links breadcrumb-dark"
                  >
                    <BreadcrumbItem>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="fas fa-home" />
                      </a>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Dashboard
                      </a>
                    </BreadcrumbItem>
                    <BreadcrumbItem aria-current="page" className="active">
                      Calendar
                    </BreadcrumbItem>
                  </Breadcrumb>
                </Col>
                <Col className="mt-3 mt-md-0 text-md-right" lg="6">
                  <Button
                    className="fullcalendar-btn-prev btn-neutral"
                    color="default"
                    onClick={() => {
                      calendar.next();
                    }}
                    size="sm"
                  >
                    <i className="fas fa-angle-left" />
                  </Button>
                  <Button
                    className="fullcalendar-btn-next btn-neutral"
                    color="default"
                    onClick={() => {
                      calendar.prev();
                    }}
                    size="sm"
                  >
                    <i className="fas fa-angle-right" />
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="default"
                    data-calendar-view="month"
                    onClick={() => this.changeView("dayGridMonth")}
                    size="sm"
                  >
                    Month
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="default"
                    data-calendar-view="basicWeek"
                    onClick={() => this.changeView("dayGridWeek")}
                    size="sm"
                  >
                    Week
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="default"
                    data-calendar-view="basicDay"
                    onClick={() => this.changeView("dayGridDay")}
                    size="sm"
                  >
                    Day
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card className="card-calendar">
                <CardHeader>
                  <h5 className="h3 mb-0">Calendar</h5>
                </CardHeader>
                <CardBody className="p-0">
                  <div
                    className="calendar"
                    data-toggle="calendar"
                    id="calendar"
                    ref="calendar"
                  />
                </CardBody>
              </Card>
              <Modal
                isOpen={this.state.modalAdd}
                toggle={() => this.setState({ modalAdd: false })}
                className="modal-dialog-centered modal-secondary"
              >
                <div className="modal-body">
                  <form className="new-event--form">
                    <FormGroup>
                      <label className="form-control-label">Event title</label>
                      <Input
                        className="form-control-alternative new-event--title"
                        placeholder="Event Title"
                        type="text"
                        onChange={e =>
                          this.setState({ eventTitle: e.target.value })
                        }
                      />
                    </FormGroup>
                    <FormGroup className="mb-0">
                      <label className="form-control-label d-block mb-3">
                        Status color
                      </label>
                      <ButtonGroup
                        className="btn-group-toggle btn-group-colors event-tag"
                        data-toggle="buttons"
                      >
                        <Button
                          className={classnames("bg-info", {
                            active: this.state.radios === "bg-info"
                          })}
                          color=""
                          type="button"
                          onClick={() => this.setState({ radios: "bg-info" })}
                        />
                        <Button
                          className={classnames("bg-warning", {
                            active: this.state.radios === "bg-warning"
                          })}
                          color=""
                          type="button"
                          onClick={() =>
                            this.setState({ radios: "bg-warning" })
                          }
                        />
                        <Button
                          className={classnames("bg-danger", {
                            active: this.state.radios === "bg-danger"
                          })}
                          color=""
                          type="button"
                          onClick={() => this.setState({ radios: "bg-danger" })}
                        />
                        <Button
                          className={classnames("bg-success", {
                            active: this.state.radios === "bg-success"
                          })}
                          color=""
                          type="button"
                          onClick={() =>
                            this.setState({ radios: "bg-success" })
                          }
                        />
                        <Button
                          className={classnames("bg-default", {
                            active: this.state.radios === "bg-default"
                          })}
                          color=""
                          type="button"
                          onClick={() =>
                            this.setState({ radios: "bg-default" })
                          }
                        />
                        <Button
                          className={classnames("bg-primary", {
                            active: this.state.radios === "bg-primary"
                          })}
                          color=""
                          type="button"
                          onClick={() => {
                            this.setState({ radios: "bg-primary" });
                          }}
                        />
                      </ButtonGroup>
                    </FormGroup>
                  </form>
                </div>
                <div className="modal-footer">
                  <Button
                    className="new-event--add"
                    color="primary"
                    type="button"
                    onClick={this.addNewEvent}
                  >
                    Add event
                  </Button>
                  <Button
                    className="ml-auto"
                    color="link"
                    type="button"
                    onClick={() => this.setState({ modalAdd: false })}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
              <Modal
                isOpen={this.state.modalChange}
                toggle={() => this.setState({ modalChange: false })}
                className="modal-dialog-centered modal-secondary"
              >
                <div className="modal-body">
                  <Form className="edit-event--form">
                    <FormGroup>
                      <label className="form-control-label">Event title</label>
                      <Input
                        className="form-control-alternative edit-event--title"
                        placeholder="Event Title"
                        type="text"
                        defaultValue={this.state.eventTitle}
                        onChange={e =>
                          this.setState({ eventTitle: e.target.value })
                        }
                      />
                    </FormGroup>
                    <FormGroup>
                      <label className="form-control-label d-block mb-3">
                        Status color
                      </label>
                      <ButtonGroup
                        className="btn-group-toggle btn-group-colors event-tag mb-0"
                        data-toggle="buttons"
                      >
                        <Button
                          className={classnames("bg-info", {
                            active: this.state.radios === "bg-info"
                          })}
                          color=""
                          type="button"
                          onClick={() => this.setState({ radios: "bg-info" })}
                        />
                        <Button
                          className={classnames("bg-warning", {
                            active: this.state.radios === "bg-warning"
                          })}
                          color=""
                          type="button"
                          onClick={() =>
                            this.setState({ radios: "bg-warning" })
                          }
                        />
                        <Button
                          className={classnames("bg-danger", {
                            active: this.state.radios === "bg-danger"
                          })}
                          color=""
                          type="button"
                          onClick={() => this.setState({ radios: "bg-danger" })}
                        />
                        <Button
                          className={classnames("bg-success", {
                            active: this.state.radios === "bg-success"
                          })}
                          color=""
                          type="button"
                          onClick={() =>
                            this.setState({ radios: "bg-success" })
                          }
                        />
                        <Button
                          className={classnames("bg-default", {
                            active: this.state.radios === "bg-default"
                          })}
                          color=""
                          type="button"
                          onClick={() =>
                            this.setState({ radios: "bg-default" })
                          }
                        />
                        <Button
                          className={classnames("bg-primary", {
                            active: this.state.radios === "bg-primary"
                          })}
                          color=""
                          type="button"
                          onClick={() => {
                            this.setState({ radios: "bg-primary" });
                          }}
                        />
                      </ButtonGroup>
                    </FormGroup>
                    <FormGroup>
                      <label className="form-control-label">Description</label>
                      <Input
                        className="form-control-alternative edit-event--description textarea-autosize"
                        placeholder="Event Desctiption"
                        type="textarea"
                        defaultValue={this.state.eventDescription}
                        onChange={e =>
                          this.setState({ eventDescription: e.target.value })
                        }
                      />
                      <i className="form-group--bar" />
                    </FormGroup>
                    <input className="edit-event--id" type="hidden" />
                  </Form>
                </div>
                <div className="modal-footer">
                  <Button color="primary" onClick={this.changeEvent}>
                    Update
                  </Button>
                  <Button
                    color="danger"
                    onClick={() =>
                      this.setState({ modalChange: false }, () =>
                        this.deleteEventSweetAlert()
                      )
                    }
                  >
                    Delete
                  </Button>
                  <Button
                    className="ml-auto"
                    color="link"
                    onClick={() => this.setState({ modalChange: false })}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default CalendarView;
