<template>
  <div>
    <v-card>
      <v-card-title>d3 testing</v-card-title>

      <v-card-text>
        <v-row>
          <v-col cols="12" sm="3">
            <v-card>
              <v-card-title>Chart settings</v-card-title>
              <v-card-text>Chart params here</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="9">
            <div class="chart"></div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    locality: {
      type: Number,
      default: null,
    },
    localityObject: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    console.log(this.$d3)
  },
}
</script>

<style scoped></style>
