<template>
  <nav class="bg-gray-900 text-white shadow-md">
    <div class="container mx-auto flex justify-between items-center p-4">
      <div class="text-3xl font-bold">
        <router-link to="/" class="hover:text-gray-400"
          >MyPortfolio</router-link
        >
      </div>

      <div class="hidden md:flex space-x-6">
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.url"
          class="hover:text-gray-400 transition"
        >
          {{ link.name }}
        </router-link>
      </div>

      <button @click="toggleMenu" class="md:hidden text-2xl">
        <i class="fas fa-bars"></i>
      </button>

      <transition name="fade">
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 bg-gray-900 bg-opacity-75 z-50"
          @click.self="closeMenu"
        >
          <div
            class="flex flex-col items-center justify-center h-full space-y-6"
          >
            <router-link
              v-for="(link, index) in links"
              :key="index"
              :to="link.url"
              class="text-2xl text-white hover:text-gray-400 transition"
              @click="closeMenu"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { graphqlService } from "@/services/graphql-service";
import { NavigationLink } from "@/models/types";

export default defineComponent({
  name: "NavBar",
  setup() {
    const links = ref<NavigationLink[]>([]);
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    onMounted(async () => {
      try {
        links.value = await graphqlService.getNavigationLinks();
        console.log("Fetched navigation links:", links.value);
      } catch (error) {
        console.error("Failed to fetch navigation links:", error);
      }
    });

    return {
      links,
      isMenuOpen,
      toggleMenu,
      closeMenu,
    };
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

/* Ensure the mobile menu is properly positioned */
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
