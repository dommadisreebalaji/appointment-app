// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointmentList: [], title: '', date: ''}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  updateStar = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  getStarredAppointmentList = () => {
    const {appointmentList} = this.state
    const filteredList = appointmentList.filter(each => each.isStarred === true)
    this.setState({appointmentList: filteredList})
  }

  render() {
    const {appointmentList, title, date} = this.state
    return (
      <div className="container">
        <div className="appointment-card">
          <div className="appointment-container">
            <div className="add-appointment-container">
              <h1 className="heading">Add Appointment</h1>
              <form className="input-form" onSubmit={this.onAddAppointment}>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  value={title}
                  className="input"
                  id="title"
                  placeholder="Title"
                  onChange={this.onChangeTitle}
                />
                <label htmlFor="date" className="label">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  className="input"
                  id="date"
                  onChange={this.onChangeDate}
                />
                <button className="button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="image"
              />
            </div>
          </div>
          <div className="appointments-list-container">
            <div className="button-container">
              <h1 className="heading">Appointments</h1>
              <button
                className="button-starred"
                type="button"
                onClick={this.getStarredAppointmentList}
              >
                Starred
              </button>
            </div>
            <ul className="list-items">
              {appointmentList.map(each => (
                <AppointmentItem
                  list={each}
                  key={each.id}
                  updateStar={this.updateStar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
