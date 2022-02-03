<template>
  <div class="d-flex wheels-details-o">
    <Header />
    <div class="wheels-details">
      <div class="container mb-5">
        <h4 class="my-4">Cart</h4>
        <div class="row">
          <div class="col-md-4" style="cursor: pointer">
            <img
              :src="details.url"
              width="300px"
              height="300px"
              style="border-radius: 15px"
              alt=""
            />
          </div>
          <div class="col-md-4" style="cursor: pointer">
            <h5 class="my-4">Name:{{ details.name }}</h5>
            <h5 class="my-4">Price:{{ details.price }}</h5>
            <h5 class="my-4">Description:{{ details.desc }}</h5>
            <div>
              <button v-on:click="goToCart" class="btn btn-primary">
                Go to Cart
              </button>
              <button v-on:click="addToCart" class="btn btn-success">
                Add Item
              </button>
              <button v-on:click="removeToCart" class="btn btn-danger">
                Remove Item
              </button>
            </div>
            <div class="row">
              <div
                v-for="items in details.comment"
                :key="items.id"
                class="col-md-4 pointer"
              >
                <h5 class="black">{{ items }}</h5>
              </div>
              <div>
                <input type="text" placeholder="User Name" v-model="name" />
                <button v-on:click="addToComment">Get input field value</button>
              </div>

              <div
                v-for="items in cartItems"
                :key="items"
                class="col-md-4 pointer"
              >
                <div v-if="items.d === details.id">
                  <h5 class="black">{{ items.c }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, Footer },
  name: "WheelsDetails",
  computed: {
    wheels() {
      return this.$store.state.wheels;
    },
    cartItems() {
      return this.$store.state.addC;
    },
  },
  data() {
    return {
      details: this.$route.params,
      name: "",
    };
  },
  methods: {
    goToCart() {
      this.$router.push({ name: "Cart" });
    },
    addToCart() {
      this.$store.dispatch("addToCart", this.details);
    },
    removeToCart() {
      this.$store.dispatch("removeToCart", this.details);
    },
    addToComment() {
      this.$store.dispatch("addToComment", {
        name: this.name,
        id: this.details.id,
      });
    },
  },

  created() {
    if (this.$route.params.id != undefined)
      localStorage.setItem("details", JSON.stringify(this.$route.params));
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("details"));
  },
};
</script>

<style scoped>
.wheels-details-o {
  flex-direction: column;
  height: 100vh;
}

.wheels-details {
  background: white;
  flex: 1;
  overflow-y: auto;
}
</style>
}
