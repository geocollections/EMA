<template>
  <a class="text-link">
    <slot></slot>
    <span style="white-space: nowrap"
      >&#xfeff;
      <slot name="icon">
        <v-icon small>mdi-open-in-new</v-icon>
      </slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'ExternalLink',
}
</script>

<style scoped></style>
