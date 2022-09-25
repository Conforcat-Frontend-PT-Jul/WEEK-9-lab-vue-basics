<script setup></script>

<template>
  <div>
    <div class="image">
      <slot name="image">
        <img
          src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
        />
      </slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
