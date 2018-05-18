const contr = (function () {
    return {
        request: function (method, path, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, path);
            xhr.onload = function () {
                if (xhr.readyState !== 4) {
                    return;
                }
                if (xhr.status !== 200) {
                    console.log(xhr.status + ': ' + xhr.statusText);
                } else {
                    let data = JSON.parse(xhr.responseText);
                    callback(data);
                }
            }
            xhr.send();
        }
        
    }
}());