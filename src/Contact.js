import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import './Contact.css'


function Contact() {

	const [name,setName] = useState('');
	const [message, setMessage] = useState('');

	const sendMessage = async (e) => {
		e.preventDefault()

		axios.post('/api/sendMessage', {
			name: name,
			message:  message
		})

		setName('')
		setMessage('')

	}

	return (
		<div className="contact">
			<div className="contact__title">
				<h1> Contacto </h1>
			</div>

			<div className="contact__form">
				<form >
					<input type='text' name='name' placeholder= 'Nombre completo' value={name} onChange={ (e) => setName(e.target.value) }  />

					<textarea placeholder='Escribe aqui el mensaje' value={message} onChange={ (e) => setMessage(e.target.value) } ></textarea >

					<button type='submit' onClick={sendMessage}> Enviar Mensaje </button>
				</form>
			</div>

		</div>
	)
}

export default Contact
