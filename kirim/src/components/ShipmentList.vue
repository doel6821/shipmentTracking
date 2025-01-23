<template>
  <div>
    <v-card flat rounded="lg">
      <v-card-text>
        <v-form @submit.prevent="createShipment">
          <v-text-field v-model="newShipment.recipientName" label="Recipient Name" required />
          <v-text-field v-model="newShipment.recipientAddress" label="Recipient Address" required />
          <v-text-field v-model="newShipment.recipientEmail" label="Recipient Email" required type="email" />
          <v-text-field v-model="newShipment.recipientPhone" label="Recipient Phone" required />
          <v-spacer />
          <v-btn type="submit" color="primary" dark rounded x-large>Create Shipment</v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <v-list two-line subheader>
      <v-subheader>Existing Shipments</v-subheader>
      <v-list-item v-for="shipment in shipments" :key="shipment.id">
        <v-list-item-content>
          <v-list-item-title>{{ shipment.recipientName }}</v-list-item-title>
          <v-list-item-subtitle>--</v-list-item-subtitle> </v-list-item-content>
        <v-list-item-action>
          <v-btn text rounded @click="updateShipment(shipment.id)">Update Status</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newShipment: {
        recipientName: '',
        recipientAddress: '',
        recipientEmail: '',
        recipientPhone: '',
      },
      shipments: [],
    };
  },
  methods: {
    async createShipment() {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.post('http://localhost:3000/shipment', this.newShipment,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Tambahkan Authorization header
          },
        });
        console.log(response);
        alert(`Shipment created with id ${response.data.shipmentId}`);
        
        this.newShipment = { // Reset form after successful creation
          recipientName: '',
          recipientAddress: '',
          recipientEmail: '',
          recipientPhone: '',
        };
      } catch (error) {
        console.error('Error creating shipment:', error);
      }
    },
    async updateShipment(id) {
      try {
        await axios.put('http://localhost:3000/shipment', { id, status: 'Delivered' });
        alert('Shipment updated!');
      } catch (error) {
        console.error('Error updating shipment:', error);
      }
    },
  },
};
</script>