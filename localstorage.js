angular.module("ToDoApp").service('apptodoLocalStorage', function () {

function setAnItem(key, value) {
localStorage.setItem(key, JSON.stringify(value));
}

function getAnItem(key) {
return JSON.parse(localStorage.getItem(key));
}

function deletAnItem(key) {
localStorage.removeItem(key);
}

return {
set: setAnItem,
get: getAnItem,
remove: deletAnItem,
}

});