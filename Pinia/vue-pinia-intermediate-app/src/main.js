import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

// todo: Create Pinia Instance
const pinia = createPinia();

const app = createApp(App);

// todo: Use Pinia Instance
app.use(pinia);
app.mount("#app");
// createApp(App).mount("#app");
