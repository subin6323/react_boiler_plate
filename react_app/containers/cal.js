import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

import './main.scss'

export default class DemoApp extends React.Component {
  constructor(props){
    super(props)
    this.calendarComponentRef = React.createRef()
    this.handleScroll=this.handleScroll.bind(this)
    this.state = {
      calendarWeekends: true,
      calendarEvents: [ // initial event data
        { title: 'Event Now', start: new Date() }
      ]
    }

  }
  handleScroll(){

  }
  componentDidMount() {
    console.log("this.calendarComponentRef-->",this.calendarComponentRef.current)
   this.calendarComponentRef.current.elRef.addEventListener("scroll", () => {
   //  console.log("this.refs.calendarComponentRef.scrollTop-->",this.refs.calendarComponentRef.scrollTop)
   //  console.log("this.refs.calendarComponentRef.clientHeight-->",this.refs.calendarComponentRef.clientHeight)
   //  console.log("this.refs.calendarComponentRef.scrollHeight-->",this.refs.calendarComponentRef.scrollHeight)
   //   // if (
   //   //   this.refs.calendarComponentRef.scrollTop + this.refs.calendarComponentRef.clientHeight >=
   //   //   this.refs.calendarComponentRef.scrollHeight
   //   // ) {
   //   //   this.loadMoreItems();
   //   // }
   });
  //this.calendarComponentRef.current.addEventListener("scroll",this.handleScroll)
}
  render() {

    return (
      <div className='demo-app'>
        <div className='demo-app-top'>
          <button onClick={ this.toggleWeekends }>toggle weekends</button>&nbsp;
          <button onClick={ this.gotoPast }>go to a date in the past</button>&nbsp;
          (also, click a date/time to add an event)
        </div>
        <div className='demo-app-calendar'>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
            ref={ this.calendarComponentRef }
            weekends={ this.state.calendarWeekends }
            events={ this.state.calendarEvents }
            dateClick={ this.handleDateClick }
            contentHeight={200}
            />
        </div>
      </div>
    )
  }

  toggleWeekends = () => {
    this.setState({ // update a property
      calendarWeekends: !this.state.calendarWeekends
    })
  }

  gotoPast = () => {
    console.log("this.calendarComponentRef.current-->",this.calendarComponentRef.current)
    let calendarApi = this.calendarComponentRef.current.getApi()
    calendarApi.next() // call a method on the Calendar object
  }

  handleDateClick = (arg) => {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.setState({  // add new event data
        calendarEvents: this.state.calendarEvents.concat({ // creates a new array
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
      })
    }
  }

}