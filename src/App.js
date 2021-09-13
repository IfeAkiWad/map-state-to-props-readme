import React, { Component } from 'react';
import { connect } from 'react-redux' /* connects a component to store's internal state to get data*/
import './App.css';

// in render and handleClick methods, store is no longer being passed directly to App
class App extends Component {
	handleOnClick = () => {
		this.props.dispatch({
			type: 'INCREASE_COUNT',
		});
	}

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.clicks}</p>
			</div>
		);
	}
}

/*specify exactly which slice of the state we want to provide to our component. Here, we want to provide state.clicks, and allow our component to have access to them through a prop called clicks. We are then able to render the number of clicks in our render method using this.props.clicks */
const mapStateToProps = (state) => {
	return { clicks: state.clicks }
}

/*specify that we are connecting this state to the App component. In the end, the connect() method returns a new component which looks like the App component we wrote, but is connected up to receive the correct data. This new component is the component we wish to export. */
export default connect(mapStateToProps)(App);
