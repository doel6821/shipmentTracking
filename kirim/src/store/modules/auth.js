// src/store/modules/auth.js
import axios from 'axios';

export default {
  state: {
    isLoggedIn: false,
    user: null, // Untuk menyimpan informasi pengguna
  },
  mutations: {
    SET_LOGIN_STATUS(state, status) {
      state.isLoggedIn = status;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }, userData) {
      return axios.post('http://localhost:3000/login', userData)
        .then(response => {
          commit('SET_LOGIN_STATUS', true);
          commit('SET_USER', response.data.user);
          localStorage.setItem('token', response.data.accessToken); // Simpan token di localStorage
        })
        .catch(error => {
          console.error('Login failed:', error);
          throw error; // Lempar error agar bisa ditangani di komponen
        });
    },
    logout({ commit }) {
      commit('SET_LOGIN_STATUS', false);
      commit('SET_USER', null);
      localStorage.removeItem('token'); // Hapus token dari localStorage
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    user: (state) => state.user,
  },
};
