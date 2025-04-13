import { createApp } from "vue";
import App from "./App.vue";
import './style.css'; 

// Inportacion de vuetify

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Creacion de la instancia de vuetify
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(vuetify);
app.mount("#app");
