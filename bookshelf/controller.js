var BookShelf = angular.module("bookList",[]);
BookShelf.controller("BookShelfController", function($scope){
    $scope.authors = ["Szendrei Ákos" , "Stephen King" , "J. K. Rowling"];
    $scope.titles = ["A magyar néphit boszorkánya" , "Az" , "Harry Potter és a Halál ereklyéi"];
    $scope.newAuthor = "";
    $scope.newTitle = "";
    
    $scope.pushItem = function () {
        if($scope.newAuthor != "" && $scope.newTitle != "") {
            $scope.authors.push($scope.newAuthor);
            $scope.titles.push($scope.newTitle);
            $scope.newAuthor = "";
            $scope.newTitle = "";
        }
    }
    $scope.deleteItem = function (index) {
        $scope.authors.splice(index, 1);
        $scope.titles.splice(index, 1);
    }
});