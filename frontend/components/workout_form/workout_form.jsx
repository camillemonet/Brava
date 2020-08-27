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
    this.setState({user_id: this.props.currentUser.id})
  }

  update(field) {
    return (e) => { this.setState({ [field] : e.currentTarget.value }) }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  runTypes() {
    return(
      <select value={this.state.run_type} onChange={this.update("run_type")} name="run_type">
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

        <h1 className="workout-form-header">{this.props.headerText}</h1>

        <form className="workout-form" onSubmit={this.handleSubmit}>
        
          <label>Duration:
            <input type="number" value={this.state.duration} onChange={this.update("duration")}/>
          </label>

          <select value={this.state.activity_type} onChange={this.update("activity_type")} name="activity_type"> 
            <option value="" disabled>Workout Type</option>
            <option value="ride">Ride</option>
            <option value="run">Run</option>
            <option value="swim">Swim</option>
            <option value="hike">Hike</option>
            <option value="walk">Walk</option>
            <option value="ski">Ski</option>
            <option value="crossfit">Crossfit</option>
            <option value="yoga">Yoga</option>
          </select>

          <select value={this.state.route_id} onChange={this.update("route_id")}>
            <option value="" disabled>Route</option>
            {
              this.props.routes.map((route, idx) => {
                return(
                  <option key={idx} value={route.id}>{route.title}</option>
                )
              })
            }
          </select>

          { (this.state.activity_type === "run") ? this.runTypes() : null }

          <label>Elevation:
            <input type="number" value={this.state.elevation} onChange={this.update("elevation")} />
          </label>

          <label>Title:
            <input type="text" value={this.state.title} onChange={this.update("title")} />
          </label>

          <label>Description: 
            <input type="textarea" value={this.state.description} onChange={this.update("description")}/>
          </label>

          <label>Date:
            <input type="date" value={this.state.date} onChange={this.update("date")} />
          </label>

          <label>Time:
            <input type="time" value={this.state.time} onChange={this.update("time")} />
          </label>

          <button type="submit">Submit</button>
        
        </form>

      </div>
    )
  }
}

export default WorkoutForm;