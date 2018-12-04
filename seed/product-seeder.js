var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: '/images/BoondhiLaddu.JPG',
        title: 'Boondhi Laddu',
        description: 'The king of laddus, father of them all.',
        ingredients: [
          "500 Gram Gram flour",
          "1 Litre Water or milk",
          "750 Gram Ghee (for frying)",
          "750 Gram Sugar",
          "3 1/2 Cups Water",
          "10-12 drops Orange color",
          "10-12 Saffron flakes, soaked",
          "50 Gram Cashew nuts, chopped",
          "50 Gram Raisins",
          "10 Cardamoms , peeled",
          "Boondi strainer or fryer of medium sized holes"
        ],
        howTo: [
          "Prepare a thin batter with gram flour and water or milk. Heat ghee in a pan.",
          "Fill the fryer or strainer with the batter up to the half.",
          "Position it over pan and drain boondis in hot ghee by hitting the strainer on side of the pan, lifting up then again hitting. This process should be finished very quickly.",
          "Fry them to golden color, drain and remove. Use up all the batter.",
          "Prepare sugar syrup of one and a half thread consistency by boiling sugar and water.",
          "Add saffron water and color to the syrup. Mix the boondis, syrup, dry fruits and cardamom.",
          "After 10 minutes, sprinkle over a little hot water, cover and keep for 1 1/2 hour.",
          "Prepare round balls with moist hands.",
        ],
        price: 310
    }),
    new Product({
        imagePath: '/images/coconutLaddu.jpg',
        title: 'Coconut Laddu',
        description: 'Crunchy goodness that you will definitely love',
        ingredients: [
          "1/2 Cup Khoya",
          "1 tsp Ghee",
          "10-15 Nos Cashew",
          "10-15 Nos Almond",
          "1 1/2 Cup Dessicated Coconut",
          "1 Cup Condensed Milk"
        ],
        howTo: [
          "Take khoya in a pan.",
          "Saute it well to melt it and form a paste.",
          "Now take some ghee in the pan and roast cashews till golden brown.",
          "Followed by cashews take almonds and roast till golden brown.",
          "Now take dessicated coconut in a pan.",
          "Saute it till light brown and add condensed milk",
          "Mix them well to form a thick paste.",
          "Add khoya paste and mix well.",
          "Make small round balls of the paste.",
          "Put roasted cashews and almonds inside the coconut ball.",
          "Roll the coconut balls in the roasted dessicated coconut."
        ],
        price: 360
    }),
    new Product({
        imagePath: '/images/sonthKeLaddu.jpg',
        title: 'Sonth Ke Laddu',
        description: 'Laddu that bombs in y\'alls mouths',
        howTo: [
         " Fry whole-wheat flour in ghee until golden brown. Take off the heat and stir in pistachio paste and coconut.",
         "Boil sugar and water together for five minutes.",
         "Add to the flour mixture with the remaining ingredients.",
         "Prepare the laddus and garnish with silver leaf and saffron strands."
        ],
        ingredients: [
          "200 gm whole wheat flour",
          "150 gm ghee",
         " 100 gm pistachio nuts",
          "2 Tbsp fresh , grated coconut",
          "125 gm sugar",
          "125 ml water",
          "1/2 tsp cardamom powder",
          "2 tsp ginger powder",
          "To Finish: Silver leaf; Saffron strands soaked in water"
        ],
        price: 400
    }),
    new Product({
        imagePath: '/images/besanKeLaddu.JPG',
        title: 'Besan Ke Laddu',
        description: 'Now that is super awesome laddu!',
        howTo: [
         " In a kadahi (wok), melt the ghee and add the gram flour. Stir-fry over low heat. It takes about 30 minutes for the flour to get cooked through and it gets a pasty look when done.",
"The color should be a light brown. Shut off the heat and leave the mixture to cool completely. If it does not cool entirely, it becomes moist when sugar is added.",
"Add the sugar and cardamom and mix well by rubbing it with your open palm against the base of the bowl. Rub till blended thoroughly.",
"Shape into tight, hard balls, pressing hard at every stage. At the final stage, keep it pressed a little longer, so that the surface becomes smooth.",
"Decorate the top of each ball with almonds and pistachios. Serve.",
"These ladoos can be stored for almost 4-6 weeks in an air tight jar."
        ],
        ingredients: [
         " 2 Cups Gram Flour",
          "1/2 Cup Ghee",
          "3/4 Cup Sugar, powdered",
         " 1/4 tsp Green Cardamom, powdered",
          "To garnish Almonds, blanched",
          "To garnish Pistachios, blanched"
        ],
        price: 230
    }),
    new Product({
        imagePath: '/images/tilKeLaddu.jpg',
        title: 'Til ke Laddu',
        description: 'Sweetness that will definitely melt you!',
        ingredients: [
          "1 Cup White sesame seeds (toasted)",
          "1/2 Cup Khoya (softened)",
          "1/2 Cup Jaggery (crumbled)",
          "A pinch of Saffron stigmas",
          "2 tsp Canola oil",
          "2 Tbsp Milk (warm), full cream"
        ],
        howTo: [
          "Heat a thick bottom pan, add canola oil and to it add sesame seeds.",
          "Continuously keep stirring the sesame seeds until they turn light golden hues. Take it off the flame and remove the sesame seeds on to a flat plate.",
          "Soak saffron in warm milk and reserve it. In the same pan as of sesame, add jaggery and melt it to liquid, gently keep stirring it till it froths without reducing it too much, take it off the flame.",
          "Before it starts to solidify add to it saffron milk, stir it. Add to it softened khoya, sesame seeds and blend well together with mixing spoons.",
          "Now oil your palms with a bit of canola oil and using your fingers take small portion f the mix (ensure the mix isn't too hot to burn you) and shape it into medium sized balls. Continue this until you have used up all mix.",
          "Serve it at room temperature and this can go well during a party at home as pass around of sweet snacks."
        ],
        price: 450
    }),
    new Product({
        imagePath: '/images/murmuraLaddu.jpg',
        title: 'Murmura Laddu',
        description: 'The best use of a murmuras',
        howTo : [
          "Place jaggery and water in a pan, and dissolve the jaggery over low heat.",
          "Once the jaggery dissolves, increase the heat and bring it to boil and cook over full flame till, a 2 thread consistency is reached.",
          "Mix in the murmura quickly into the mixture.",
          "Take it off the heat and let it cool for a while",
          "Make round balls moistening the hands if the batter is too much sticky.",
          "Leave it to cool and serve."
        ],
        ingredients: [
          "250 Gram Murmura (rice puffs)",
          "750 Gram Jaggery",
          "3 1/2 Cups Water"
        ],
        price: 400
    }),
    new Product({
        imagePath: '/images/attaLaddu.jpg',
        title: 'Atta Laddu',
        description: 'The laddu made with the finest atta of the whole world.',
        ingredients: [
          "1 Kg Atta",
          "1 Kg Boora (or powdered sugar)",
          "1 Kg Ghee",
          "40 Gram Sonth / dried ginger powder",
          "3 Tbsp Ajwain / thymol seeds, roasted",
          "50 Gram Raisins",
          "50 Gram Sultanas",
          "100 Gram Almonds",
          "100 Gram Magaz (seeds of melon/water melon)",
          "50 Gram Makhana (lotus seeds, lightly fried)",
          "50 Gram Gond (edible gum crystals) lightly fried, and ground coarsely)"
        ],
        howTo: [
          "Roast almonds and pound coarsely.",
          "Dry roast atta, when lightly colored add ghee and saute till fat separates.",
          "Cool completely, and add rest of the ingredients, form into ladoos and store."
        ],
        price: 370
    }),
    new Product({
      imagePath: '/images/ragiLaddu.jpg',
      title: 'Ragi Laddu',
      description: 'I am running out of creativity now.',
      howTo: [
"Dry roast the oats lightly and grind them in a mixer.",
"Remove the seeds from the dates and blend 15 of them with the help of milk in a blender into a paste.",
"Dry roast cashew nuts.",
"Take 1 tbsp of ghee in pan and roast the oats flour on low flame for few minutes.",
"Now take another pan and heat the remaining ghee and roast ragi flour until the rawness is removed on low flame.",
"Now mix the oats flour in the ragi flour and mixwell keeping on low flame.",
"Now add the dates paste into it and mi well.",
"Then add half of honey and mix.",
"Now add cardamom powder and mix well. Keep on low flame for few minutes and off the stove.",
"Take the mixture out of stove and let it cool for some time.",
"Now take some dough into hand and put a cashew and make it in the form of ladoo.",
"Do the same with remaining dough and serve them."
      ],
      ingredients: [
        "1 1/2 Cup Ragi flour",
        "1 Cup Oats flour",
        "20 Dates (ripe)",
        "1/4 Cup Milk",
        "1/2 Cup Honey",
        "3 Tbsp Ghee",
        "1 tsp Green cardamom powder",
        "1/4 Cup White sesame seeds",
        "1/4 Cup Coconut powder",
        "12 Cashew nuts"
      ],
      price: 360
    }),
    new Product({
      imagePath: '/images/datesLaddu.jpg',
      title: 'Dates Laddu',
      description: 'Damn, I wish I was smarter.',
      howTo: [
        "Dry roast nuts for few minutes if on stove top, set them aside to cool or add them to a microwave safe tray and microwave for about 2 minutes, stir in between at least twice.",
"To the same pan, add dates and heat them till turn soft. If in a microwave, add dates to the same tray, microwave for about 30 to 60 seconds to soften them.",
"Add desiccated coconut if using.",
"Knead or blend the dates in a blender, set the blended dates aside.",
"Add nuts to the blender and pulse them coarsely or chop them. Mix dates and nuts well or together blend them in the blender. (If u want put whole all dry fruits)",
"Take small portions and roll them to balls.",
"You can roll them in desiccated coconut to give a ladoo look."
      ],
      ingredients: [
        "20 Large Dates (pitted)",
        "1/4 Cup Mixed nuts (almonds, cashews, walnuts, pistachios, peanuts)",
        "1 Tbsp Dessicated coconut (optional)"
      ],
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