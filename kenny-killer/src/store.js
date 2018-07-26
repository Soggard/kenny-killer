import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countTotal: 0,
    killPerClick: 1,
    killPerSecond: 0
  },
  mutations: {
    ClickKenny: function (state) {
      state.countTotal += state.killPerClick
    },
    AutoKill: function (state) {
      state.countTotal += state.killPerSecond
    },
    UpgradeKps: function (state, value) {
      state.killPerSecond += value
    },
    UpgradeKpc: function (state, value) {
      state.killPerClick += value
    },
    SpendKills: function (state, value) {
      state.countTotal -= value
    },
    LoadGame: function (state, data) {
      state.countTotal = data['countTotal']
      state.killPerClick = data['killPerClick']
      state.killPerSecond = data['killPerSecond']
    }
  },
  actions: {
  },
  getters: {
    count (state) {
      return state.countTotal
    }
  }
})
