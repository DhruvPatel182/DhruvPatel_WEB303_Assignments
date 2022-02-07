// WEB303 Assignment 2
// Dhruv Dharmendra Kumar Patel
//0782382

var xhr = new XMLHttpRequest;

$('#prospect').on('click', function (){
    xhr.open('GET', 'prospect.html', true)
    xhr.onload = function () {
        if (xhr.status === 200) {
            let c1 = document.getElementById("content");
            c1.innerHTML = xhr.responseText;
            $('#content').hide().fadeIn(500);
        }
        else {
            console.log("something gone wrong");
        }
    };
    xhr.send("serach = ardunio");
})

$('#convert').on('click', function () {
    xhr.open('GET', 'convert.html', true)
    xhr.onload = function () {
        if (xhr.status === 200) {
            let c2 = document.getElementById("content");
            c2.innerHTML = xhr.responseText;
            $('#content').hide().fadeIn(500);
        }
        else {
            console.log("something gone wrong");
        }
    };
xhr.send("serach = ardunio");
})

$('#retain').on('click', function () {
    xhr.open('GET', 'retain.html', true)
    xhr.onload = function () {
        if (xhr.status === 200) {
            let c3 = document.getElementById("content");
            c3.innerHTML = xhr.responseText;
            $('#content').hide().fadeIn(500);
        }
        else {
            console.log("something gone wrong");
        }
    };

xhr.send("serach = ardunio");
})