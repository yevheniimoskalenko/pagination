<template>
  <div>
    <div v-for="(ticket, index) in tickets" :key="index" class="ticket">
      {{ ticket.number_tikets }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tickets: {
      type: Array,
      required: true
    }
  }
}
</script>
