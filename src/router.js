import Vue from "vue";
import Router from "vue-router";
import List from "./components/List.vue";
import ListItem from "./components/ListItem.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/list",
      component: List,
      name: List
    },
    {
      path: "/list/:area",
      component: ListItem,
      name: "ListItem",
      props: true
    }
  ]
});
