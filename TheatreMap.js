var React = require('react')
var ReactGMaps = require('react-gmaps') // https://github.com/MicheleBertoli/react-gmaps
var {Gmaps, Marker} = ReactGMaps

var theatres = require('../data/theatres.json')

var TheatreMap = React.createClass({
  render: function() {
    return (
      <div className="map col-sm-12">
        <Gmaps width={'100%'}
               height={'480px'}
               lat={'41.9021988'}
               lng={'-87.6285782'}
               zoom={11}
               loadingMessage={'Tacos soon...'}
               params={{v: '3.exp', key: 'AIzaSyCDjJJcoyUHY27BdlxPX2_AyPTirOlgCEs'}}>
          {theatres.map(function(place) {
            return <Marker lat={place.lat} lng={place.long} />
          })}
        </Gmaps>
      </div>
    )
  }
})

module.exports = TheatreMap
