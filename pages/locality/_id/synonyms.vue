<template>
  <synonym-table
    :items="synonyms"
    :count="count"
    :options="options"
    @update="handleUpdate"
  />
</template>

<script>
import { isNil } from 'lodash'
import SynonymTable from '~/components/tables/SynonymTable.vue'
import { SYNONYM } from '~/constants'
export default {
  components: { SynonymTable },
  props: {
    locality: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      synonyms: [],
      count: 0,
      options: SYNONYM.options,
    }
  },
  methods: {
    async handleUpdate(tableState) {
      this.options = tableState.options
      const synonymResponse = await this.$services.sarvREST.getResourceList(
        'locality_synonym',
        {
          ...tableState,
          isValid: isNil(this.locality),
          defaultParams: {
            locality: this.locality,
          },
          queryFields: this.$getQueryFields(SYNONYM.queryFields),
        }
      )
      this.synonyms = synonymResponse.items
      this.count = synonymResponse.count
    },
  },
}
</script>
