<template>
  <div class="quantity__toggle">
    <button type="button" @click="decrement" class="btn quantity__decrement">
      -
    </button>
    <input type="text" class="quantity__value" :value="quantity" readonly />
    <button type="button" @click="increment" class="btn quantity__increment">
      +
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  watch: {
    quantity: function (val) {
      this.$emit("updateQuantity", val);
    },
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity === 0) {
        alert("Negative quantity not allowed");
      } else {
        this.quantity--;
      }
    },
  },
};
</script>

<style scoped>
.quantity__toggle {
  position: relative;
  border: 1px solid #cacaca;
  height: 30px;
  display: inline-flex;
  overflow: hidden;
}

.btn {
  width: 38px;
  padding: 0;
}

.quantity__value {
  border: none;
  margin: 0;
  padding: 0;
  width: 60px;
  text-align: center;
  font-size: 14px;
}

.quantity__value:focus,
.btn:focus {
  box-shadow: none;
  outline: none;
}
</style>