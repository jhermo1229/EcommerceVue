<template>
  <div>
    <button v-on:click="navigateTo('products')">Back</button>
    <h1>Add To Cart</h1>
    <div class="products">
      <div v-for="(product, index) in cart" :key="index">
        {{ product.name }}
        <img :src="product.image" />
        <div>{{ product.cost }}</div>
        <button v-on:click="removeItemFromCart(product)">Remove to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cart"],
  methods: {
    removeItemFromCart(product) {
      this.$emit("removeItemFromCart", product);
    },
  },
};
</script>

<style></style>
