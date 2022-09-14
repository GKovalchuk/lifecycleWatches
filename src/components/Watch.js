import { useEffect, useState } from 'react';

function Watch(props) {
	const city = props.city;
	const timeZone = props.timeZone;
	const watchId = props.watchId;
	const [time, setTime] = useState({
		seconds: 0,
		minutes: 0,
		hours: 0,
		exists: false
	});
	const [updated, setUpdated] = useState();
	let timeout; //первоначальное состояние до получения данных с сервера

	const fetchApi = (/* url */) => {
		const currentDate = new Date();

		const seconds = currentDate.getSeconds();
		const minutes = currentDate.getMinutes();
		const hours = currentDate.getUTCHours() + timeZone;

		return window.Promise.resolve({
			seconds: Math.floor(seconds * 6 - 90),
			minutes: Math.floor(minutes * 6 - 90 + Math.floor(seconds / 10)),
			hours: Math.floor((hours * 30 - 90) + Math.floor(minutes / 2)),
			currentDate: currentDate
		});
	}  // имитация передачи данных с сервера

	const loadData = () => {
		setTimeout(() => {
			fetchApi()
				.then(data => {
					const watch = document.getElementById(`${watchId}`);
					setTime({
						seconds: data.seconds,
						minutes: data.minutes,
						hours: data.hours,
						exists: true
					})
					console.log(new Date().getSeconds())
					draw(time, watch)
					setUpdated(data.currentDate)
				})
		}, 490);
	} // запрашиваем данные с сервера и вызываем изменение компонента



	useEffect(() => {
		loadData();
	}, []); //component did mount

	useEffect(() => {
		if (time.exists === true) {
			timeout = setTimeout(loadData, 490);
		} else {
			console.log(time.exists)
			return () => {
				clearTimeout(timeout);
			}
		}
	}, [updated]);  //component did update


	function draw(time, watch) {
		watch.querySelector('.second_hand').style.transform = `rotate(${time.seconds}deg)`;
		watch.querySelector('.minute_hand').style.transform = `rotate(${time.minutes}deg)`;
		watch.querySelector('.hour_hand').style.transform = `rotate(${time.hours}deg)`;
	} // функция, рисующая изменения

	const removeWatch = () => {
		setTime({ exists: false });
		return props.removeWatch(watchId);
	} // функция, удаляющая компонент

	return (
		<div className='watch_item' >
			<p className='city_name'>{city}</p>
			<div className='watch_wrapper'>
				<button type='button' onClick={removeWatch} className='remove_watch'>
					<img src="../assets/close_button.png" alt="X" />
				</button>
				<div className='bezel' id={watchId}>
					<span className='second_hand'></span>
					<span className='minute_hand'></span>
					<span className='hour_hand'></span>
					<span className='central_circle'></span>
				</div>
			</div>
		</div>
	)
}

export default Watch;