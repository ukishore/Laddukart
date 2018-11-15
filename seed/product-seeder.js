var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/A_view_of_Laddu.JPG/200px-A_view_of_Laddu.JPG',
        title: 'Boondhi Laddu',
        description: 'The king of laddus, father of them all.',
        price: 310
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVWMTSgjJ7GUvNMphyVoQN7CaAtl2Jbe8w2Q7HLBDSYBWVB6E',
        title: 'Rava Laddu',
        description: 'Crunchy goodness that you will definitely love',
        price: 360
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Laddu_Sweet.JPG/200px-Laddu_Sweet.JPG',
        title: 'Moti Choor Laddu',
        description: 'Laddu that bombs in y\'alls mouths',
        price: 400
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Besan_laddu_photo.JPG/200px-Besan_laddu_photo.JPG',
        title: 'Besan Ke Laddu',
        description: 'Now that is super awesome laddu!',
        price: 230
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwshkSx8zlulV8naMty0QfVzl1AbKbQqFcNiNiVrOG1ZZoGjO9',
        title: 'Til ke Laddu',
        description: 'Sweetness that will definitely melt you!',
        price: 450
    }),
    new Product({
        imagePath: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/02/coconut-ladoo-recipe.jpg',
        title: 'Coconut Laddu',
        description: 'The best use of a coconut.',
        price: 400
    }),
    new Product({
        imagePath: 'https://www.yourhungerstop.com/wp-content/uploads/2015/09/Whole-Wheat-Laddoo-2-1024x678.jpg',
        title: 'Atta Laddu',
        description: 'The laddu made with the finest atta of the whole world.',
        price: 370
    }),
    new Product({
      imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDoy1uEOc1QuRLbu-mNbqkEN6Aq4a-E9QNUCEPO-adkLYbbdDe',
      title: 'Churma Laddu',
      description: 'I am running out of creativity now.',
      price: 360
    }),
    new Product({
      imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDoy1uEOc1QuRLbu-mNbqkEN6Aq4a-E9QNUCEPO-adkLYbbdDe',
      title: 'Kaju Laddu',
      description: 'Damn, I wish I was smarter.',
      price: 330
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}