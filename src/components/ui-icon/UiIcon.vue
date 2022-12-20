<template>
  <i
    class="ui-icon"
    :class="[
      { 'material-icons': iconMaterial },
      { 'material-icons-filled': iconMaterialFilled },
      iconIcomoon ? `icon-${iconName}` : null
    ]"
  >
    <template v-if="iconMaterial || iconMaterialFilled">
      {{ iconName }}
    </template>

    <template v-if="$slots.default">
      <slot />
    </template>
  </i>
</template>

<script>
export default {
  name: 'UiIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconMaterial () {
      return this.icon.slice(0, 3) === 'mi-'
    },
    iconMaterialFilled () {
      return this.icon.slice(0, 3) === 'mf-'
    },
    iconIcomoon () {
      return this.icon.slice(0, 3) === 'im-'
    },
    iconName () {
      return this.icon.slice(3)
    }
  }
}
</script>
