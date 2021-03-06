<template>
  <table-wrapper
    v-bind="{ showSearch }"
    :headers="headers"
    :items="items"
    :options="options"
    :count="count"
    v-on="$listeners"
  >
    <template #item.preparation_number="{ item }">
      <nuxt-link
        class="text-link"
        :to="localePath({ name: 'preparation-id', params: { id: item.id } })"
      >
        {{ item.preparation_number }}
      </nuxt-link>
    </template>
    <template #item.locality="{ item }">
      <nuxt-link
        v-if="item.locality_en"
        class="text-link"
        :to="
          localePath({
            name: 'locality-id',
            params: { id: item.locality_id },
          })
        "
      >
        {{ $translate({ et: item.locality, en: item.locality_en }) }}
      </nuxt-link>
    </template>
    <template #item.depth="{ item }">
      <div>
        <span>{{ item.depth }}</span>
        <span v-if="item.depth_interval">({{ item.depth_interval }})</span>
      </div>
    </template>
    <template #item.stratigraphy="{ item }">
      <span v-if="item.stratigraphy_id || item.lithostratigraphy_id">
        <nuxt-link
          v-if="item.stratigraphy_id"
          class="text-link"
          :to="
            localePath({
              name: 'stratigraphy-id',
              params: { id: item.stratigraphy_id },
            })
          "
        >
          {{
            $translate({
              et: item.stratigraphy,
              en: item.stratigraphy_en,
            })
          }}
        </nuxt-link>

        <span v-if="item.lithostratigraphy_id"> | </span>
        <external-link
          v-if="item.lithostratigraphy_id"
          class="font-italic"
          @click.native="
            $openWindow(
              `http://stratigraafia.info/term/${item.lithostratigraphy_id}`
            )
          "
        >
          {{
            $translate({
              et: item.lithostratigraphy,
              en: item.lithostratigraphy_en,
            })
          }}
        </external-link>
      </span>
    </template>
  </table-wrapper>
</template>

<script>
import { round } from 'lodash'
import TableWrapper from '~/components/tables/TableWrapper.vue'
import ExternalLink from '~/components/ExternalLink'
export default {
  name: 'PreparationTable',
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
        { text: this.$t('preparation.id'), value: 'id' },
        {
          text: this.$t('preparation.preparation_number'),
          value: 'preparation_number',
        },
        { text: this.$t('preparation.locality'), value: 'locality' },
        { text: this.$t('preparation.depth'), value: 'depth' },
        {
          text: this.$t('preparation.stratigraphy'),
          value: 'stratigraphy',
        },
        { text: this.$t('preparation.agent'), value: 'agent' },
        { text: this.$t('preparation.mass'), value: 'mass' },
      ],
    }
  },
  methods: {
    round,
  },
}
</script>
