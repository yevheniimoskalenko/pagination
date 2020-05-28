<template>
  <div>
    <div v-for="(ticket, index) in tickets" :key="index" class="ticket">
      {{ ticket }}
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
export default {
  components: {},
  async asyncData({ query, params, store }) {
    const paramsPage = {
      page: query.page || 1,
      id: params.id
    }
    const tickets = await store.dispatch('tickets', paramsPage)
    return { tickets: tickets.tickets, total: tickets.pages }
  },
  data() {
    return {
      page: +this.$route.query.page || 1
    }
  },
  methods: {
    async changeHendler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`)
      const paramsPage = {
        page: this.$route.query.page || 1,
        id: this.$route.params.id
      }

      const load = await this.$store.dispatch('tickets', paramsPage)
      this.tickets = load.tickets
    }
  }
}
</script>
