<template>
  <div class="layout--default">
    <slot />

    <div class="navbar container">
      <router-link
        v-for="(item, i) in nav"
        :key="i"
        :to="{ name: item.to }"
        class="mr-2"
      >
        <UiIcon :icon="item.icon" class="navbar__item-icon" />
        <span class="navbar__item-title">{{ item.title }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import UiIcon from '@/components/ui-icon'
export default {
  components: {
    UiIcon
  },
  name: 'LayoutDefault',

  /* eslint-disable */
  data() {
    return {
      nav: [
        // { icon: 'im-home', title: 'Home', to: 'page-index' },
        { icon: 'im-folder-filled', title: 'Parent', to: 'page-parent' },
        { icon: 'im-folder-filled', title: 'Home', to: 'page-home' }
      ]
    }
  }
}
</script>
