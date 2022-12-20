<template>
  <h4>Page Parent</h4>
  <nav>
    <router-link :to="{ name: 'page-child-one' }" class="mr-2">Child One</router-link>
    <router-link :to="{ name: 'page-child-two' }">Child Two</router-link>
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style scoped>
nav {
  display: flex;
  height: 200px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
