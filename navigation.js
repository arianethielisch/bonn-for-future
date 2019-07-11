(function() {
    var hamburger = document.getElementById('hamburger');
    var navigation = document.getElementById('hauptnavigation');

    hamburger.addEventListener('click', toggleNavigation);

    function toggleNavigation() {
        navigation.classList.toggle('sichtbar');
    }
})();