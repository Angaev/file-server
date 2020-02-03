jQuery(document).ready(function ($) {
  $('.my').change(function() {
    if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
    else $(this).prev().text('Выберите файлы');
  });
  $('#upload').click(function () {
    $(this).html('Загружаю.....');
    const formData = new FormData();
    for (let i = 0; i < $('.my')[0].files.length; i++) {
      formData.append("file_"+i, $('.my')[0].files[i]);
    }

    const request = new XMLHttpRequest();

    request.onload = function() {
        $('#upload').html('Загрузка окончена');
    };
    request.open("POST", `http://127.0.0.1:3000/upload`);
    request.send(formData);
  });
});
