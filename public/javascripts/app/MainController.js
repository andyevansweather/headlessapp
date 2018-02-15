angular
    .module('app')
    .controller('MainController', MainController);

MainController.$inject = ['dataService'];

function MainController(dataService) {
    var vm = this;

    vm.test = 'test';

    vm.isSet = false;

    vm.postData = (url) => {
        return dataService
                    .makeUrl(url)
                    .then(response => {
                        vm.isSet = true;
                        console.log(response);
                    })
                    .catch(err => console.log(err));
    }
}