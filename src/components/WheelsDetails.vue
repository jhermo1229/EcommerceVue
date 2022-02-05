<template>
  <div class="d-flex wheels-details-o">
    <Header />
    <div class="d-flex wheels-details">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img
              :src="details.url"
              width="400px"
              height="400px"
              style="border-radius: 15px"
              alt=""
            />
            <hr />
            <h3>Authenticated Reviews:</h3>
            <div
              v-for="items in details.comment"
              :key="items.id"
              class="d-flex justify-content-start"
            >
              <div class="d-flex align-items-center p-2">
                <h5 class="black">{{ items }}</h5>
              </div>
            </div>

            <div
              v-for="items in cartItems"
              :key="items"
              class="d-flex align-items-center p-2"
            >
              <div v-if="items.d === details.id">
                <h5 class="black">{{ items.c }}</h5>
              </div>
            </div>
            <div>
              <input type="text" placeholder="" v-model="name" />
              <button v-on:click="addToComment">Add comment</button>
            </div>
          </div>

          <div class="col-md-6 offset-md-2" style="cursor: pointer">
            <div>
              <h2 class="my-4">
                {{ details.name }}
              </h2>
              <hr />
              <div>
                <h4>Perfect for:</h4>
                <h5>Sedan</h5>
                <h5>Compact SUV</h5>
              </div>
            </div>
            <hr />
            <div class="price d-flex justify-content-around align-items-center">
              <h5 class="my-4">$ {{ details.price }} per set of 4</h5>
              <button v-on:click="addToCart" class="btn btn-success">
                Add To Cart
              </button>
            </div>
            <hr />
            <h5 class="my-5">{{ details.desc }}</h5>
            <div>
              <ul
                style="
                  display: grid;
                  grid-gap: 20px;
                  grid-template-columns: 33% 33% 33%;
                "
              >
                <li
                  v-for="items in details.models"
                  :key="items.id"
                  style="width: 20%; display: inline"
                >
                  <img
                    :src="items"
                    width="200px"
                    height="200px"
                    style="border-radius: 1rem"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <!-- <div>
              <button v-on:click="goToCart" class="btn btn-primary">
                Go to Cart
              </button>

              <button v-on:click="removeToCart" class="btn btn-danger">
                Remove Item
              </button>
            </div> -->
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

.price {
  background: lightblue;
}
</style>
}
