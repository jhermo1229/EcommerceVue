{
<template>
  <div style="width: 50%">
    <div>
      <h6>Total:</h6>
      <div class="line"></div>
      <h6>Subtotal</h6>
    </div>
    <div>
      <h6>CAD {{ totalPrice }}</h6>
      <div class="line"></div>
      <h6>CAD {{ totalPrice + 100 }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  props: ["totalPrice"],
};
</script>

<style scoped>
.line {
  height: 1px;
  border-bottom: 1px solid black;
}
</style>
}
