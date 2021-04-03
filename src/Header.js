import React from 'react'
import logo from './image/logo.png'
import './Header.css'


function Header(){
	return (
		<div className="header">
			<div className="header__menu">
				<a href="/" > <img src={logo} alt="imagen no encontrada" /></a>
				
				<div className="header__nav">
					<nav>
						<a href="https://github.com/codefazt" target='_blank' rel='noreferrer'> Github </a>
						<a href="/contact"> Contacto </a>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Header
