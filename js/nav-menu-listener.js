document.querySelectorAll('.website-nav__list__item__link').forEach(function(link) {
    link.addEventListener('click', function() { document.getElementById('website-nav__checkbox').checked = false; });
});