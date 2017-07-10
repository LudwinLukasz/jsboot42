import React from 'react';
//import style from './TotdoList.css';

const TotdoList = props => (
//	<div className={style.TodoList}>
	<div>
		<h2>List of Todos</h2>
		<ul>{props.list}</ul>
	</div>
);
export default TotdoList;