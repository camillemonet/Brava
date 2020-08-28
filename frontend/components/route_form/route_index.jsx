import React from 'react';
import { Link } from 'react-router-dom';
import RouteIndexMap from './route_index_map_container';

class RouteIndex extends React.Component {

  constructor(props) {
    super(props);

    this.deleteRoute = this.deleteRoute.bind(this);
  }

  deleteRoute(routeId) {
    return () => {
      this.props.deleteRoute(routeId)
    }
  }

  componentDidMount() {
    this.props.requestRoutes(this.props.currentUser.id);
  }

  render() {
    let routesArr = Object.values(this.props.routes);
    
    if (this.props.routes === {}) {
      return null
    }

    return(
      <div>
        <div className="route-index-page">
          {routesArr.reverse().map((route, idx) => (
            <div key={idx+routesArr.length+routesArr.length+2} className="route-index-ele">

              <div className="route-index-map-div">
                <RouteIndexMap routeId={route.id}/>
              </div>

              <h2 key={6*(routesArr.length)+idx+6} className="route-index-title-h2">
                <div key={3 * (routesArr.length) + idx + 3} className="route-index-title">{route.title}</div>
              </h2>

              <div className="route-index-dis-edit" key={4*(routesArr.length)+idx+4}>
                <div className="route-index-dis" key={5*(routesArr.length)+idx+5}>{route.total_distance}mi</div>
                <Link to={`/routes/update/${route.id}`} className="route-index-edit-link" key={idx}>Edit</Link>
              </div>

              <button className="route-index-delete-btn" onClick={this.deleteRoute(route.id)} key={idx+routesArr.length+1}>
                Delete Route</button>
                
            </div>)
            )
          }
        </div>
      </div>
    )
  }
}

export default RouteIndex;

// { (routesArr.length > 9) ? <button onClick={this.loadMore}>Load More Routes</button> : null }