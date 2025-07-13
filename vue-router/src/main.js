import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// todo: Import Router
import router from "./router/router";

// todo: Use Router
createApp(App).use(router).mount("#app");
