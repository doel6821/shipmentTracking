<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="4" rounded="lg">
          <v-card-title class="text-h5 font-weight-bold primary--text">
            Create Shipments
          </v-card-title>
          <v-card-subtitle>Please enter recipient information below</v-card-subtitle>
          <v-card-text>
            <ShipmentList />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ShipmentList from '../components/ShipmentList.vue';

export default {
  components: { ShipmentList },
};
</script>