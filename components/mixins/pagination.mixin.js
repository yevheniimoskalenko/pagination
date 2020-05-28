/* eslint-disable no-unused-vars */
import _ from 'lodash'
export default {
  data() {
    return {
      page: +this.$route.query.page || 1
    }
  },
  methods: {
    async changeHendler(page) {
      const paramsPage = {
        page: this.page || 1,
        id: this.$route.params.id
      }
      const load = await this.$store.dispatch('tickets', paramsPage)
      this.tickets = load.tickets
      this.$router.push(`${this.$route.path}?page=${page}`)
    }
  }
}
