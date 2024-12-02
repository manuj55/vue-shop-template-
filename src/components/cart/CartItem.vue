<template>
  <li class="cart-item">
    <div class="item__image">
      <img :src="image" :alt="title" />
    </div>
    <div class="item__details">
      <h3>{{ title }}</h3>
      <div class="item__price">
        <span>Price per Item:</span>
        <strong>${{ price }}</strong>
      </div>
      <div class="item__total">Total: <strong>$0</strong></div>
    </div>
    <div class="item__actions">
      <div class="item__quantity">
        <span>Quantity:</span>
        <strong>{{ qty }}</strong>
      </div>
      <button class="item__remove-btn">Remove</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["prodId", "title", "image", "price", "qty"],
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #ffffff;
  max-width: 30rem;
}

.item__image {
  flex-shrink: 0;
  margin-right: 1rem;
}

.item__image img {
  width: 6rem;
  height: 6rem;
  border-radius: 8px;
  object-fit: cover;
}

.item__details {
  flex-grow: 1;
  text-align: left;
}

.item__details h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}

.item__price {
  font-size: 0.9rem;
  color: #666;
  margin: 0.5rem 0;
}

.item__total {
  font-size: 1rem;
  font-weight: bold;
  color: #000;
}

.item__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.item__quantity {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.item__remove-btn {
  font: inherit;
  border: 1px solid #d32f2f;
  background-color: #d32f2f;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s, transform 0.2s;
}

.item__remove-btn:hover,
.item__remove-btn:active {
  background-color: #b71c1c;
  transform: scale(1.05);
}
</style>
