"use strict";

$(document).ready(function () {
  $('#select1').select2({
    placeholder: 'Модель',
    // Замените на свой текст
    allowClear: true // Разрешить очистку выбора
  });

  $('#select2').select2({
    placeholder: 'Комплектация',
    // Замените на свой текст
    allowClear: true // Разрешить очистку выбора
  });

  $('#select3').select2({
    placeholder: 'Мотор',
    // Замените на свой текст
    allowClear: true // Разрешить очистку выбора
  });
});