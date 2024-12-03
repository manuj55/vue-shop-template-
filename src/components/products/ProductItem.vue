<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="product__text">
        <router-link :to="`/products/${id}`">
          <h3>{{ title }}</h3>
        </router-link>
        <div class="product__price">
          <!--Todo: WithBaseBadge -->
          $
          {{ price }}
        </div>
        <p class="product__description">{{ description }}</p>
      </div>
    </div>
    <div class="product__actions">
      <button>Add to Cart</button>
    </div>
  </li>
</template>

<script>

export default {
  props: ["id", "image", "title", "price", "description"],
};
</script>

<style scoped>
/* Base Styles for the Product Item */
.product {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  max-width: 30rem;
  margin: 1.5rem auto;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Horizontal Layout for Data Section */
.product__data {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

/* Image Styling */
.product__image img {
  height: 6rem;
  width: 6rem;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Text Styling */
.product__text {
  flex: 1;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
}

.product__price {
  margin: 0.5rem 0;
}

.product__description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
  margin: 0.5rem 0;
}

/* Button Styling */
.product__actions {
  margin-top: 1rem;
  width: 100%;
  text-align: right;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover,
button:active {
  background-color: #0056c1;
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  .product__data {
    flex-direction: column;
    align-items: flex-start;
  }

  .product__actions {
    text-align: center;
  }
}
</style>
