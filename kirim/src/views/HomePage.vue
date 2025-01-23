<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title class="text-h6 font-weight-bold">
        <v-icon icon="mdi-truck-fast" class="mr-2"></v-icon> Shipment Tracker
      </v-app-bar-title>
    </v-app-bar>

    <v-main class="main-content">
      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card elevation="8" rounded="lg" class="pa-6">
              <SearchShipment />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app color="grey-darken-3" padless>
      <v-col class="text-center py-4" cols="12">
        &copy; {{ new Date().getFullYear() }} Kelompok 5. All rights reserved. |
        <a href="/login" class="text-decoration-none white--text">Terms of Service</a> |
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import SearchShipment from '../views/SeachShipment.vue';

export default {
  components: { SearchShipment },
};
</script>

<style scoped>
.main-content {
  background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20230625/pngtree-minimalistic-search-bar-element-3d-rendered-illustration-on-light-blue-background-image_3677203.jpg"); /* Replace with your image URL */
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center; /* Vertically center content */
  min-height: calc(100vh - 112px); /* Adjust 112px if app bar or footer height changes */
}
</style>