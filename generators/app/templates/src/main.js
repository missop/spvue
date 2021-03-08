import { createApp } from "vue";

import routers from "/@/routers";
import store from "/@/store";

import App from "./App.vue";
import "./index.css";

createApp(App).use(routers).use(store).mount("#app");
