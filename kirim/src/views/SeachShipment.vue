<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="20" offset-md="-5" >
          <v-card flat outlined rounded="lg">
            <v-card-text>
              <v-text-field
                v-model="sn"
                label="Enter Shipment Number in here  and please enter or push search button"
                placeholder="Enter SN"
                outlined
                full-width
              />
              <v-btn
                color="primary"
                dark
                rounded
                x-large
                @click="searchShipment"
              >
                Search
              </v-btn>
            </v-card-text>
          </v-card>
          <div v-if="shipment">
            <p>
              <strong>Status:</strong> {{ shipment.status }}
            </p>
            <p>
              <strong>Recipient Name:</strong> {{ shipment.recipientName }}
            </p>
            <p>
              <strong>Recipient Address:</strong> {{ shipment.recipientAddress }}
            </p>
            <p>
              <strong>Recipient Email:</strong> {{ shipment.recipientEmail }}
            </p>
            <p>
              <strong>Recipient Phone Number:</strong> {{ shipment.recipientPhone }}
            </p>
            <div>
              <p>
                <strong>New Status :</strong> 
              </p>
              <select v-model="updateRequest.status">
                  <option value="">-- Pilih Status --</option>
                  <option value="On Transit"> On Transit </option>
                  <option value="On Delivery"> On Delivery </option>
                  <option value="Delivered"> Delivered </option>
              </select>
            </div> 
            
            <div>
            <v-btn 
                color="primary"
                dark
                rounded
                x-large
                @click="updateShipment"
              >
            Update
              </v-btn>
            </div>    
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      sn: '',
      successMessage: null,
      errorMessage: null,
      shipment: null,
      updateRequest: {
          id: '',
          status: '',
        },
    };
  },
  methods: {
    async searchShipment() {
      try {
        const response = await axios.get(`http://localhost:3000/shipment/${this.sn}`);
        this.shipment = response.data;
      } catch (error) {
        console.error('Error fetching shipment:', error);
      }
    },
    async updateShipment() {
      try {
        this.updateRequest.id = this.sn
        const token = localStorage.getItem('token'); 
        const response = await axios.put(`http://localhost:3000/shipment`, this.updateRequest,{
          headers: {
            Authorization: `Bearer ${token}`, // Tambahkan Authorization header
          },
        });
        console.log("berhasil input", response.data)
        alert(`Status berhasil diupdate.`);
        this.shipment.status = this.updateRequest.status
        this.successMessage = 'Status berhasil diupdate.';
      } catch (error) {
        this.errorMessage = 'Terjadi kesalahan saat update.';
        alert(`Error : Terjadi kesalahan saat update status pengiriman.}`);
        console.error('Error fetching shipment:', error);
      }
    },
  },
};
</script>

<style scoped>
/* You can add more specific styles here if needed */
</style>