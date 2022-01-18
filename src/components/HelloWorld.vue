<template>
  <div>
    <header>
      {{ cart.length }} in cart
      <button v-on:click="navigateTo('cart')">View Cart</button>
    </header>

    <div v-if="page === 'cart'">
      <Cart v-on: removeItemFromCart="removeItemFromCart" :cart="cart" />
    </div>

    <div v-if="page === 'products'">
      <Products v-on:addItemToCart="addItemToCart" />
    </div>
  </div>
</template>

<script>
import Products from "@/components/Products";
import Cart from "@/components/Cart";
export default {
  name: "App",
  data: () => {
    return {
      page: "products",
      cart: [],
    };
  },
  methods: {
    addItemToCart(product) {
      this.cart.push(product);
    },
    navigateTo(page) {
      this.page = page;
    },
    removeItemFromCart(product) {
      this.cart.splice(this.cart.indexOf(product));
    },
  },
  components: { Products, Cart },
};
</script>
<style>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  height: 60px;
  background-color: #42b983;
  box-shadow: 2px 2px 5px #999;
  text-align: right;
  font-size: 30 px;
  padding-top: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
