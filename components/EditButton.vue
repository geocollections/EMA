<template>
  <v-tooltip bottom>
    <template #activator="{ on }">
      <v-btn
        icon
        dark
        color="deep-orange darken-2"
        v-on="on"
        @click="handleClick"
      >
        <v-icon>mdi-square-edit-outline</v-icon>
      </v-btn>
    </template>
    <span>{{ $t('common.linkToEdit') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'EditButton',
  fetchOnServer: false,
  data() {
    return {
      isLoggedIn: false,
    }
  },
  async fetch() {
    // NOTE: Should think over if we want to show the edit button based on the login state
    // const isLoggedInRespones = await this.$services.sarvRwapi.isLoggedIn()
    // this.isLoggedIn = !!isLoggedInRespones?.results?.success
  },
  computed: {
    style() {
      return ` z-index: 4;`
    },

    table() {
      return this.$route.name.substring(0, this.$route.name.indexOf('-'))
    },
  },
  created() {
    // this.interval = setInterval(() => this.refreshIsLoggedIn(), 60000)
  },
  beforeDestroy() {
    // clearInterval(this.interval)
  },
  methods: {
    refreshIsLoggedIn() {
      this.$fetch()
    },

    handleClick() {
      let table = this.table
      if (table === 'photo' || table === 'file') table = 'attachment'
      this.$openEdit(table, this.$route.params.id)
    },
  },
}
</script>
