import React from 'react';
import style from './Typography.module.css';

export function Title ({children}) {
	return <h1 className={style.title}>{children}</h1>;
}

export function Description ({children}) {
	return <h3 className={style.description}>{children}</h3>;
}

export function Heading ({children}) {
	return <h2 className={style.title}>{children}</h2>;
}

export function SubHeading ({children, cursor}) {
	return <h4 className={cursor ? `${style.title} ${style.pointer}` : style.title}>{children}</h4>;
}