<template>
  <v-app>
    <v-main class="background">
      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12 pa-6" rounded="lg">
              <v-card-title class="text-center justify-center">
                <h4 class="text-h4 font-weight-bold">TTrack Sistem</h4>
                <h3 class="text-h8 font-weight-bold">Login</h3>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="username"
                  label="Username"
                  required
                  prepend-icon="mdi-account"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                  prepend-icon="mdi-lock"
                ></v-text-field>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn color="primary" @click="login" :loading="loading" witdh=100px>
                  <span v-if="!loading">Login</span>
                  <span v-else>Logging in...</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false, // Tambahkan properti loading
    };
  },
  methods: {
    async login() {
      this.loading = true; // Set loading ke true saat login dimulai
      try {
        const response = await axios.post('http://localhost:3000/login', {
          username: this.username,
          password: this.password,
        });
        console.log('Login successful:', response.data);
        localStorage.setItem('token', response.data.accessToken);
        // Redirect or perform other actions after successful login
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Login failed:', error);
        // Handle error, e.g., display an error message
      } finally {
        this.loading = false; // Set loading kembali ke false setelah selesai (berhasil atau gagal)
      }
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url("https://t3.ftcdn.net/jpg/04/92/48/38/360_F_492483827_1ZroF5jdz8ZvYlpsjT90Hb3kxytJ9AQI.jpg"); /* Ganti dengan URL gambar Anda */
  background-size: cover;
  background-repeat: no-repeat;
  display: flex; /* Ensure content is centered vertically */
  min-height: 100vh; /* Ensure full viewport height is covered */
}
</style>