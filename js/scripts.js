'use strict';

var btnOpen = document.querySelector('.footer-contacts .btn');
var modal = document.querySelector('.modal-feedback');
var btnClose = modal.querySelector('.close');

btnOpen.addEventListener('click', function (event) {
  event.preventDefault();
  if (modal.classList.contains('hide')) {
    modal.classList.remove('hide');
    modal.classList.add('show');
  }
  modal.classList.add('show');
});

btnClose.addEventListener('click', function (event) {
  event.preventDefault();

  if (modal.classList.contains('show')) {
    modal.classList.remove('show');
    modal.classList.add('hide');
  }
});

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.938536, 30.3224549],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Nёrds',
      balloonContent: 'Сделаем качественно'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'https://kvezal.github.io/nerds/img/map_marker.png',
      iconImageSize: [231, 190],
      iconImageOffset: [-28, -195]
    });
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(myPlacemark);
});
