<template>
  <div class="card">
    <div class="card-header">Prix éstimé</div>
    <div class="card-body">
      <template v-if="priceEstimationData">
        <div
          :key="id"
          v-for="(data, id) in priceEstimationData"
          class="estimation-category"
        >
          <div class="category-price d-flex justify-content-between">
            {{ data ? data.type[0].toUpperCase() + data.type.slice(1) : "" }}

            <a href="#" @click="removeItem(id)">Delete</a>
          </div>
          <table class="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <p>
                    Catégorie: <span>{{ data.typeName }}</span>
                  </p>
                  <br />

                  <p v-if="data.deliveryValue == 1">
                    Supplément urgence: <span>{{ "non" }}</span>
                  </p>
                  <p v-else>
                    Supplément urgence: <span>{{ "oui" }}</span>
                  </p>
                  <br />
                  <p>
                    Poids supplémentaire: <span>{{ data.qunantity }}</span>
                  </p>
                </td>
                <td class="text-right">
                  <p>${{ data.typeValue }}</p>
                  <br />
                  <p>
                    ${{
                      ((data.typeValue * data.deliveryValue) / 2) *
                      (data.deliveryValue - 1)
                    }}
                  </p>
                  <br />
                  <p>${{ data.qunantity * 5 }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
      <!-- remove second items to make it dynamics -->
      <!-- <div class="estimation-category" v-if="priceEstimationData">
        <div class="category-price d-flex justify-content-between">
          Services

          <a href="#" @click="removeItem(id)">Delete</a>
        </div>
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td>
                <p>
                  Services Type: <span>{{ servicesType }}</span>
                </p>
                <p>
                  Quantity Services: <span>{{ servicesQuantity }}</span>
                </p>
                <p>
                  Duration Services: <span>{{ servicesDuration }}</span>
                </p>
              </td>
              <td class="text-right">
                <p>${{ servicesTypePrice }}</p>
                <p>${{ servicesQuantity * servicesQuantityPrice }}</p>
                <p>${{ servicesDuration * servicesDurationPrice }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div> -->
      <div class="estimation-category" v-if="priceEstimationData">
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td>
                <p>TOTAL</p>
              </td>
              <td class="text-right">
                <p>${{ totalPrice }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["priceEstimationData"],
  // remove data
  /* data() {
    return {
      storageType: "",
      storageQuantity: 0,
      storageTypePrice: 0,
      storageDuration: 0,
      storageQuantityPrice: 20,
      storageDurationPrice: 60,

      servicesType: "",
      servicesQuantity: 0,
      servicesTypePrice: 0,
      servicesDuration: 0,
      servicesQuantityPrice: 20,
      servicesDurationPrice: 60,
    };
  }, */
  computed: {
    totalPrice() {
      // change total price computed
      /* return (
        this.storageTypePrice +
        this.storageQuantityPrice * this.storageQuantity +
        this.storageDurationPrice * this.storageDuration +
        this.servicesTypePrice +
        this.servicesQuantityPrice * this.servicesQuantity +
        this.servicesDurationPrice * this.servicesDuration
      ); */
      let sum = 0;
      this.priceEstimationData.forEach((element) => {
        sum += element.typeValue * element.deliveryValue;
        element.qunantity * 5;
      });
      return sum;
    },
  },
  watch: {
    // remove watch
    /* priceEstimationData: function (data) {
      if (data) {
        this.storageType = data.storageTypeName;
        this.storageTypePrice = data.storageTypeValue;
        this.storageQuantity = data.qunantity;
        this.storageDuration = data.duration;

        this.servicesType = data.servicesTypeName;
        this.servicesTypePrice = data.servicesTypeValue;
        this.servicesQuantity = data.qunantity;
        this.servicesDuration = data.durationServices;
      } else {
        this.storageType = "";
        this.storageQuantity = 0;
        this.storageDuration = 0;
        this.storageTypePrice = 0;

        this.servicesType = "";
        this.servicesQuantity = 0;
        this.servicesDuration = 0;
        this.servicesTypePrice = 0;
      }
    }, */
  },
  methods: {
    // move remove item methods to parent component
    removeItem(id) {
      this.$emit("remove-item", id);
    },
  },
};
</script>
<style scoped>
.calculator__estimation .card {
  /* height: 385px; */
}

.calculator__estimation .card .card-body {
  padding: 1rem 0.5rem;
}

.calculator__estimation .card .card-header {
  background-color: #3632a8;
  color: #fff;
}

.calculator__estimation .card .card-body .estimation-category .category-price {
  text-align: center;
  background-color: #fafafa;
  padding: 0.25rem;
}

.calculator__estimation .card .card-body table tbody tr td {
  font-size: 13px;
  font-weight: bold;
}

.calculator__estimation .card .card-body table tbody tr td span {
  font-weight: lighter;
}
</style>
