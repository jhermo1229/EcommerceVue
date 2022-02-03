{
<template>
  <header>
    <div class="header">
      <div class="logo">
        <h4 v-on:click="home()" class="wheels">ROTA WHEELS</h4>
        <img
          src="../assets/gforce.jpg"
          width="45px"
          height="45 px"
          style="margin-left: 10px"
        />
      </div>
      <div class="d-flex cart">
        <i v-on:click="cart()" class="fa fa-shopping-cart cart-icon"></i>
        <span class="cart-count">{{ count }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    cart() {
      this.$router.push({ name: "Cart" });
    },
    home() {
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    count() {
      return this.$store.state.cartItemCount;
    },
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  background: lightblue;
  display: flex;
  justify-content: space-between;
}

.logo {
  display: flex;
  margin-left: 15px;
  padding: 6px;
  cursor: pointer;
}

.wheels {
  color: black;
  font-weight: 600;
  margin-top: 7px;
}

.cart-count {
  font-size: 15px;
  color: red;
  padding: 0 5px;
  margin-left: -35px;
  background: black;
  height: 20px;
  border-radius: 50%;
  width: 20px;
}
.cart {
  width: 120px;
  justify-content: space-evenly;
  padding-top: 3px;
}

.cart-icon {
  line-height: 45px;
  font-size: 24 px;
  color: white;
  cursor: pointer;
}
</style>
}
