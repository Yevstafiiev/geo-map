import React, { Component } from 'react'
import Map from './Map/Map'
import Marker from './Map/Marker'

export default class MarkerLabel extends Component {
  state = {
    zoom: 13,
    center: [54.98, 82.89],
    markers: [],
    pos: [54.98, 82.89],
    staticLabel: false,
    labelContent: ''
  };

  onChangePos = e => {
    this.setState({
      pos: e.target.value.split(',')
    });
  };

  onChangeStaticLabel = () => {
    this.setState({
      staticLabel:!this.state.staticLabel
    });
  };

  onChangeLabelContent = e => {
    this.setState({
      labelContent: e.target.value
    });
  };

  addMarker = () => {
    let markers = this.state.markers;
    const pos = this.state.pos;
    const labelContent = this.state.labelContent;

    let staticLabel = false;
    let label = false;

    if (this.state.staticLabel) {
      staticLabel = labelContent;
    }
    else {
      label = labelContent;
    }

    markers.push(
      <Marker
        pos={pos}
        label={label}
        staticLabel={staticLabel}
      />
    );

    this.setState({
      markers: markers
    });
  };

  removeMarker = () => {
    let markers = this.state.markers;
    markers.pop();
    this.setState({
      markers: markers
    });
  };
  
  handleSave = e => {
    e.preventDefault();
    const data = this.state.markers

    this.props.dispatch({
      type: 'ADD_MARKERS',
      data
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div>
            <label>Position: </label>
            <input className="form-control" onChange={this.onChangePos} value={this.state.pos}/>
          </div>
          <div>
            <textarea
              rows="4"
              className="form-control"
              placeholder="Marker label"
              onChange={this.onChangeLabelContent} 
              value={this.state.labelContent}
            />
          </div>
          <div>
            <button className="btn btn-success" onClick={this.addMarker}>Add marker</button>
            <br/>
            <button className="btn btn-danger" onClick={this.removeMarker} disabled={!this.state.markers.length}>Remove marker</button>
            <br/>
            <button className="btn btn-success" onClick={this.handleSave}>Save markers</button>
          </div>
          <Map
            style={{width: "500px", height: "500px"}}
            center={this.state.center}
            zoom={this.state.zoom}
          >
            { this.state.markers }
          </Map>
        </div>
      </div>  
    );
  }
}