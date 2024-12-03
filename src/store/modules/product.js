export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          "id": "p3",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
          "title": "Food Box",
          "description": "May be partially expired when it arrives but at least it is cheap!",
          "price": 7.0,
          "category": "Grocery",
          "rating": 3.2,
          "stock": 120,
          "seller": "Budget Supplies Inc."
        },
        {
          "id": "p1",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
          "title": "Book Collection",
          "description": "A collection of must-read books. All-time classics included!",
          "price": 100.0,
          "category": "Books",
          "rating": 4.8,
          "stock": 25,
          "seller": "Book Lovers Club"
        },
        {
          "id": "p2",
          "image": "https://www.littlegrunts.com/blog/wp-content/uploads/2015/08/IMG_6356.jpg",
          "title": "Mountain Tent",
          "description": "A tent for the ambitious outdoor tourist.",
          "price": 130.0,
          "category": "Outdoor Gear",
          "rating": 4.5,
          "stock": 10,
          "seller": "Adventure Supplies Ltd."
        }
      ]
    }
  },
  getters: {
    products(state) {
      return state.products;
    }
  }
};
