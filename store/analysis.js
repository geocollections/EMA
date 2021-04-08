import { getField, updateField } from 'vuex-map-fields'
import { ANALYSIS } from '~/constants'
const getDefaultState = () => {
  return {
    items: [],
    count: 0,
    options: ANALYSIS.options,
    filters: {
      byIds: {
        id: {
          value: '',
          type: 'text',
          lookUpType: 'contains',
          label: 'analysis.id',
          fields: ['id'],
        },
        depth: {
          value: [-20, 5000],
          type: 'range',
          lookUpType: 'range',
          label: 'analysis.depth',
          placeholders: ['depth.min', 'depth.max'],
          fields: ['depth'],
        },
      },
      allIds: ['id', 'depth'],
    },
  }
}

export const state = () => getDefaultState()

export const getters = {
  getField,
}

export const mutations = {
  updateField,
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_COUNT(state, count) {
    state.count = count
  },
  SET_OPTIONS(state, options) {
    state.options = options
  },
  RESET_FILTERS(state) {
    const defaultState = getDefaultState()

    state.filters = defaultState.filters
    state.options = { ...state.options, page: defaultState.options.page }
  },
}

export const actions = {
  resetAnalysisFilters({ commit }) {
    commit('RESET_FILTERS')
  },
  async quickSearchAnalyses(
    { commit, rootState, state },
    options = { ...state.options, page: 1 }
  ) {
    commit('SET_OPTIONS', options)

    const analysisResponse = await this.$services.sarvSolr.getResourceList(
      'analysis',
      {
        options,
        search: rootState.landing.search,
        queryFields: this.$getQueryFields(ANALYSIS.queryFields),
        searchFilters: {},
      }
    )
    commit('SET_ITEMS', analysisResponse.items)
    commit('SET_COUNT', analysisResponse.count)
  },
  async searchAnalyses(
    { commit, rootState, state },
    options = { ...state.options, page: 1 }
  ) {
    commit('SET_OPTIONS', options)

    const analysisResponse = await this.$services.sarvSolr.getResourceList(
      'analysis',
      {
        options,
        search: rootState.landing.search,
        queryFields: this.$getQueryFields(ANALYSIS.queryFields),
        searchFilters: state.filters.byIds,
      }
    )
    commit('SET_ITEMS', analysisResponse.items)
    commit('SET_COUNT', analysisResponse.count)
  },
}
