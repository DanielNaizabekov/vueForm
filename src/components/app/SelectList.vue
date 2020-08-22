<template>
  <ul v-if="options.length" class="select-list">
    <li
      v-for="option in options"
      :key="option"
      class="select-list-item"
      :class="{active: option === selectedOption}"
      @click="onSelect(option)"
    >
      {{ option }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: '',
    }
  },
  methods: {
    onSelect(option) {
      this.selectedOption = option
      this.$emit('select', option)
    },
  },
}
</script>

<style scoped lang="sass">
.select-list
  padding: 8px 0
  background: #fff
  font-size: 13px

.select-list-item
  padding: 10px 18px
  transition: 0.3s
  background: #fff
  cursor: pointer
  &:hover
    background: #E9EBEC
  &.active
    background: #c5dbe6
</style>