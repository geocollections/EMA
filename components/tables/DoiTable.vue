<template>
  <table-wrapper
    v-bind="{ showSearch }"
    :headers="headers"
    :items="items"
    :options="options"
    :count="count"
    v-on="$listeners"
  >
    <template #item.identifier="{ item }">
      <external-link
        v-if="item.identifier"
        @click.native="
          $openWindow(`http://doi.geocollections.info/${item.identifier}`)
        "
        >{{ item.identifier }}</external-link
      >
    </template>

    <template #item.datacite_created="{ item }">
      <div v-if="item.datacite_created">
        <div>
          {{ new Date(item.datacite_created).toISOString().split('T')[0] }}
        </div>
        <div
          v-if="
            item.datacite_updated &&
            item.datacite_created !== item.datacite_updated
          "
        >
          ({{ new Date(item.datacite_updated).toISOString().split('T')[0] }})
        </div>
      </div>
    </template>
  </table-wrapper>
</template>

<script>
import TableWrapper from '@/components/tables/TableWrapper.vue'
import ExternalLink from '~/components/ExternalLink'
export default {
  name: 'DoiTable',
  components: { ExternalLink, TableWrapper },
  props: {
    showSearch: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
    count: {
      type: Number,
      default: 0,
    },
    options: {
      type: Object,
      default: () => ({
        page: 1,
        itemsPerPage: 25,
        sortBy: [],
        sortDesc: [],
      }),
    },
  },
  data() {
    return {
      headers: [
        { text: this.$t('doi.identifier'), value: 'identifier' },
        { text: this.$t('doi.creators'), value: 'creators' },
        { text: this.$t('doi.reference_year'), value: 'reference_year' },
        { text: this.$t('doi.table_title'), value: 'title' },
        { text: this.$t('doi.resource'), value: 'resource' },
        { text: this.$t('doi.datacite_created'), value: 'datacite_created' },
      ],
    }
  },
}
</script>
