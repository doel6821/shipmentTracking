<template>
  <v-container class="welcome-page fill-height d-flex align-center justify-center">
    <main class="text-center">
      <h1 class="welcome-title">Selamat Datang di Dashboard Panel </h1>
      <p class="welcome-subtitle">
        Kelola data Anda dengan mudah dan efisien menggunakan panel ini.
      </p>
    </main>
  </v-container>
</template>

<script>
export default {
  name: "WelcomePage",
};
</script>

<style scoped>
.welcome-page {
  background: linear-gradient(135deg, #2193b0, #6dd5ed);
  color: white;
}

.welcome-title {
  font-size: 3rem; /* Bisa gunakan ukuran font responsif dengan media queries */
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Bayangan lebih halus */
  margin-bottom: 1.5rem; /* Menggunakan rem untuk margin */
}

.welcome-subtitle {
  font-size: 1.25rem; /* Bisa gunakan ukuran font responsif dengan media queries */
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15); /* Bayangan lebih halus */
  max-width: 600px; /* Mencegah teks terlalu lebar di layar besar */
  margin: 0 auto; /* Memusatkan teks secara horizontal */
}

.fill-height {
    min-height: 100vh; /* Memastikan container mengisi tinggi viewport */
    display: flex; /* Memastikan flexbox berfungsi dengan baik */
}
</style>