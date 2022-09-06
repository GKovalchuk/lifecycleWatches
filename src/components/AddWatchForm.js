import '../assets/css/AddWatchForm.css'
import React, { useState } from 'react';

function AddWatchForm() {
	const [form, setForm] = useState({
		city: '',
		timeZone: 0
	});

	function handleChange() {

	}
	function handleSubmit() {

	}

	return (
		<form className="wrapperForm" onSubmit={handleSubmit}>
			<div className="wrapperInput">
				<label htmlFor="">Название</label>
				<input type="text" name='city' id="city" value={form.city} onChange={handleChange} />
			</div>
			<div className="wrapperInput">
				<label htmlFor="">Временная зона</label>
				<input type="number" name='timeZone' id="timeZone" value={form.timeZone} onChange={handleChange} />
			</div>
			<button type='submit'>Добавить</button>
		</form>
	);
}

export default AddWatchForm;