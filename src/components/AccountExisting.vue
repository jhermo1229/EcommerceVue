<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <h4>UPDATE ACCOUNT</h4>
      <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-end">
            <h4>USERNAME:</h4>
          </div>
          <div class="col d-flex justify-content-start">
            <input
              type="text"
              placeholder="user"
              id="username"
              v-model="user"
              :disabled="true"
            />
          </div>
        </div>
        <div class="row" style="padding-top: 30px">
          <div class="col d-flex justify-content-end">
            <h4>FIRST NAME:</h4>
          </div>
          <div class="col d-flex justify-content-start">
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              v-model="firstName"
              :disabled="true"
            />
          </div>
        </div>
        <div class="row" style="padding-top: 30px">
          <div class="col d-flex justify-content-end">
            <h4>LAST NAME:</h4>
          </div>
          <div class="col d-flex justify-content-start">
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              v-model="lastName"
              :disabled="true"
            />
          </div>
        </div>
        <div class="row" style="padding-top: 30px">
          <div class="col d-flex justify-content-end">
            <h4>ADDRESS:</h4>
          </div>
          <div class="col d-flex justify-content-start">
            <input
              type="text"
              placeholder="Address"
              id="address"
              v-model="address"
              :disabled="true"
            />
          </div>
        </div>
        <div class="row" style="padding-top: 30px">
          <div class="col d-flex justify-content-end">
            <h4>OLD SHIPPING ADDRESS:</h4>
          </div>
          <div class="col d-flex justify-content-start">
            <input
              type="text"
              placeholder="Shipping Address"
              id="shipAddress"
              v-model="shipAddress"
              :disabled="true"
            />
          </div>
        </div>
        <div class="row" style="padding-top: 30px">
          <div class="col d-flex justify-content-end">
            <h4>NEW SHIPPING ADDRESS:</h4>
          </div>
          <div class="col d-flex justify-content-start">
            <input
              type="text"
              placeholder="Shipping Address"
              id="shipAddressNew"
            />
          </div>
        </div>
        <div class="row" style="padding-top: 30px">
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              v-on:click="getInputValue(), showAlert()"
            >
              Create
            </button>
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
  name: "Account",
  components: { Header, Footer },
  methods: {
    fetchData() {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.firstName = JSON.parse(localStorage.getItem("firstName"));
      this.lastName = JSON.parse(localStorage.getItem("lastName"));
      this.address = JSON.parse(localStorage.getItem("address"));
      this.shipAddress = JSON.parse(localStorage.getItem("shipAddress"));
    },

    getInputValue() {
      var shipAddressNew = document.getElementById("shipAddressNew").value;
      var existing = localStorage.getItem("shipAddress");
      existing = shipAddressNew;
      localStorage.setItem("shipAddress", JSON.stringify(existing));
    },

    showAlert() {
      // Use sweetalert2
      this.$swal("Account successfully updated").then(function () {
        location.reload();
      });
    },
  },
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
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  background: white;
  flex: 1;
  text-align: center;
  overflow-y: auto;
}
</style>
