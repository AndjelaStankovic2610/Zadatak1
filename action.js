$(function () {
    var gore = $('.vratiGore');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            gore.addClass('aktivan1');
        } else {
            gore.removeClass('aktivan1');
        }
    });
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0); 
}

$(document).ready(function () {
    $('a[data-scroll^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = $($(this).attr('data-scroll'));

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 200); 
        }
    });
});
window.onload = function () {
    if (window.location.hash === '') {
        window.scrollTo(0, 0); 
    }
}


document.addEventListener("DOMContentLoaded", function() {
    function saveToLocalStorage() {
        var najdrazaKnjiga = document.getElementById('najdraza-knjiga').value;
         // Provera da li je polje prazno
        if (!najdrazaKnjiga.trim()) {
        alert('Morate uneti vrednost u polje.');
        return; 
        }
        var listaKnjiga = JSON.parse(localStorage.getItem('listaKnjiga')) || [];
        listaKnjiga.push(najdrazaKnjiga);
        localStorage.setItem('listaKnjiga', JSON.stringify(listaKnjiga));
        alert('Vaša knjiga je dodata u listu.');
        document.getElementById('najdraza-knjiga').value = '';
        prikaziListuKnjiga();
    }

    var submitButton = document.getElementById('dugme');
    submitButton.addEventListener('click', saveToLocalStorage);

    function prikaziListuKnjiga() {
        var listaKnjiga = JSON.parse(localStorage.getItem('listaKnjiga')) || [];
        var listaElement = document.getElementById('lista-knjiga');
        listaElement.innerHTML = '';
        for (var i = 0; i < listaKnjiga.length; i++) {
            var knjiga = listaKnjiga[i];
            var li = document.createElement('li');
            li.textContent = knjiga;
            listaElement.appendChild(li);
        }
    }
    prikaziListuKnjiga();
});



