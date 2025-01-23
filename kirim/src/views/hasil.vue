<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="4" rounded="lg">
            <v-card-title class="text-h5 font-weight-bold primary--text">
              Shipment Tracker
            </v-card-title>
            <v-card-text>
              <SearchShipment @shipment-found="showShipmentDetails" />
              <ShipmentDetails :shipment="selectedShipment" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import SearchShipment from '../components/SearchShipment.vue';
  import ShipmentDetails from '../components/ShipmentDetails.vue';
  
  export default {
    components: {
      SearchShipment,
      ShipmentDetails,
    },
    data() {
      return {
        selectedShipment: null,
      };
    },
    methods: {
      showShipmentDetails(shipment) {
        this.selectedShipment = shipment;
      },
    },
  };
  </script>