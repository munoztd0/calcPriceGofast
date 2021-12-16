<template>
  <div class="container">
    <div class="row calculator">
      <div class="col-9 calculator__content">
        <aside class="calculator__sidebar"></aside>
        <div class="content-wrapper">
          <component
            :is="selectedTab"
            @set-price-estimation-data="setPriceEstimationData"
          ></component>
        </div>
      </div>
      <div class="col-3 calculator__estimation">
        <price-estimation
          :priceEstimationData="priceEstimationData"
          @remove-item="removeItem"
        ></price-estimation>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "../base/BaseCard.vue";
import BaseButton from "../base/BaseButton.vue";
import StorageCalculator from "./StorageCalculator.vue";
import ServiceCalculator from "./ServiceCalculator.vue";
import PriceEstimation from "./PriceEstimation.vue";
export default {
  components: {
    BaseCard,
    BaseButton,
    StorageCalculator,
    ServiceCalculator,
    PriceEstimation,
  },
  // remove watch
  /* watch: {
    selectedTab: function () {
      this.priceEstimationData = null;
    },
  }, */
  computed: {
    selectedTabProps() {
      return this.selectedTab === "storage-calculator"
        ? { event: this.setPriceEstimationData }
        : null;
    },
  },
  data() {
    return {
      selectedTab: "storage-calculator",
      priceEstimationData: [],
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    setPriceEstimationData(data) {
      this.priceEstimationData.push(data);
    },
    removeItem(id) {
      // remove findIndex function
      this.priceEstimationData.splice(id, 1);
    },
  },
};
</script>

<style scoped>
.calculator__content {
  display: inline-flex;
}

.calculator__content .content-wrapper {
  border: 1px solid #cacaca;
  padding: 1.5rem;
  width: 100%;
}

.calculator__sidebar {
  width: 35%;
}

.accordion {
  height: 100%;
  background-color: #3632a8;
}

.accordion .card {
  border: none;
  background-color: #5d58e8;
}

.accordion .card .card-header {
  background-color: #3632a8;
  border-bottom: none;
  cursor: pointer;
  color: #fff;
}

.accordion .card .card-body {
  padding: 1rem 0.5rem;
}

.accordion .card .card-body .nav .nav-item .nav-link {
  color: #3632a8;
  font-size: 14px;
}
</style>