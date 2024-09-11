import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import App from "@/App.vue";
import apolloClient from "@/utilities/apollo-client";
import router from "@/router";
import "@/assets/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});
app.use(router);
app.mount("#app");
