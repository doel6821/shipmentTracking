<template>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="8" md="6" offset-sm="2" offset-md="3">
          <v-card elevation="4" rounded="lg">
            <v-card-title class="text-h5 font-weight-bold primary--text">Shipment Details</v-card-title>
            <v-card-text v-if="shipment">
              <v-list two-line>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Shipment ID</v-list-item-title>
                    <v-list-item-subtitle>{{ shipment.id }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Status</v-list-item-title>
                    <v-list-item-subtitle>{{ shipment.status }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Recipient Name</v-list-item-title>
                    <v-list-item-subtitle>{{ shipment.recipientName }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Recipient Address</v-list-item-title>
                    <v-list-item-subtitle>{{ shipment.recipientAddress }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Recipient Email</v-list-item-title>
                    <v-list-item-subtitle>{{ shipment.recipientEmail }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Recipient Phone</v-list-item-title>
                    <v-list-item-subtitle>{{ shipment.recipientPhone }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-card-text v-else>
              <p class="text-center">No shipment details found.</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    props: {
      shipment: null, // Receive shipment data as a prop
    },
  };
  </script>