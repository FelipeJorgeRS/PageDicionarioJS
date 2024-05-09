initSelect = function () {
          for (var i = 0; i < db.data.length; i++) {
                    var item = db.data[i];
                    var select_text = "<option value='" + item.id + "'>" + item.titulo + "</option>";
                    $('#slc-topicos').append(select_text);
          }
};

onSelectChange = function () {
          var id = $('#slc-topicos').val();
          var item = db.data[id - 1];
          $('#rotulo_titulo').text(item.titulo);
          $('#texto_descritivo').text(item.descricao);
};

db.init(initSelect);
