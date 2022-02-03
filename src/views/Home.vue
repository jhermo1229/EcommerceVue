<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <div class="wheelscontainer"></div>
      <h4 class="products">Products</h4>
      <div class="row">
        <div
          v-on:click="wheelsDetails(items)"
          v-for="items in wheels"
          :key="items.id"
          class="col-md-4 pointer"
        >
          <img
            :src="items.url"
            width="300px"
            height="300px"
            style="border-radius: 15px"
          />
          <h5 class="black">{{ items.name }}</h5>
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
  name: "Home",
  components: { Header, Footer },
  computed: {
    wheels() {
      return this.$store.state.wheels;
    },
  },
  methods: {
    wheelsDetails(items) {
      this.$router.push({ name: "WheelsDetails", params: items });
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: blue;
}
.content {
  background: white;
  flex: 1;
  overflow-y: auto;
}
.pointer {
  cursor: pointer;
}
</style>
