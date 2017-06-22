module.exports = function(app){
  app.controller('NotesController', ['$scope', 'noteFactory', function($scope, noteFactory){

    $scope.notes = [];

    var setNotes = function(data){
      $scope.notes = data;
      $scope.newNote = {};
    }

    noteFactory.getNotes(setNotes);


    $scope.addNote = function(){
      noteFactory.createNote($scope.newNote, setNotes);
    }


  }])
}