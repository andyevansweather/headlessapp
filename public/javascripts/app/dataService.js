angular
    .module('app')
    .service('dataService', dataService);

dataService.$inject = ['$http'];

function dataService($http) {
    this.makeUrl = (url) => {
        let data = {};
        data['url'] = url;

        return $http.post('/generatepdf', data);
    }
}