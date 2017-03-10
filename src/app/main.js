

var app = angular.module('myApp',[]);

app.controller('myController',function ($scope) {
    console.log('cpnyroller calling');
    $scope.submitdata = function () {
        $scope.errorMessage = '';
        console.log('sasasasasasa' +JSON.stringify($scope.jasondata));
        try{
            var obj = jsonlint.parse($scope.jasondata)
           // var obj = JSON.parse($scope.jasondata);
            $scope.jasondata = JSON.stringify(obj, undefined, 4);
            $scope.successMessage = "valid json"
            $scope.errorMessage =''

        }catch(e){
            console.error('errordsdsdsdsdsd======',e);
            $scope.errorMessage = e.message;
            $scope.successMessage =''
        }
    }
    $scope.cleardata = function () {
        $scope.jasondata=''
    }

})
// try {
//     jsonlint.parse(faultyJsonToParse)
// } catch(e) {
//     document.write('<pre>' + e)
// }