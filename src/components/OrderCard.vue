<template>
  <div class="card mt-5 mb-2 p-4">
    <div class="columns">
      <div class="column">
        <h1>
          Nome: <strong>{{ props.orderInfo?.name }}</strong>
        </h1>
      </div>

      <div class="column">
        Contato: <strong>{{ orderInfo?.phone }}</strong>
      </div>
      <div class="column">
        Status: <strong>{{ orderInfo?.status }}</strong>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        Endereço: <strong>{{ orderInfo?.address }}</strong>
      </div>
      <div class="column">
        Entrega: <strong>{{ orderInfo?.delivery_date }}</strong>
      </div>
      <div class="column">
        Data: <strong>{{ orderInfo?.create_at }}</strong>
      </div>
    </div>
    <hr />

    <!-- loop -->
    <div v-for="(item, index) in orderInfo?.items" :key="index">
      <div class="is-flex is-justify-content-space-around">
        <div class="">{{ item.name }}</div>
        <div class="">{{ item.quantity }}</div>
      </div>
    </div>
    <!-- loop-end -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  orderInfo: {
    type: Object,
  },
});
</script>
