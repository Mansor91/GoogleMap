import React from 'react'
import {GoogleMap , InfoWindow, Marker , withGoogleMap , withScriptjs} from 'react-google-maps';
import img1 from "./Samsung_S21-1.png"

const MyGoogleMap = withScriptjs(
    withGoogleMap(
        props => (
        <GoogleMap
            defaultZoom={14}
                defaultCenter={{ lat: 31.2519153, lng: 34.7602093}}
        >
        <Marker key={"Marker1"}
            position={{ lat: 31.2519153, lng: 34.7602093}}
            onClick={(e) => props.selectMarker(e)}
        >
        {props.show && (
            <InfoWindow>
                <div style={{width: 200, height: 200}}>
                    <h1>Phone store</h1>
                    <p>Be'er sheva 53208</p>
                    <img src={img1} alt="" width="150"/>
                </div>
            </InfoWindow>
        )}
        </Marker>
        </GoogleMap>
        )
    )
)


export default class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            show : false,
            selectedMarker : null
        }
    }
    selectMarker = (marker) => {
        this.setState({ show : !this.state.show })
        //console.log(marker)
        //this.setState({ selectedMarker: event.target})
    }
    render() {
        return (
            <div>
                <h1>My google map</h1>
                <MyGoogleMap
                    loadingElement={<div>Loading....</div>}
                    containerElement={<div style={{height: '100%'}} className="map"></div>}
                    mapElement={<div style={{height: '1000px'}} className="inner-map"></div>}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVtHhDa2ErB1UuzEc1t3dXozBGaSHiQZk&v=3.exp&libraries=geometry,drawing,places"
                    show = {this.state.show}
                    selectMarker = {this.selectMarker}
                />
            </div>
        )
    }
}




// const Marker = props => (
//     <React.Fragment>
//       <div
//         style={{
//           border: "5px solid white",
//           borderRadius: 20,
//           height: 20,
//           width: 20
//         }}
//       />
//       {/* Below is info window component */}
//       {props.show && (
//         <div
//           style={{
//             width: 100,
//             height: 100
//           }}
//         >Info window</div>
//       )}
//     </React.Fragment>
//   )
  
//   export default class Map extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         center: {
//           lat: 31.2519153,
//           lng: 34.7602093
//         },
//         zoom: 17,
//         show: false
//       }
//     }
  
//     _onChildClick = (key, childProps) => {
//       this.setState({show: !this.state.show})
//     }
  
//     render() {
//       return (
//         <div style={{height: "100vh", width: "100%"}}>
//           <GoogleMapReact
//             bootstrapURLKeys={{key: 'AIzaSyBVtHhDa2ErB1UuzEc1t3dXozBGaSHiQZk'}}
//             defaultCenter={this.state.center}
//             defaultZoom={this.state.zoom}
//             onChildClick={this._onChildClick}>
//             <Marker
//               lat={31.2519153}
//               lng={34.7602093}
//               show={this.state.show}
//             />
//           </GoogleMapReact>
//         </div>
//       )
//     }
//   }