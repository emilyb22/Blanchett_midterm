angular.module('ToDo',[]). /*App controller*/
controller('todoController',['$scope',function($scope){ /*displaying list controller*/
    $scope.todos = [
        {'title':'Build a todo app', 'date':'July 4th' ,'done':false}
    ];
    
    $scope.addTodo = function(){ /*Adding items through the formy input*/
        $scope.todos.push({'title':$scope.newTodo,'date':$scope.newDate, 'done':false}) //adding the date and the title
        $scope.newTodo = ''/*To empty the input*/
        $scope.newDate = ''
    }
    
     
    $scope.clearCompleted = function(){ /*Delete all completed function*/
            $scope.todos = $scope.todos.filter(function(item){
            return !item.done
        })
    }
    
}]) //controller todo
    

/*addnew (){
$scope.todoList.push(newTodo)
syncLocalStorage()
resetNewTodo()
    }
syncLocalStorage(){
localStorage.setItem('todoList', JSON.stringify($scope.todoList))
}    
*/