<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="4" rounded="lg">
            <v-card-title class="primary--text font-weight-bold">Settings</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="saveSettings">
  
                <v-subheader>Account</v-subheader>
                <v-text-field v-model="settings.username" label="Username" outlined></v-text-field>
                <v-text-field v-model="settings.email" label="Email" type="email" outlined></v-text-field>
                <v-text-field v-model="settings.newPassword" label="New Password" type="password" outlined></v-text-field>
                <v-text-field v-model="settings.confirmPassword" label="Confirm New Password" type="password" outlined></v-text-field>
  
                <v-divider class="my-4"></v-divider>
                <v-subheader>Preferences</v-subheader>
                <v-switch v-model="settings.notifications" label="Enable Notifications"></v-switch>
                <v-select v-model="settings.language" :items="['English', 'Indonesian']" label="Language" outlined></v-select>
  
                <v-divider class="my-4"></v-divider>
                <div class="mt-4">
                  <v-btn type="submit" color="primary">Save Changes</v-btn>
                  <div v-if="successMessage" class="green--text mt-2">{{ successMessage }}</div>
                  <div v-if="errorMessage" class="red--text mt-2">{{ errorMessage }}</div>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
      name: "SettingsView",
    data() {
      return {
        settings: {
          username: 'admin', // Placeholder data
          email: 'admin@example.com', // Placeholder data
          newPassword: '',
          confirmPassword: '',
          notifications: true,
          language: 'English',
        },
        successMessage: null,
        errorMessage: null,
      };
    },
    methods: {
      saveSettings() {
        // Validasi password
        if (this.settings.newPassword !== this.settings.confirmPassword) {
          this.errorMessage = "Passwords do not match.";
          this.successMessage = null;
          return;
        }
  
        // Kirim data ke backend (ganti dengan endpoint API Anda)
        // axios.post('/api/settings', this.settings)
        //   .then(response => {
        //     this.successMessage = "Settings saved successfully.";
        //     this.errorMessage = null;
        //   })
        //   .catch(error => {
        //     console.error("Error saving settings:", error);
        //     this.errorMessage = "Error saving settings.";
        //     this.successMessage = null;
        //   });
        console.log("Data settings yang akan di simpan:", this.settings)
        this.successMessage = "Settings saved successfully.";
        this.errorMessage = null;
      },
    },
  };
  </script>