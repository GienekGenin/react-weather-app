import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCities } from '../actions/cityActions';
import './Cities.scss';

class Cities extends Component {
    componentWillMount(){
        this.props.fetchCities();
    }
  
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.cities.unshift(nextProps.newPost);
        }
    }

    render() {
      const cities = this.props.cities.map(city=>(
          <div key={city.id} className='city'>
          <br/>
            <h3>{city.name}</h3>
            <div>
                <h4>Temp</h4>
                <ul>
                    <li>Current: {city.main.temp}</li>
                    <li>Min: {city.main.temp_min}</li>
                    <li>Max: {city.main.temp_max}</li>
                </ul>
                <h4>Wind</h4>
                <ul>
                    <li>Speed {city.wind.speed}</li>
                    <li>Degrees {city.wind.deg}</li>
                </ul>
                <h4>Precipitation</h4>
                <ul>
                    <li>Rain: { city.rain ? 'yes' : 'no' }</li>
                    <li>Snow: { city.snow ? 'yes' : 'no' }</li>
                    <li>Clouds: {city.clouds.today}</li>
                </ul>
                <h4>Description</h4>
                <p>{city.weather[0].description}</p>
            </div>
          </div>
      ))
    return (
      <div>
          <h1>
              Cities
          </h1>
          <div className='cities'>
            {cities}
          </div>
      </div>
    )
  }
}

Cities.propTypes = {
    fetchCities: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    cities: state.cities.list
});

export default connect(mapStateToProps, { fetchCities })(Cities);