var xhr = new XMLHttpRequest();
xhr.open('GET', 'allPosts');
xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
        return;
    }
    if (xhr.status !== 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        console.log(xhr.responseText);
    }
}
xhr.send();

if (xhr.status != 200) {
    // обработать ошибку
    alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
} else {
    // вывести результат
    alert(xhr.responseText); // responseText -- текст ответа.
}