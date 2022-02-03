{
<template>
  <div class="d-flex outer">
    <Header />
    <div class="cartBody">
      <div v-if="totalPrice !== 0" class="container">
        <h4>MY CART</h4>
        <div style="justify-content: space-between">
          <h4>SUMMARY</h4>
          <h4 style="margin-right: 49%">CART</h4>
        </div>
        <div>
          <Summary v-bind:totalPrice="totalPrice" />
          <div style="width: 50%">
            <div style="max-width: 70%">
              <ul style="padding: 0">
                <li
                  v-for="items in cartItems"
                  :key="items.id"
                  style="list-style: none"
                >
                  <div class="cartItems">
                    <img
                      :src="items.url"
                      width="50px"
                      height="50px"
                      style="border-radius: 50%"
                    />
                    <h6>{{ items.name }}</h6>
                    <div>
                      <button
                        v-on:click="addItem(items)"
                        class="add"
                        type="button"
                      >
                        +
                      </button>
                      <span class="cartQuantity">{{ items.quantity }}</span>
                      <button
                        v-on:click="removeItem(items)"
                        class="remove"
                        type="button"
                      >
                        -
                      </button>
                    </div>
                    <h6>{{ items.price }}</h6>
                  </div>
                  <div class="line"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style="width: 80%; margin-top: 2%">
          <button type="button">Checkout</button>
        </div>
      </div>
      <EmptyCart v-else />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import EmptyCart from "@/components/EmptyCart.vue";
import Summary from "@/components/Summary.vue";
// import swal from "sweetalert";
export default {
  components: { Header, Footer, EmptyCart, Summary },
  name: "Cart",
  methods: {
    addItem(items) {
      this.$store.dispatch("addToCart", items);
    },
    removeItem(items) {
      this.$store.dispatch("removeToCart", items);
    },
    // checkout() {
    //   swal("Good", "Success!", "success").then((value) => {
    //     window.location.href = "/Cart";
    //   });
    // },
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map((el) => {
        price += el["quantity"] * el["price"];
      });
      return price;
    },
  },
};
</script>

<style scoped>
.outer {
  flex-direction: column;
  height: 100vh;
}

.cartBody {
  background: burlywood;
  flex: 1;
  overflow-y: auto;
}

.cartQuantity {
  display: inline-block;
  padding: 3px 6px;
  width: 46px;
  height: 28px;
  border-radius: 2px;
  background-color: red;
  margin: 0 5px;
  text-align: center;
}

.cartItems {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: white;
}

.myCart {
  color: yellow;
  font-weight: 600;
}

input[type="text"] {
  border: none;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  outline: none;
}

.fw600 {
  font-weight: 600;
}

.line {
  height: 1px;
  border-bottom: 1px solid black;
}

.add,
.remove {
  width: 28px;
  height: 28px;
  background: linear-gradient(#fff, #f9f9f9);
  border: 1px solid #c2c2c2;
  cursor: pointer;
  font-size: 16px;
  border-radius: 7px;
  padding-top: 1px;
  outline: none;
}
</style>
}
