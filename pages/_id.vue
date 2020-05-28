<template>
  <div>
    <div v-for="(ticket, index) in tickets" :key="index" class="ticket">
      {{ ticket.number_tikets }}
    </div>
    <el-pagination
      background=""
      layout="prev, pager, next"
      :page-size="20"
      :total="total"
      :current-page.sync="page"
      @current-change="changeHendler(page)"
    ></el-pagination>
  </div>
</template>

<script>
import methodsMixins from '@/components/mixins/pagination.mixin.js'
export default {
  components: {},
  mixins: [methodsMixins],
  async asyncData({ query, params, store }) {
    const paramsPage = {
      page: query.page || 1,
      id: params.id
    }
    const tickets = await store.dispatch('tickets', paramsPage)
    return { tickets: tickets.tickets, total: tickets.pages }
  }
}
</script>
