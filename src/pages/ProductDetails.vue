<template>
  <div v-if="selectedProduct" class="product-detail-container">
    <h1 class="product-title">{{ selectedProduct.title }}</h1>

    <div class="product-card">
      <img :src="selectedProduct.image" :alt="selectedProduct.title" class="product-image" />

      <div class="product-info">
        <p class="product-description">{{ selectedProduct.description }}</p>
        <p><strong>Price:</strong> ${{ selectedProduct.price }}</p>
        <p><strong>Category:</strong> {{ selectedProduct.category }}</p>
        <p><strong>Rating:</strong> {{ selectedProduct.rating }} ★</p>
        <p><strong>Stock:</strong> {{ selectedProduct.stock }}</p>
        <p><strong>Seller:</strong> {{ selectedProduct.seller }}</p>
      </div>
    </div>
    <h1>Product Details</h1>
    <router-link to="/" class="back-link">Back to Products List</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    selectedProduct() {
      // Get the product with the id from the route params
      let productList = this.$store.getters["prods/products"]
      return productList.find(
        (product) => product.id === this.$route.params.id
      );
    },
  }
};
</script>

<style scoped>
.product-detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 0 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.product-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}

.product-card {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 750px;
  margin-top: 2rem;
}

.product-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 2rem;
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 450px;
}

.product-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.product-info p {
  font-size: 1.1rem;
  color: #444;
  margin: 0.5rem 0;
}

.product-info p strong {
  color: #333;
}

.back-link {
  margin-top: 1.5rem;
  text-decoration: none;
  color: #007bff;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #0056b3;
}
</style>
