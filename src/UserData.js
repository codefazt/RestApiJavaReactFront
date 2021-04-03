import React,  { useState }  from 'react'
import './UserData.css'


function UserData (data){
    const user = data.user;

    if(user.showPhone != true && user.showPhone != "true"){
        user.showPhone = false
    }

    if(user.img == "") user.img = "image/user.png"

    return (
			<div className="contact__my">
				<div className="contact__image">
					<img src={"/"+user.img} alt="usuario"></img>
				</div>

				<div className="contact__information">
					<ul>
						<li>{user.name}</li>
						<li>{user.email}</li>
						<li>{user.information}</li>
						
                        {
                            user.showPhone ? <li>{user.phone}</li> : ''
                        }

					</ul>
				</div>
			</div>
		)

}


export default UserData