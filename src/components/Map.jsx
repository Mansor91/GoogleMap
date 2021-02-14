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
        <Marker key={1}
            position={{ lat: 31.2519153, lng: 34.7602093}}
            onClick={() => props.selectMarker(1)}
        >
        {props.showArr[0].show && (
            <InfoWindow>
                <div style={{width: 200, height: 200}}>
                    <h1>Phone store</h1>
                    <p>Be'er sheva 53208</p>
                    <img src={img1} alt="" width="150"/>
                </div>
            </InfoWindow>
        )}
        </Marker>

        <Marker key={2}
            position={{ lat: 30.2519153, lng: 37.7602093}}
            onClick={() => props.selectMarker(2)}
        >
        {props.showArr[1].show && (
            <InfoWindow>
                <div style={{width: 200, height: 200}}>
                    <h1>Phone store2</h1>
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
            showArr : [{id:1, show:false},{id:2, show:false}]
        }
    }

    selectMarker = (id) => {
       
        let tmpArr = [...this.state.showArr]
        for (const marker of tmpArr) {
            if (id === marker.id) {
                marker.show = !marker.show
            }
        }
        this.setState({ showArr : tmpArr })
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
                    showArr = {this.state.showArr}
                    selectMarker = {this.selectMarker}
                />
            </div>
        )
    }
}