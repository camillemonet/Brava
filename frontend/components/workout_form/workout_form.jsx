import React from 'react';

class WorkoutForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.props.workout;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestWorkouts(this.props.currentUser.id);
    this.props.requestRoutes(this.props.currentUser.id);
    this.setState({ user_id: this.props.currentUser.id });
  }

  update(field) {
    return (e) => { this.setState({ [field] : e.currentTarget.value }) }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.push("/feed"));
  }

  routeChoices() {
    return(
      <select className="workout-form-select-route" value={this.state.route_id} onChange={this.update("route_id")}>
        <option value="" disabled>Route</option>
        {
          this.props.routes.map((route, idx) => {
            return (
              <option key={idx} value={route.id}>{route.title}</option>
            )
          })
        }
      </select>
    )
  }

  runTypes() {
    return(
      <select className="workout-form-select-run" value={this.state.run_type} onChange={this.update("run_type")} name="run_type">
        <option value="" disabled>Run Type</option>
        <option value="race">Race</option>
        <option value="long run">Long Run</option>
        <option value="workout">Workout</option>
      </select>
    )
  }

  render() {
    
    if (this.state === null) {
      return null
    }

    return(
      <div className="workout-form-main">

        <h2 className="workout-form-header">{this.props.headerText}</h2>

        <form className="workout-form" onSubmit={this.handleSubmit}>
        
          <div className="workout-form-field-duration">
            <div className="workout-form-input-label">Duration (min):</div>
            <input type="number" value={this.state.duration} onChange={this.update("duration")}/>
          </div>

          <div className="workout-form-field-elevation">
            <div className="workout-form-input-label">Elevation (feet):</div>
            <input type="number" value={this.state.elevation} onChange={this.update("elevation")} />
          </div>

          <div className="workout-form-field-title">
            <div className="workout-form-input-label">Title:</div>
            <input type="text" value={this.state.title} onChange={this.update("title")} />
          </div>

          <div className="workout-form-field-description">
            <div className="workout-form-input-label">Description:</div>
            <input type="textarea" value={this.state.description} onChange={this.update("description")} />
          </div>

          <div className="workout-form-field-activity">
            <select value={this.state.activity_type} onChange={this.update("activity_type")} name="activity_type"> 
              <option value="" disabled>Workout Type</option>
              <option value="ride">Ride</option>
              <option value="run">Run</option>
              <option value="swim">Swim</option>
              <option value="hike">Hike</option>
              <option value="walk">Walk</option>
              <option value="ski">Ski</option>
              <option value="crossfit">Crossfit</option>
            </select>
          </div>

          { (this.state.activity_type === "run" || this.state.activity_type === "ride" || 
          this.state.activity_type === "hike" || this.state.activity_type === "walk") ? this.routeChoices() : <div></div> }

          { (this.state.activity_type === "run") ? this.runTypes() : <div></div> }

          <div className="workout-form-field-date">
            <div className="workout-form-input-label">Date & Time:</div>
            <input type="date" value={this.state.date} onChange={this.update("date")} />
            <input type="time" value={this.state.time} onChange={this.update("time")} />
          </div>

          <button className="workout-form-submit" type="submit">Submit</button>
        
        </form>

      </div>
    )
  }
}

export default WorkoutForm;