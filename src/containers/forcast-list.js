import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';
import Fade from 'react-addons-css-transition-group';


class ForcastList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (kelvin) => { return (1.8 * (kelvin - 273) + 32) });
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const {lon, lat} = cityData.city.coord;

		return (
			<tr key={name}>
				<td>
					<GoogleMap lat={lat} lon={lon} />
				</td>
				<td><Chart data={temps} color="blue" units="℉ Degrees" /></td>
				<td><Chart data={pressures} color="black" units="hPa" /></td>
				<td><Chart data={humidities} color="red" units="%" /></td>
			</tr>
		)
	}

	render() {

		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>	
		)
	}
}

ForcastList.propTypes {
	
}

function mapStateToPops({weather}) {
	return { weather };
}

export default connect(mapStateToPops)(ForcastList);