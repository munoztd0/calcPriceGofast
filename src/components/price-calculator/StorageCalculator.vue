<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="submitFormStorage">
          <div class="form-group">
            <div for="formGroupExampleInput">Catégorie</div>
            <div
              class="form-check form-check-inline"
              v-for="data in storageTypes"
              v-bind:key="data.name"
            >
              <input
                class="form-check-input"
                type="radio"
                name="storage-type"
                :id="'storage-' + data.name.toLowerCase()"
                :value="data.name"
                v-model="selectedStorageType"
              />
              <label
                class="form-check-label"
                :for="'storage-' + data.name.toLowerCase()"
                >{{ data.name }}</label
              >
            </div>
          </div>
          <div class="form-group">
            <div for="formGroupExampleInput">Type de livraison</div>
            <div
              class="form-check form-check-inline"
              v-for="data in deliveryTypes"
              v-bind:key="data.name"
            >
              <input
                class="form-check-input"
                type="radio"
                name="delivery-type"
                :id="'delivery-' + data.name.toLowerCase()"
                :value="data.name"
                v-model="selectedDeliveryType"
              />
              <label
                class="form-check-label"
                :for="'delivery-' + data.name.toLowerCase()"
                >{{ data.name }}</label
              >
            </div>
          </div>
          <div class="form-group">
            <div for="formGroupExampleInput">
              Poids supplémentaire (si plus de 2 kg)
            </div>
            <base-quantity @updateQuantity="updateQuantity"></base-quantity>
          </div>

          <div class="form-group mt-4">
            <button class="btn btn-primary btn-block">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BaseQuantity from "../base/BaseQuantity.vue";
export default {
  components: {
    BaseQuantity,
  },
  data() {
    return {
      storageTypes: [
        {
          name: "Simple",
          value: 15,
        },
        {
          name: "Cargo",
          value: 30,
        },
      ],
      deliveryTypes: [
        {
          name: "Rapide (en 1 heure)",
          value: 1,
        },
        {
          name: "Urgent (en 30 minutes)",
          value: 2,
        },
      ],
      quantiti: 0,
      selectedStorageType: "",
      selectedDeliveryType: "",
    };
  },
  methods: {
    submitFormStorage() {
      if (this.selectedStorageType) {
        var selectedStorageType = this.storageTypes.find(
          (x) => x.name === this.selectedStorageType
        );
        var selectedDeliveryType = this.deliveryTypes.find(
          (x) => x.name === this.selectedDeliveryType
        );
        if (selectedStorageType) {
          var data = {
            // remove storage blabla to make it dynamics
            // add type key to identify
            type: "Livraison",
            typeName: selectedStorageType.name,
            typeValue: selectedStorageType.value,
            deliveryName: selectedDeliveryType.name,
            deliveryValue: selectedDeliveryType.value,
            qunantity: this.quantiti,
            quantityPrice: 10,
          };
          this.$emit("set-price-estimation-data", data);
        }
      }
    },
    updateQuantity(val) {
      this.quantiti = val;
    },
    updateDuration(val) {
      this.duration = val;
    },
  },
};
</script>
