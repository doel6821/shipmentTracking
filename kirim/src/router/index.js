import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import ManageShipmentPage from '../views/ManageShipmentPage.vue';
import InputBarang from '../components/InputBarang.vue'; 
import DashboardView from '../views/Dashb.vue';
import DashboardHome from '../views/DashboardHome.vue';
import Settings from '../views/Settings.vue'; 
import SeachShipment from '@/views/SeachShipment.vue';
// import ShipmentList from '@/components/ShipmentList.vue';
import ShipmentDetails from '@/components/ShipmentDetails.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/manage', component: ManageShipmentPage },
  { path: '/input-barang',component: InputBarang,}, 
  { path: '/search', name: 'Searching', component:SeachShipment},
  { path: '/manage-shipment', name: 'ManageShipment', component: ManageShipmentPage},
  { path: '/input-barang', name: 'InputBarang', component: InputBarang},
  { path: '/detailshipment', name: 'detailshipment', component: ShipmentDetails},


  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    children: [
      { path: 'home', name: 'DashboardHome', component: DashboardHome },
      { path: 'settings', name: 'Settings', component: Settings }, // Rute untuk Settings
      { path: '', redirect: { name: 'DashboardHome' } }, 
      { path: '/input-barang',component: InputBarang,}, 
      { path: '/search', name: 'Searching', component:SeachShipment},
      { path: '/manage-shipment', name: 'ManageShipment', component: ManageShipmentPage},
      { path: '/input-barang', name: 'InputBarang', component: InputBarang},
      { path: '/detailshipment', name: 'detailshipment', component: ShipmentDetails},
    ],

  }
  
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
