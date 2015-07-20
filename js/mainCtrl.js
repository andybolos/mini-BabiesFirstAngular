var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
    $scope.hero='Ninja Turtles are the coolest!';
    $scope.turtles=['Michaelangolo', 'Leonardo', 'Donatello', 'Rafeial',  'Master Splinter', 'Shredder','#PizzaMan'];

    $scope.addBox= function() {
        $scope.turtles.unshift($scope.newFriend);
        $scope.newFriend = '';
    }

});
