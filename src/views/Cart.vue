<template>
  <div class="d-flex outer">
    <Header />
    <div class="row cartBody" style="margin: 80px">
      <div
        v-if="totalPrice !== 0"
        class="d-flex align-items-stretch justify-content-between"
      >
        <div class="col-md-6 border-right">
          <div>
            <div class="d-flex justify-content-between">
              <div><h5>Product</h5></div>
              <div><h5>Description</h5></div>
              &nbsp;
              <div><h5>Price</h5></div>
            </div>
            <div>
              <div class="row">
                <ul>
                  <li
                    v-for="items in cartItems"
                    :key="items.id"
                    style="width: 20%; display: inline"
                  >
                    <div
                      class="d-flex justify-content-between"
                      style="padding: 20px 20px"
                    >
                      <img
                        :src="items.url"
                        width="50px"
                        height="50px"
                        style="border-radius: 50%"
                      />
                      <div style="width: 40%">
                        <h6>{{ items.name }}</h6>
                      </div>

                      <div>
                        <button
                          v-on:click="removeItem(items)"
                          class="remove"
                          type="button"
                        >
                          -
                        </button>
                        <span class="cartQuantity">{{ items.quantity }}</span>

                        <button
                          v-on:click="addItem(items)"
                          class="add"
                          type="button"
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <h6>{{ items.price * items.quantity }}</h6>
                      </div>
                    </div>
                    <div class="line"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div><h4>Order Summary:</h4></div>
          <div class="d-flex justify-content-between">
            <h6>Subtotal:</h6>
            <h6>${{ totalPrice }}</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h6>Fix Delivery Fee:</h6>
            <h6>$100</h6>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <h6>Shipping Address:</h6>
            <h6>{{ shipAddress }}</h6>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <h6>Total:</h6>
            <h6>${{ totalPrice + 100 }}</h6>
          </div>
          <div class="d-flex align-items-end">
            <button
              type="button"
              style="width: 100%"
              class="btn btn-primary"
              @click="addToHistory(cartItems), showAlert()"
            >
              Checkout
            </button>
          </div>
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
export default {
  components: { Header, Footer, EmptyCart },
  name: "Cart",
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal("Order success!!!!").then(function () {
        location.reload();
      });
    },
    //If item is bought, it will be saved to localStorage
    addToHistory(items) {
      var hist = localStorage.getItem("buyHistory");
      if (!hist) {
        hist = [];
      }
      for (let i = 0; i < items.length; i++) {
        hist.push(items[i].id);
      }
      localStorage.setItem("buyHistory", JSON.stringify(hist));
    },
    //get the existing address in the localStorage
    fetchData() {
      this.shipAddress = JSON.parse(localStorage.getItem("shipAddress"));
    },
    //calling the addToCart in store to be able to add items
    addItem(items) {
      this.$store.dispatch("addToCart", items);
    },
    //calling the addToCart in store to be able to subtract items
    removeItem(items) {
      this.$store.dispatch("removeToCart", items);
    },
  },

  computed: {
    //These are the existing items in the cart
    cartItems() {
      return this.$store.state.cartItems;
    },
    //Computation of total price
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map((el) => {
        price += el["quantity"] * el["price"];
      });
      return price;
    },
  },
  //Added this to fetch data as soon as the page loads
  created() {
    this.$watch(
      () => {
        this.fetchData();
      },

      { immediate: true }
    );
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
.outer {
  flex-direction: column;
  height: 99vh;
}

.cartBody {
  background: white;
  flex: 1;
  overflow-y: auto;
}

.cartQuantity {
  display: inline-block;
  padding: 3px 6px;
  width: 46px;
  height: 28px;
  border: 1px solid #c2c2c2;
  background-color: white;
  margin: 0 5px;
  text-align: center;
}

.line {
  height: 1px;
  border-bottom: 1px solid black;
}

.add {
  width: 28px;
  height: 28px;
  background: linear-gradient(#fff, green);
  border: 1px solid #c2c2c2;
  cursor: pointer;
  font-size: 16px;
  border-radius: 7px;
  padding-top: 1px;
  outline: none;
}

.remove {
  width: 28px;
  height: 28px;
  background: linear-gradient(#fff, gray);
  border: 1px solid #c2c2c2;
  cursor: pointer;
  font-size: 16px;
  border-radius: 7px;
  padding-top: 1px;
  outline: none;
}
</style>
