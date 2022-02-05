{
<template>
  <header>
    <div class="header">
      <div class="logo">
        <img
          src="../assets/kensei.jpg"
          width="45px"
          height="45 px"
          style="margin-left: 10px"
        />
        <h4 v-on:click="home()" class="wheels">ROTA WHEELS</h4>
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
  background: black;
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
  color: lightgreen;
  font-weight: 600;
  margin-top: 7px;
}

.cart-count {
  font-size: 15px;
  color: black;
  padding: 0 9px;
  margin-left: -35px;
  background: white;
  height: 25px;
  border-radius: 70%;
  width: 25px;
}
.cart {
  width: 120px;
  justify-content: space-evenly;
  padding-top: 3px;
}

.cart-icon {
  line-height: 50px;
  color: lightgreen;
  cursor: pointer;
}
</style>
}
