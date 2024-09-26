import React from 'react';
import style from './Typography.module.css';

export function Title ({children}) {
	return <h1 className={style.title}>{children}</h1>;
}

export function Description ({children}) {
	return <h3 className={style.description}>{children}</h3>;
}

export function Heading ({children, textColor}) {
	return <h2 className={style.title} style={{color: `${textColor}`}}>{children}</h2>;
}

export function SubHeading ({children, cursor}) {
	return <h4 className={cursor ? `${style.title} ${style.pointer}` : style.title}>{children}</h4>;
}
export function NormalText ({children}) {
	return <h5 className={style.normalText}>{children}</h5>;
}
export function SmallText ({children}) {
	return <h6 className={style.smallText}>{children}</h6>;
}




