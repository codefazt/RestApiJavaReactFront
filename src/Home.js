import React from 'react'
import './Home.css'


function Home() {
	return (
		<div className="Home"> 
			<div className="home__banner" >
				<h1><b></b></h1>
			</div>
			<div className="home__subBanner">
				<p>Pagina desarrollado con React.Js y CSS</p>
			</div>
			<div className="home__content">
				<div className="home__content__title"> 
					<h2>El Cafe Ayuda A Desarrollar</h2> 
				</div>
				<div className="home__content__cluster">
					<div className="cafe1">
					</div>
					<div className="cafe2">
					</div>
					<div className="cafe3">
					</div>
					<div className="cafe4">
					</div>
					<div className="cafe5">
					</div>
	
				</div>
			</div>
		</div>
	)
}

export default Home
