
initMap();
async function initMap() {
	// Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
	await ymaps3.ready;

	const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

	// Иницилиазируем карту
	const map = new YMap(
		// Передаём ссылку на HTMLElement контейнера
		document.getElementById('map'),

		// Передаём параметры инициализации карты
		{
			location: {
				// Координаты центра карты
				center: [ 37.319472, 55.820371],

				// Уровень масштабирования
				zoom: 12
			}
		},
		[
			// Add a map scheme layer
			new YMapDefaultSchemeLayer({}),
			// Add a layer of geo objects to display the markers
			new YMapDefaultFeaturesLayer({})
		]
	);


	markerProps.forEach((markerProp) => {
		const markerElement = document.createElement('img');
		markerElement.className = 'icon-marker';
		markerElement.src = markerProp.iconSrc;
		markerElement.onclick = () => alert(markerProp.message);
		map.addChild(new YMapMarker({ coordinates: markerProp.coordinates }, markerElement));
	});
}

const markerProps = 	[
	{ iconSrc: '/src/assets/img/logo.png' , coordinates: [37.319472, 55.820371] }
];
