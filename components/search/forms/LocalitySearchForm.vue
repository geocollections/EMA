<template>
  <v-form @submit.prevent="handleSearch">
    <global-search />
    <div class="text-right">
      <reset-search-button @click="handleReset" />
      <search-button />
    </div>
    <text-field v-model="name" :label="$t(filters.byIds.name.label)" />

    <text-field v-model="country" :label="$t(filters.byIds.country.label)" />

    <text-field
      v-model="stratigraphy"
      :label="$t(filters.byIds.stratigraphy.label)"
    />

    <text-field
      v-model="reference"
      :label="$t(filters.byIds.reference.label)"
    />
  </v-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'

import GlobalSearch from '../GlobalSearch.vue'
import ResetSearchButton from '../ResetSearchButton.vue'
import SearchButton from '../SearchButton.vue'
import TextField from '~/components/fields/TextField.vue'

export default {
  name: 'LocalitySearchForm',
  components: {
    TextField,
    GlobalSearch,
    ResetSearchButton,
    SearchButton,
  },
  computed: {
    ...mapState('locality', ['filters']),
    ...mapFields('locality', {
      name: 'filters.byIds.name.value',
      country: 'filters.byIds.country.value',
      stratigraphy: 'filters.byIds.stratigraphy.value',
      reference: 'filters.byIds.reference.value',
    }),
  },
  methods: {
    ...mapActions('locality', ['searchLocalities', 'resetLocalityFilters']),
    ...mapActions('landing', ['resetSearch']),
    handleSearch(e) {
      this.searchLocalities()
    },
    handleReset(e) {
      this.resetSearch()
      this.resetLocalityFilters()
      this.searchLocalities()
    },
  },
}
</script>