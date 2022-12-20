<template>
  <LayoutBroker
    :layouts="layouts"
    :current="$route.meta.layout"
    :pageWrapperClasses="['layout__content']"
  />
</template>

<script setup>
import LayoutBroker from '@/layouts/LayoutBroker.vue'
import layouts from '@/layouts'
</script>
