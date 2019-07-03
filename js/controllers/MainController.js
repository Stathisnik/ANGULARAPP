app.controller('MainController', ['$scope', function($scope) { 
    $scope.title = 'Top Books in Drama'; 
    $scope.promo = 'The most popular books this month.';
    $scope.products = [
      { 
        name: 'The Book of Trees', 
        price: 19, 
        pubdate: new Date('2014', '03', '08'), 
        cover: 'img/the-book-of-trees.jpg.jpg',
        likes: 0,
        dislikes: 0
        
      }, 
      { 
        name: 'Program or be Programmed', 
        price: 8, 
        pubdate: new Date('2013', '08', '01'), 
        cover: 'img/program-or-be-programmed.jpg.jpg',
        likes: 0,
        dislikes: 0
      },
      {
        name: 'The Giving Tree',
        price: 10,
        pubdate: new Date('1964', '10', '07'),
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTXdxbk8UdFOkqRS8DL1yIVPsqLom0YAVBOwl__DMbVJZw8n9ww',
        likes: 0,
        dislikes: 0
      },
      {
        name: 'The Stranger',
        price: 11,
        pubdate: new Date('1942', '10', '15'),
        cover: 'https://webstorage.public.gr/images/0141879/9789600321999-1000-0141879.jpg',
        likes: 0,
        dislikes: 0
      }
    ] ;

$scope.plusOne=function(index){
  $scope.products[index].likes +=1;
};

$scope.minusOne=function(index){
  $scope.products[index].dislikes +=1;
};

  }]);
  