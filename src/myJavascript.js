var app = angular.module("myHearstApp", []);
app.controller("myCtrl", function($scope) {

    // on load
    $scope.secondDropdown = false;
    $scope.contentArea = false;

    // define data
    var activeMake = null;
    var dropDownData = {
        'Acura': ['ILX', 'MDX'],
        'Ford': ['Edge', 'Escape']
    };

    var imgData = {
        'Acura': {
            'ILX': 'acura_ilx.jpg',
            'MDX': 'acura_mdx.jpg'
        },
        'Ford': {
            'Edge': 'ford_edge.jpg',
            'Escape': 'ford_escape.jpg',
        }
    };

    $scope.dropDownAction = function (make) {
        // drop down click event
        // Params: make (string): ex) 'Acura'
        console.log(make);
        activeMake = make;
        // show dropDown html
        $scope.secondDropdown = true;

        // set data
        $scope.currentModels = dropDownData[make];

    };

    $scope.loadContent = function (model) {
        $scope.contentArea = true;
        console.log(model);
        console.log(activeMake);
        console.log(imgData[activeMake][model]);
        $scope.imageFile = imgData[activeMake][model];
    };

});
