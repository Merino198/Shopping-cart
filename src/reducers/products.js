const initialState = [
  {
    id: 1,
    name: "samsung note 10",
    image: "assets/images/note_10.jpg",
    description: "ok",
    price: 200,
    inventory: 30,
    company: "samsung",
    rating: 5
  },
  {
    id: 2,
    name: "iphone 11",
    image: "assets/images/iphone11.jpg",
    description: "ok",
    price: 500,
    inventory: 35,
    company: "apple",
    rating: 5
  },
  {
    id: 3,
    name: "Oppo A3S",
    image: "assets/images/oppo-a3s.jpg",
    description: "ok",
    price: 150,
    inventory: 100,
    company: "oppo",
    rating: 4
  },
  {
    id: 4,
    name: "Huawei Y9",
    image: "assets/images/huawei-y9.jpg",
    description: "ok",
    price: 135,
    inventory: 100,
    company: "huawei",
    rating: 4
  },
  {
    id: 5,
    name: "Huawei P30 Pro",
    image: "assets/images/Huawei-P30-Pro.jpg",
    description: "ok",
    price: 889,
    inventory: 100,
    company: "huawei",
    rating: 5
  },
  {
    id: 6,
    name: "iphone 8 plus",
    image: "assets/images/iphone-8-plus.jpg",
    description: "ok",
    price: 599,
    inventory: 100,
    company: "apple",
    rating: 5
  },
  {
    id: 7,
    name: "HTC U11",
    image: "assets/images/HTC-U11.jpg",
    description: "ok",
    price: 100,
    inventory: 100,
    company: "HTC",
    rating: 3
  },
  {
    id: 8,
    name: "iphoneX",
    image: "assets/images/iphoneX.jpg",
    description: "ok",
    price: 699,
    inventory: 699,
    company: "apple",
    rating: 4
  },
  {
    id: 9,
    name: "Lenovo z5 pro",
    image: "assets/images/Lenovo-Z5-Pro.jpg",
    description: "ok",
    price: 359,
    inventory: 359,
    company: "lenovo",
    rating: 4
  },
  {
    id: 10,
    name: "LG G7 plus",
    image: "assets/images/LG-G7-plus.jpg",
    description: "ok",
    price: 200,
    inventory: 359,
    company: "LG",
    rating: 4
  },
  {
    id: 11,
    name: "LG V30",
    image: "assets/images/LG-V30.jpg",
    description: "ok",
    price: 159,
    inventory: 359,
    company: "LG",
    rating: 3
  },
  {
    id: 12,
    name: "nokia 8",
    image: "assets/images/nokia-8.jpg",
    description: "ok",
    price: 499,
    inventory: 100,
    company: "nokia",
    rating: 4
  },
  {
    id: 13,
    name: "Samsung A 20",
    image: "assets/images/Samsung-A20.jpg",
    description: "ok",
    price: 659,
    inventory: 100,
    company: "samsung",
    rating: 4
  },
  {
    id: 14,
    name: "Oppo find x",
    image: "assets/images/oppo-find-x.jpg",
    description: "ok",
    price: 365,
    inventory: 100,
    company: "oppo",
    rating: 4
  },
  {
    id: 15,
    name: "Samsung A 30",
    image: "assets/images/Samsung-A30.jpg",
    description: "ok",
    price: 729,
    inventory: 100,
    company: "samsung",
    rating: 4
  },
  {
    id: 16,
    name: "Samsung note 9",
    image: "assets/images/samsung-note-9.jpg",
    description: "ok",
    price: 800,
    inventory: 100,
    company: "samsung",
    rating: 5
  },
  {
    id: 17,
    name: "Samsung galaxy S10",
    image: "assets/images/samsung-s10.jpg",
    description: "ok",
    price: 800,
    inventory: 100,
    company: "samsung",
    rating: 5
  },
  {
    id: 18,
    name: "Sony Xperia 1",
    image: "assets/images/sony-xperia1.jpg",
    description: "ok",
    price: 450,
    inventory: 100,
    company: "sony",
    rating: 4
  },
  {
    id: 19,
    name: "Sony Xperia 10",
    image: "assets/images/sony-xperia10.jpg",
    description: "ok",
    price: 899,
    inventory: 100,
    company: "sony",
    rating: 5
  },
  {
    id: 20,
    name: "xiaomi mi 8",
    image: "assets/images/xiaomi-mi-8.jpg",
    description: "ok",
    price: 400,
    inventory: 100,
    company: "xiaomi",
    rating: 3
  },
  {
    id: 21,
    name: "xiaomi mimax 3",
    image: "assets/images/xiaomi-mimax-3.jpg",
    description: "ok",
    price: 299,
    inventory: 100,
    company: "xiaomi",
    rating: 4
  }
];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default myReducer;