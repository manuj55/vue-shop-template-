

export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    }
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload;
      // The items already exist in the cart
      const productInCartIndex = state.items.findIndex((prod) => prod.productId === productData.id);
      if (productInCartIndex >= 0) {
        // The item already exists in the cart
        state.items[productInCartIndex].qty++;
      }
      else {
        // The item needs to create a new item in the cart
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        }
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;

    },
    removeFromCart(state, payload) {
      const identifyIdex = state.items.findIndex(prod => prod.productId === payload);

      const prodData = state.items[identifyIdex];

      state.items.splice(identifyIdex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;


    }


  },
  actions: {
    addToCart(state, payload) {
      // add to cart
      const prodId = payload.id;
      const products = state.rootGetters["prods/products"];
      //we are mimicing a server call or database call which takes 2 seconds
      const foundProduct = products.find((prod) => prod.id === prodId);
      //call mutation to add to cart
      state.commit("addProductToCart", foundProduct);
    },

    deleteProduct(state, payload) {
      const prodId = payload.id;
      //call mutation to add to cart
      state.commit("removeFromCart", prodId);
    }
  },
  getters: {},
};
