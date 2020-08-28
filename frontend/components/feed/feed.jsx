import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBicycle, FaRunning, FaWater, FaClock, FaDumbbell, FaSkiing,  } from 'react-icons/fa';
import RouteIndexMap from '../route_form/route_index_map_container'

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      something: ''
    }
    this.deleteWorkout = this.deleteWorkout.bind(this);
  }

  componentDidMount() {
    this.props.requestRoutes(this.props.currentUser.id);
    this.props.requestWorkouts(this.props.currentUser.id)
      .then(() => this.setState({ something: 'something' }))
  }

  deleteWorkout(workoutId) {
    return () => { this.props.deleteWorkout(workoutId) }
  }

  latestActivity() {
    if (this.props.workouts.length > 0) {
      let title = this.props.workouts.sort(this.sortByDate)[0].title;
      let date = this.props.workouts.sort(this.sortByDate)[0].date;
      return (
        <div className="feed-profile-latest">
          <div className="feed-profile-latest-label">Latest Activity</div>
          <div className="feed-profile-latest-title">{title}</div>
          <div className="feed-profile-latest-box">&#9632;</div>
          <div className="feed-profile-latest-date">{date.slice(5, 10) + "-" + date.slice(0, 4)}</div>
        </div>
      )
    }
  }

  sortByDate(aa, bb) {

    let a = aa.date;
    let b = bb.date;

    if(parseInt(a.slice(0, 4)) < parseInt(b.slice(0, 4))) {
      return 1;
    } else if (parseInt(b.slice(0, 4)) < parseInt(a.slice(0, 4))) {
      return -1;
    } else {
      if (parseInt(a.slice(5, 7)) < parseInt(b.slice(5, 7))) {
        return 1;
      } else if (parseInt(a.slice(5, 7)) > parseInt(b.slice(5, 7))) {
        return -1;
      } else {
        if (parseInt(a.slice(8, 10)) < parseInt(b.slice(8, 10))) {
          return 1;
        } else if (parseInt(a.slice(8, 10)) > parseInt(b.slice(8, 10))) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  }

  feedEleImage(workout) {
    if (workout.route_id) {
      return(
        <div className="route-index-map-div">
          <RouteIndexMap routeId={workout.route_id} />
        </div>
      )
    } else if (workout.activity_type === "crossfit") {
      return(
        <div className="feed-ele-icon-div">
          <FaDumbbell className="feed-ele-icon"/>
        </div>
      )
    } else if (workout.activity_type === "swim") {
      return (
        <div className="feed-ele-icon-div">
            <FaWater className="feed-ele-icon feed-ele-icon-swim" />
        </div>
      )
    } else if (workout.activity_type === "ski") {
      return(
        <div className="feed-ele-icon-div">
            <FaSkiing classname="feed-ele-icon feed-ele-icon-ski" />
        </div>
      )
    }
  }

  getMapDist(workout) {
    if (workout.route_id) {
      // debugger
      if (this.props.routes[workout.route_id]) {
        return(
          <div className="route-index-map-dist-label">{this.props.routes[workout.route_id].total_distance}mi</div>
        )
      }
    }
  }

  render() {

    let runTimeBar = { '--feed-run-time': this.props.runTime, '--feed-max-time': this.props.maxTime };
    let bikeTimeBar = { '--feed-bike-time': this.props.bikeTime, '--feed-max-time': this.props.maxTime };
    let swimTimeBar = { '--feed-swim-time': this.props.swimTime, '--feed-max-time': this.props.maxTime };
    let otherTimeBar = { '--feed-other-time': this.props.otherTime, '--feed-max-time': this.props.maxTime };

    return(
      <div className="feed-main">
        <div className="feed-main-lhs">
          
          <div className="feed-profile-image"><FaUser className="feed-profile-image-icon" /></div>
          <div className="feed-profile-bar">
            
            <div className="feed-profile-name">{this.props.currentUser.fname} {this.props.currentUser.lname}</div>
            
            <div className="feed-profile-counts">
              <div className="feed-profile-count-routes">
                <div className="feed-profile-count-title">Routes</div>
                <div className="feed-profile-count-num">{this.props.route_ct}</div>
              </div>
              <div className="feed-profile-count-workouts">
                <div className="feed-profile-count-title">Activities</div>
                <div className="feed-profile-count-num">{this.props.workout_ct}</div>
              </div>
            </div>

            {this.latestActivity()}

            <div className="feed-profile-overview-header">TOTALS</div>

            <div className="feed-profile-tot-time">{this.props.totTime.hours}h {this.props.totTime.minutes}m</div>

            <div className="feed-profile-times">

              <div className="feed-profile-time-icon-run">
                <FaRunning className="feed-profile-times-icon" />
                <div style={runTimeBar} className="feed-profile-time-runbar"></div>
                <div className="feed-profile-bar-time">{Math.floor(this.props.runTime/60)}h {this.props.runTime - Math.floor(this.props.runTime / 60)*60}m</div>
              </div>
              <div className="feed-profile-bar-label">Run</div>

              <div style={bikeTimeBar} className="feed-profile-time-icon-bike">
                <FaBicycle className="feed-profile-times-icon" />
                <div className="feed-profile-time-bikebar"></div>
                <div className="feed-profile-bar-time">{Math.floor(this.props.bikeTime / 60)}h {this.props.bikeTime - Math.floor(this.props.bikeTime / 60)*60}m</div>
              </div>
              <div className="feed-profile-bar-label">Bike</div>

              <div style={swimTimeBar} className="feed-profile-time-icon-swim">
                <FaWater className="feed-profile-times-icon" />
                <div className="feed-profile-time-swimbar"></div>
                <div className="feed-profile-bar-time">{Math.floor(this.props.swimTime / 60)}h {this.props.swimTime - Math.floor(this.props.swimTime / 60)*60}m</div>
              </div>
              <div className="feed-profile-bar-label">Swim</div>

              <div style={otherTimeBar} className="feed-profile-time-icon-other">
                <FaClock className="feed-profile-times-icon" />
                <div className="feed-profile-time-otherbar"></div>
                <div className="feed-profile-bar-time">{Math.floor(this.props.otherTime / 60)}h {this.props.otherTime - Math.floor(this.props.otherTime / 60)*60}m</div>
              </div>
              <div className="feed-profile-bar-label">Other</div>

            </div>

            <div className="feed-profile-tot-distance">Distance Traveled: {this.props.totalDistance}mi</div>

          </div>
        </div>
        <div className="feed-main-rhs">
          {
            this.props.workouts.sort(this.sortByDate).map((workout, idx) => {
              return(

                <div key={idx} className="feed-activity-ele">
                  
                  <div className="feed-activity-ele-lhs">

                    <div className="feed-activity-ele-title">
                    <div key={idx}>{workout.title}
                        <div className="feed-activity-ele-title-type">
                          {workout.activity_type} &#9642; {workout.date.slice(5, 10) + "-" + workout.date.slice(0, 4)} &#9642; {Math.floor(workout.duration / 60)}h {workout.duration - Math.floor(workout.duration / 60) * 60}m
                        </div>
                    </div>
                    </div>

                    { workout.description ? <div className="feed-activity-ele-description">{workout.description}</div> : null }

                    <div className="feed-activity-ele-edit-div">
                      <Link className="feed-activity-ele-edit" to={`/activities/update/${workout.id}`}>Edit Workout</Link>
                    </div>

                    <div className="feed-activity-ele-del-div">
                      <button className="feed-activity-ele-del" onClick={this.deleteWorkout(workout.id)}>Delete Workout</button>
                    </div>

                  </div>

                  <div className="feed-activity-ele-rhs">
                    {this.feedEleImage(workout)}
                    {this.getMapDist(workout)}
                  </div>

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