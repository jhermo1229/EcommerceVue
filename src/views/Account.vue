<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <h4>CREATE ACCOUNT</h4>
      <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-end">
            <h4>USERNAME:</h4>
          </div>
          <div class="col d-flex justify-content-start">
            <input type="text" placeholder="Username" id="username" />
          </div>
        </div>
        <div class="row" style="padding-top: 30px">
          <div class="col d-flex justify-content-end">
            <h4>FIRST NAME:</h4>
          </div>
          <div class="col d-flex justify-content-start">
            <input type="text" placeholder="First Name" id="firstName" />
          </div>
        </div>
        <div class="row" style="padding-top: 30px">
          <div class="col d-flex justify-content-end">
            <h4>LAST NAME:</h4>
          </div>
          <div class="col d-flex justify-content-start">
            <input type="text" placeholder="Last Name" id="lastName" />
          </div>
        </div>
        <div class="row" style="padding-top: 30px">
          <div class="col d-flex justify-content-end">
            <h4>ADDRESS:</h4>
          </div>
          <div class="col d-flex justify-content-start">
            <input type="text" placeholder="Address" id="address" />
          </div>
        </div>
        <div class="row" style="padding-top: 30px">
          <div class="col d-flex justify-content-end">
            <h4>SHIPPING ADDRESS:</h4>
          </div>
          <div class="col d-flex justify-content-start">
            <input
              type="text"
              placeholder="Shipping Address"
              id="shipAddress"
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
    getInputValue() {
      var username = document.getElementById("username").value;
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var address = document.getElementById("address").value;
      var shipAddress = document.getElementById("shipAddress").value;
      localStorage.setItem("user", JSON.stringify(username));
      localStorage.setItem("firstName", JSON.stringify(firstName));
      localStorage.setItem("lastName", JSON.stringify(lastName));
      localStorage.setItem("address", JSON.stringify(address));
      localStorage.setItem("shipAddress", JSON.stringify(shipAddress));
    },
    showAlert() {
      // Use sweetalert2
      this.$swal("Account successfully created").then(function () {
        location.reload();
      });
    },
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
  padding-top: 30px;
}
</style>
