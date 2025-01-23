

<template>
  <v-app-bar app color="primary" dark>
    <!-- Menu Icon -->
    <v-app-bar-nav-icon>
      <v-icon icon="mdi-menu"></v-icon>
    </v-app-bar-nav-icon>

    <!-- Title -->
    <v-app-bar-title class="text-h6 font-weight-bold">TTrack</v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- Kondisi Login -->
    <template v-if="isLoggedIn">
      <!-- Tampilkan Username -->
      <v-chip class="mr-2">{{ user?.username || 'Guest' }}</v-chip>

      <!-- Tombol Logout -->
      <v-btn @click="handleLogout" prepend-icon="mdi-logout" color="white" variant="text">
        Logout
      </v-btn>
    </template>
    <v-else>
      <!-- Tombol Login -->
      <v-btn to="/login" prepend-icon="mdi-login" color="white" variant="text">
        Login
      </v-btn>
    </v-else>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppNavbar',
  computed: {
    ...mapGetters('auth', ['isLoggedIn', 'user']), // Akses getter dari modul auth
  },
  methods: {
    ...mapActions('auth', ['logout']), // Akses aksi logout dari modul auth

    async handleLogout() {
      try {
        await this.logout(); // Panggil aksi logout dari Vuex
        this.$router.push('/login'); // Redirect ke halaman login
      } catch (error) {
        console.error('Logout failed:', error);
        this.$toast?.error('Logout gagal. Silakan coba lagi.'); // Opsional: Gunakan toast
      }
    },
  },
};
</script>
