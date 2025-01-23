<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="4" rounded="lg">
            <v-card-title class="primary--text font-weight-bold">Input Data Barang</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="saveBarang">
                <v-text-field v-model="barang.id_barang" label="ID Barang" required outlined></v-text-field>
                <v-text-field v-model="barang.nama_barang" label="Nama Barang" required outlined></v-text-field>
                <v-select v-model="barang.kategori" :items="kategoriItems" label="Kategori" required outlined></v-select>
                <v-text-field v-model="barang.berat" label="Berat (kg)" type="number" required outlined></v-text-field>
                <v-text-field v-model="barang.packing" label="Packing" outlined></v-text-field>
                <v-date-picker v-model="barang.tanggal_in" label="Tanggal Masuk" required outlined></v-date-picker>
                <v-text-field v-model="barang.ukuran" label="Ukuran" outlined></v-text-field>
                <v-textarea v-model="barang.keterangan" label="Keterangan" outlined></v-textarea>
  
                <div class="mt-4">
                  <v-btn color="primary" @click="addBarang">Tambah</v-btn>
                  <v-btn color="success" type="submit" class="ml-2">Simpan</v-btn>
                  <v-btn color="warning" @click="clearForm" class="ml-2">Clear</v-btn>
                </div>
                <div v-if="successMessage" class="green--text mt-2">{{ successMessage }}</div>
                <div v-if="errorMessage" class="red--text mt-2">{{ errorMessage }}</div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        barang: {
          id_barang: '',
          nama_barang: '',
          kategori: null,
          berat: null,
          packing: '',
          tanggal_in: null,
          ukuran: '',
          keterangan: '',
        },
        kategoriItems: ['Elektronik', 'Pakaian', 'Makanan', 'Lainnya'], // Contoh data kategori
        successMessage: null,
        errorMessage: null,
      };
    },
    methods: {
      addBarang() {
        // Logika untuk menambahkan data barang ke array atau state lain jika diperlukan
        console.log('Barang ditambahkan:', this.barang);
        this.clearForm();
      },
      async saveBarang() {
        try {
          const response = await axios.post('http://localhost:3000/shipment', this.barang); // Ganti dengan endpoint API Anda
          console.log("berhasil input", response.data)
          this.successMessage = 'Data barang berhasil disimpan.';
          this.clearForm();
        } catch (error) {
          console.error('Error menyimpan barang:', error);
          this.errorMessage = 'Terjadi kesalahan saat menyimpan data.';
        }
      },
      clearForm() {
        this.barang = {
          id_barang: '',
          nama_barang: '',
          kategori: null,
          berat: null,
          packing: '',
          tanggal_in: null,
          ukuran: '',
          keterangan: '',
        };
        this.successMessage = null;
        this.errorMessage = null;
      },
    },
  };
  </script>