<template>
  <div class="d-flex wheels-details-o">
    <Header />
    <div class="d-flex wheels-details">
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <h2 class="my-4">{{ details.name }}</h2>
            <div>
              <h4>Perfect for:</h4>
              <h4>Sedan</h4>
              <h4>Compact SUV</h4>
            </div>
          </div>
          <div class="col-md-4">
            <img
              :src="details.url"
              width="400px"
              height="400px"
              style="border-radius: 15px"
              alt=""
            />

            <div
              v-for="items in details.comment"
              :key="items.id"
              class="col-md-4 pointer"
            >
              <h5 class="black">{{ items }}</h5>
            </div>

            <div v-for="items in cartItems" :key="items">
              <div v-if="items.d === details.id">
                <h5 class="black">{{ items.c }}</h5>
              </div>
            </div>
            <div>
              <input type="text" placeholder="" v-model="name" />
              <button v-on:click="addToComment">Add comment</button>
            </div>
          </div>

          <div class="col-md-4 offset-md-1" style="cursor: pointer">
            <div class="col-md-4 offset-md-1"></div>
            <h5 class="my-4">
              Currently priced at: {{ details.price }} CAD per set of 4
            </h5>
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
