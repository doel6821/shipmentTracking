<template>
  <v-container fluid class="dashboard-container">
    <v-row no-gutters>
      <v-col cols="12" sm="3" class="sidebar">
        <v-navigation-drawer permanent color="grey-lighten-4">
          <v-list density="compact" nav>
            <v-list-item
              v-for="item in menuItems"
              :key="item.title"
              :to="{ name: item.routeName }" 
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="12" sm="9" class="content">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'DashboardView', // Add the name here!
  data() {
    return {
      menuItems: [
          { title: 'Home', icon: 'mdi-home', routeName: 'DashboardHome' },
          { title: 'Create Shipments', icon: 'mdi-truck', routeName: 'ManageShipment' },
          { title: 'Input Barang', icon: 'mdi-package-variant-closed', routeName: 'InputBarang' },
          { title: 'Settings', icon: 'mdi-cogs', routeName: 'Settings' },
          { title: 'Tracking', icon:'mdi-map-marker', routeName:'Searching'},
          { title: 'Detail shipment', icon: 'mdi-package', routeName:'detailshipment'},
        ],
    };
  },
};
</script>

<style scoped>
/* Styles... */
</style>