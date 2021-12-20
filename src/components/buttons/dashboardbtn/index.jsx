import React from "react";
import { Button } from './dashboardbtn';
import PropTypes from 'prop-types';

function DashboardButton({ type, name }) {
	return (
		<Button type={type}>{name}</Button>
	)
}

export default DashboardButton;

DashboardButton.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}
