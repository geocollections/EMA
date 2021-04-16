<template>
  <v-form @submit.prevent="handleSearch">
    <global-search />
    <div class="text-right">
      <reset-search-button @click="handleReset" />
      <search-button />
    </div>
    <text-field v-model="name" :label="$t(filters.byIds.name.label)" />
    <text-field
      v-model="repository"
      :label="$t(filters.byIds.repository.label)"
    />
    <text-field v-model="country" :label="$t(filters.byIds.country.label)" />
    <text-field v-model="storage" :label="$t(filters.byIds.storage.label)" />
    <range-text-field v-model="boxes" :label="$t(filters.byIds.boxes.label)" />
  </v-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'

import GlobalSearch from '../GlobalSearch.vue'
import ResetSearchButton from '../ResetSearchButton.vue'
import SearchButton from '../SearchButton.vue'
import RangeTextField from '~/components/fields/RangeTextField.vue'
import TextField from '~/components/fields/TextField.vue'

export default {
  name: 'DrillcoreSearchForm',
  components: {
    TextField,
    RangeTextField,
    GlobalSearch,
    ResetSearchButton,
    SearchButton,
  },
  computed: {
    ...mapState('drillcore', ['filters']),
    ...mapFields('drillcore', {
      name: 'filters.byIds.name.value',
      repository: 'filters.byIds.repository.value',
      country: 'filters.byIds.country.value',
      boxes: 'filters.byIds.boxes.value',
      storage: 'filters.byIds.storage.value',
    }),
  },
  methods: {
    ...mapActions('drillcore', ['searchDrillcores', 'resetDrillcoreFilters']),
    ...mapActions('landing', ['resetSearch']),
    handleReset(e) {
      this.resetSearch()
      this.resetDrillcoreFilters()
      this.searchDrillcores()
    },
    handleSearch(e) {
      this.searchDrillcores()
    },
  },
}
</script>