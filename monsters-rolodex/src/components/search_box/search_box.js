/**
 * Functional component that is Reusable - this will be reduce duplicate codes
 *
 * @format
 */

import React from "react";

import "./search_box.css";

export const SearchBox = ({ placeholder, handleChange }) => {
	return (
		<input
			className="search"
			type="search"
			placeholder={placeholder}
			onChange={handleChange}
		/>
	);
};
