<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card elevation="8" rounded="lg" class="pa-6">
          <v-card-title class="primary--text font-weight-bold">Login</v-card-title>
          <v-form @submit.prevent="login">
            <v-text-field v-model="username" label="Username" outlined required></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              outlined
              required
            ></v-text-field>
            <v-btn type="submit" color="primary" block class="mt-4">Login</v-btn>
            <div v-if="loginError" class="red--text mt-2">Invalid username or password</div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      loginError: false,
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'admin123') {
        // Simpan status login (misalnya di localStorage)
        localStorage.setItem('token', 'true');
        this.$router.push('/dashboard');
      } else {
        this.loginError = true;
      }
    },
  },
};
</script>