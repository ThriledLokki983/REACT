/** @format */

import "./card.css";

import React from "react";

export const Card = (props) => {
	return (
		<div className="card_container">
			<img
				alt="monster"
				src={`https://robohash.org/${props.el.id}?set=set2&size=180x180`}
			/>
			<h2>{props.el.name}</h2>
			<p>{props.el.email}</p>
		</div>
	);
};
