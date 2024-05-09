db = {};

db.init = function (callback) {
    $.getJSON('db.json', function (data) {
        db.data = data;
        if (callback) {
            callback();
        }
    });
}