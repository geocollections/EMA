<template>
  <v-fab-transition>
    <v-btn
      v-show="showFab"
      v-scroll="onScroll"
      fab
      small
      color="primary"
      dark
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'ScrollTopFab',
  data: () => ({
    showFab: false,
  }),
  methods: {
    onScroll(event) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || event.target.scrollTop || 0

      this.showFab = top > 400
    },

    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>
