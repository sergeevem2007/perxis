
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
				center: [ 37.395485, 55.867428],

				// Уровень масштабирования
				zoom: 11
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
		markerElement.className = 'ymap__marker';
		markerElement.src =	markerProp.iconSrc;
		markerElement.onclick = () => {
			ymapName.innerHTML = markerProp.name;
			ymapAdress.innerHTML = markerProp.adress;
			ymapTelF.innerHTML = markerProp.telF;
			ymapTelS.innerHTML = markerProp.telS;
		};
		map.addChild(new YMapMarker({ coordinates: markerProp.coordinates }, markerElement));
	});
}

const ymapName = document.getElementById('ymap-name');
const ymapAdress = document.getElementById('ymap-adress');
const ymapTelF = document.getElementById('ymaps-tel-f');
const ymapTelS = document.getElementById('ymaps-tel-s');

const markerProps = 	[
	{ iconSrc: '/assets/img/site/ico-geo.png' , coordinates: [37.319472, 55.820371], name: 'Dealer Company Name', adress: 'Москва, ул. Автодилерская, 23, стр. 1', telF: '+7 (495) 428 12 94', telS: '+7 (495) 428 12 95' },
	{ iconSrc: '/assets/img/site/ico-geo-active.png' , coordinates: [37.4448401, 55.889358], name: 'Company Dealer Name', adress: 'Москва, ул. Филевский бульвар, 5', telF: '+7 (495) 555 55 55', telS: '+7 (495) 666 66 66' },
	{ iconSrc: '/assets/img/site/ico-geo.png' , coordinates: [37.736726, 55.909974], name: 'Name Dealer Company ', adress: 'Москва, ул. Маяковская, 7, стр. 11', telF: '+7 (495) 777 77 77', telS: '+7 (495) 888 88 88' },
];
