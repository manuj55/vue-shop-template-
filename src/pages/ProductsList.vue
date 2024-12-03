<template>
  <section>
    <ul>
      <product-item v-for="product in products" :key="product.id" :product="product" :descrption="product.descrption"
        :price="product.price" :title="product.title" :image="product.image" :id="product.id">

      </product-item>
      <!-- <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    /> -->
    </ul>
  </section>
</template>

<script>
import ProductItem from "../components/products/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  computed: {
    products() {
      //if we are assesing the prods module we can use this getter syntax to get the products
      return this.$store.getters["prods/products"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
