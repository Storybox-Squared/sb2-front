var app = angular.module('sb2-assets', []);

document.addEventListener("DOMContentLoaded", function (event) {
    switch (document.location.pathname) {
        case '/home':
            document.getElementById('home-nav').classList.add('is-active');
            break;
        case '/assets':
            document.getElementById('assets-nav').classList.add('is-active');
            break;
        case '/assets/new':
            document.getElementById('new-asset-nav').classList.add('is-active');
            break;
    }
});