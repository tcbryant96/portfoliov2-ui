<template>
  <nav class="bg-gray-900 text-white shadow-md">
    <div class="container mx-auto flex justify-between items-center p-4">
      <!-- Logo/Brand -->
      <div class="text-3xl font-bold">
        <router-link to="/" class="hover:text-gray-400"
          >MyPortfolio</router-link
        >
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-6">
        <router-link to="/" class="hover:text-gray-400 transition"
          >Home</router-link
        >
        <router-link to="/projects" class="hover:text-gray-400 transition"
          >Projects</router-link
        >
        <router-link to="/technologies" class="hover:text-gray-400 transition"
          >Technologies</router-link
        >
        <router-link to="/contact" class="hover:text-gray-400 transition"
          >Contact</router-link
        >
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-2xl">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div v-if="false" class="fixed inset-0 bg-gray-900 bg-opacity-75 z-50">
          <div
            class="flex flex-col items-center justify-center h-full space-y-6"
          >
            <router-link
              to="/"
              class="text-2xl text-white hover:text-gray-400 transition"
              >Home</router-link
            >
            <router-link
              to="/projects"
              class="text-2xl text-white hover:text-gray-400 transition"
              >Projects</router-link
            >
            <router-link
              to="/technologies"
              class="text-2xl text-white hover:text-gray-400 transition"
              >Technologies</router-link
            >
            <router-link
              to="/contact"
              class="text-2xl text-white hover:text-gray-400 transition"
              >Contact</router-link
            >
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { graphqlService } from "@/services/graphql-service";

export default defineComponent({
  name: "NavBar",
  components: {},
  async mounted() {
    const projects = await graphqlService.getProjects();
    console.log("RESPONSE", projects);
    const navigationLinks = await graphqlService.getNavigationLinks();
    console.log("Nav Links", navigationLinks);
  },
});
</script>
<style scoped>
/* Add custom transitions for mobile menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
