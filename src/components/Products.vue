<template>
  <div>
    <h1>Products</h1>
    <div class="products">
      <div v-for="(product, index) in products" :key="index">
        {{ product.name }}
        <img :src="product.image" />
        <div>{{ product.cost }}</div>
        <button v-on:click="addItemToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      products: [
        {
          name: "Ragnarok",
          cost: "$0.99",
          image: "",
        },
        {
          name: "Mario",
          cost: "$0.99",
          image: "",
        },
        {
          name: "Popeye",
          cost: "$0.99",
          image: "",
        },
      ],
    };
  },
  methods: {
    addItemToCart(product) {
      this.$emit("addItemToCart", product);
    },
  },
};
</script>

<style></style>
