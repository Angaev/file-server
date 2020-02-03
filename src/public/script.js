jQuery(document).ready(function ($) {
  $('.my').change(function() {
    if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
    else $(this).prev().text('Выберите файлы');
  });
  $('.chous').click(function () {
    // TODO send data
  });
});
