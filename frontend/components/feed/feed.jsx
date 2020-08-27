import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

class Feed extends React.Component {

  constructor(props) {
    super(props);

    this.deleteWorkout = this.deleteWorkout.bind(this);
  }

  componentDidMount() {
    this.props.requestRoutes(this.props.currentUser.id);
    this.props.requestWorkouts(this.props.currentUser.id);
  }

  deleteWorkout(workoutId) {
    return () => { this.props.deleteWorkout(workoutId) }
  }

  render() {

    return(
      <div className="feed-main">
        <div className="feed-main-lhs">
          <div className="feed-profile-image"><FaUser className="feed-profile-image-icon" /></div>
          <div className="feed-profile-bar">
            <div className="feed-profile-name">{this.props.currentUser.fname} {this.props.currentUser.lname}</div>
          </div>
        </div>
        <div className="feed-main-rhs">
          {
            this.props.workouts.map((workout, idx) => {
              return(
                <div key={idx}>
                  <div key={idx}>{workout.title}</div>
                  <Link to={`/activities/update/${workout.id}`}>Edit Workout</Link>
                  <button onClick={this.deleteWorkout(workout.id)}>Delete Workout</button>
                </div>
              )
            }) 
          }
        </div>
      </div>
    )
  }

}

export default Feed;