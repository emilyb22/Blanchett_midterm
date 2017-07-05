angular.module('ToDo',[]). /*App controller*/
controller('todoController',['$scope','myLocalStorage', function($scope, myLocalStorage){ /*displaying list controller*/
    console.log(myLocalStorage)
    $scope.todos = myLocalStorage.get("item") || [];
    
    console.log($scope.todos)
    $scope.addTodo = function(){ /*Adding items through the formy input*/
        $scope.todos.push({'title':$scope.newTodo,'date':$scope.newDate, 'done':false}) //adding the date and the title
        myLocalStorage.set("item", $scope.todos)
        $scope.newTodo = ''/*To empty the input*/
        $scope.newDate = ''
    }
    
     
    $scope.clearCompleted = function(){ /*Delete all completed function*/
            $scope.todos = $scope.todos.filter(function(item){
            return !item.done
        })
            myLocalStorage.remove('item', $scope.todos)
            myLocalStorage.set('item', $scope.todos)
    }
    
}]) 