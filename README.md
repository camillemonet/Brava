# README

Brava is a webapp which enables users to log their physical exercise through a variety of ways. Through Brava, users are able to:

* Create commonly-followed routes for running and biking
* Create completed activities to keep track of their progress
* Optionally associate an activity with a route depending on the type of exercise

Activities and routes can be updated or deleted if needed, and can be shown in the users' feed or routes index page respectively. 

### Link to live site: 
https://brava-1.herokuapp.com/#/

## What it Uses

React and Redux were used to configure the front-end and create presentational components, while Rails was used to create and order the database. To render the map for the creation and updating of routes, elements of the 'google-maps-react' package were used. Routes were drawn on the maps using the Directions API of Google Maps for Javascript. 

## How it Works

### Creating Routes

As previously mentioned, the 'google-maps-react' package was utilized to render the map for the creation and updating of routes. This package is based on Google Maps Javascript API. After rendering the map, it was discovered that the package allowed for the creation of polylines but not routes that follow the set paths depicted on the map. Therefore, the Google Maps Directions API was incorporated into the code to allow for drawing complex routes on the map which follow predetermined walkways. An example of a directions-based path drawn on the map during the process of creating a route is shown below:

![Create Route Image](https://github.com/camillemonet/images/blob/master/create_route.png)

These routes are comprised of waypoints. These waypoints are represented by the markers on the route in the map. Waypoints must be stored with latitude and longitude coordinates, as well as their specified place in the route. As ordered objects cannot be stored in the rails database, an additional column was added to the waypoints table to store their order in the route. Below is a code snippet of a function used to render the path on the map: 

```javascript
calculateAndDisplayRoute(map) {

    this.state.directionsDisplay.setMap(map);

    let waypoints = this.state.locations.slice();

    let origin = waypoints.shift().location;
    let destination = waypoints.pop().location;

    this.state.directionsService.route({
      origin: origin,
      destination: destination,
      waypoints: waypoints,
      travelMode: 'WALKING'
    }, (response, status) => {
      if (status === 'OK') {
        this.state.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
```

### Deleting Waypoints



