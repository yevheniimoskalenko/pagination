<template>
  <div>
    <contant-pagination :tickets="tickets" />
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
import contantPagination from '@/components/contant.paginatio.vue'
import methodsMixins from '@/components/mixins/pagination.mixin.js'
export default {
  components: { contantPagination },
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
