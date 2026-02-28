var app = angular.module("calcApp", []);

app.controller("CalcController", function($scope, $rootScope){

    $scope.num1 = 0;
    $scope.num2 = 0;

    // shared result using rootScope
    $rootScope.globalResult = 0;

    $scope.calculate = function(operator){

        let a = Number($scope.num1);
        let b = Number($scope.num2);

        switch(operator){
            case '+':
                $rootScope.globalResult = a + b;
                break;

            case '-':
                $rootScope.globalResult = a - b;
                break;

            case '*':
                $rootScope.globalResult = a * b;
                break;

            case '/':
                $rootScope.globalResult =
                    b !== 0 ? a / b : "Cannot divide by zero";
                break;
        }

        // local scope gets value from rootScope
        $scope.result = $rootScope.globalResult;
    };

});
