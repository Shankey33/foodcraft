import butter_naan from './butter-naan.jpg';
import butter_paneer from './butter-paneer.jpg';
import dal_fry from './dal-fry.jpg';
import dal_makhani from './dal-makhani.jpg';
import dal_tadka from './dal-tadka.jpg';
import dum_aloo from './dum-aloo.jpg';
import gulab_jamun from './gulab-jamun.jpg';
import ice_cream from './ice-cream.jpg';
import kadai_paneer from './kadai-paneer.jpg';
import matar_paneer from './matar-paneer.jpg';
import mix_veg from './mix-veg.jpg';
import mushroom from './mushroom.jpg';
import shahi_paneer from './shahi-paneer.jpg';
import simple_naan from './simple-naan.jpg';
import tandoori_roti from './tandoori-roti.jpg';

export const food_images_category = [
    { id: 1, category: "Dish", image: butter_paneer},
    { id: 2, category: "Dal", image: dal_fry },
    { id: 3, category: "Breads", image: butter_naan},
    { id: 4, category: "Sweet", image: gulab_jamun },
];

export const food_images = [
    { id: 1, name: 'Butter Naan', image: butter_naan, category: "Breads", desc: "Soft and fluffy butter naan, perfect for dipping.", price: 60 },
    { id: 2, name: 'Butter Paneer', image: butter_paneer, category: "Dish", desc: "Creamy butter paneer with rich spices.", price: 220 },
    { id: 3, name: 'Dal fry', image: dal_fry, category: "Dal", desc: "Spiced lentils cooked to perfection.", price: 140 },
    { id: 4, name: 'Dal Makhani', image: dal_makhani, category: "Dal", desc: "Rich and creamy black lentils simmered overnight.", price: 180 },
    { id: 5, name: 'Dal Tadka', image: dal_tadka, category: "Dal", desc:    "Tadka dal with a hint of spices and herbs.", price: 130 },
    { id: 6, name: 'Dum Aloo', image: dum_aloo, category: "Dish", desc: "Spiced baby potatoes cooked in a rich gravy.", price: 160 },
    { id: 7, name: 'Gulab Jamun', image: gulab_jamun, category: "Sweet", desc:  "Soft and sweet gulab jamun soaked in syrup.", price: 80 },
    { id: 8, name: 'Ice Cream', image: ice_cream, category: "Sweet", desc:  "Delicious ice cream in various flavors.", price: 90 },
    { id: 9, name: 'Kadai Paneer', image: kadai_paneer, category: "Dish", desc:  "Spicy paneer cooked with bell peppers and onions.", price: 210 },
    { id: 10, name: 'Matar Paneer', image: matar_paneer, category: "Dish", desc: "Paneer and peas in a rich tomato gravy.", price: 200 },
    { id: 11, name: 'Mix Veg', image: mix_veg, category: "Dish", desc: "A mix of seasonal vegetables cooked with spices.", price: 170 },
    { id: 12, name: 'Mushroom', image: mushroom, category: "Dish", desc: "Delicious mushrooms cooked with herbs and spices.", price: 190 },
    { id: 13, name: 'Shahi Paneer', image: shahi_paneer, category: "Dish", desc: "Rich and creamy paneer dish with royal spices.", price: 230 },
    { id: 14, name: 'Simple Naan', image: simple_naan, category: "Breads", desc: "Soft and fluffy naan bread, perfect for any meal.", price: 40 },
    { id: 15, name: 'Tandoori roti', image: tandoori_roti, category: "Breads", desc: "Tandoori roti, a whole wheat flatbread baked in a tandoor.", price: 35 }
];
