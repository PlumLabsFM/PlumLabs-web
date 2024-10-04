import React from 'react';
import style from './Typography.module.css';

export function Title ({children, textColor}) {
	return <h1 className={style.title} style={{color: `${textColor}`}}>{children}</h1>;
}

export function Description ({children, textColor}) {
	return <h3 className={style.description} style={{color: `${textColor}`}}>{children}</h3>;
}

export function Heading ({children, textColor}) {
	return <h2 className={style.title} style={{color: `${textColor}`}}>{children}</h2>;
}

export function SubHeading ({children, cursor, textColor}) {
	return <h4 className={cursor ? `${style.title} ${style.pointer}` : style.title} style={{color: `${textColor}`}}>{children}</h4>;
}

export function MinorText ({children, textColor}) {
	return <h5 className={style.normalText} style={{color: `${textColor}`}}>{children}</h5>;
}

export function SmallText ({children, textColor}) {
	return <h6 className={style.smallText} style={{color: `${textColor}`}}>{children}</h6>;
}




