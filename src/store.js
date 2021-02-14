import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: []
  },
  mutations: {
    SET_COUNTRIES_TO_STATE: (state, countries) => {
      state.countries = countries;
    }
  },
  actions: {
    GET_COUNTRIES_FROM_API({ commit }) {
      const url = "https://restcountries.eu/rest/v2/all";
      axios(url, {
        method: "GET"
      })
        .then((countries) => {
          commit("SET_COUNTRIES_TO_STATE", countries.data);
          console.log(countries.data)
          return countries;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    }
  },
  getters: {
    COUNTRIES(state) {
      return state.countries;
    },
    countryByArea: (state) => (area) =>
      state.countries.find((country) => country.area === area)
  }
});
