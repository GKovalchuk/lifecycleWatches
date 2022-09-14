import '../assets/css/AddWatchForm.css'
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function AddWatchForm(props) {
	const addWatch = props.addWatch;
	const [form, setForm] = useState({
		city: '',
		timeZone: 0
	});

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setForm(prevForm => ({ ...prevForm, [name]: value }));
	}
	const handleSubmit = (evt) => {
		evt.preventDefault();
		addWatch({
			city: form.city,
			timeZone: form.timeZone,
			id: nanoid()
		});
		setForm({
			city: '',
			timeZone: 0
		});
	}

	return (
		<form className="wrapperForm" onSubmit={handleSubmit}>
			<div className="wrapperInput">
				<label htmlFor="">Название</label>
				<input type="text" name='city' id="city" value={form.city} onChange={handleChange} />
			</div>
			<div className="wrapperInput">
				<label htmlFor="">Временная зона</label>
				<input type="number" min="-12" max="12" step="1" name='timeZone' id="timeZone" value={form.timeZone} onChange={handleChange} />
			</div>
			<button type='submit'>Добавить</button>
		</form>
	);
}

export default AddWatchForm;