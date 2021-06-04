/** @format */

import React from "react";

import { Card } from "../card/card";

import "./card_list.css";

export const CardList = (props) => {
	return (
		<div className="card_list">
			{props.monsters.map((el) => (
				// <h1 key={el.id} >{el.name}</h1>
				<Card key={el.id} el={el} />
			))}
		</div>
	);
};
