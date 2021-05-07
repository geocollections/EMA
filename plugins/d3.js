import Vue from 'vue'
import * as d3 from 'd3'

const d3Plugin = {
  install(Vue, options) {
    // Expose d3
    // eslint-disable-next-line no-undef
    Vue.prototype.$d3 = d3
  },
}

Vue.use(d3Plugin)
