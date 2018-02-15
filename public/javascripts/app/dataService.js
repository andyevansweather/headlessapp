angular
    .module('app')
    .service('dataService', dataService);

dataService.$inject = ['$http'];

function dataService($http) {
    this.makeUrl = (url) => {
        console.log('urlwheiorwieujr');
        console.log(url);

        var data = {
            "url": url
        };
        return $http.post('/generatepdf', data);
    }
}