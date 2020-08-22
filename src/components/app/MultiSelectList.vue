<template>
  <ul v-if="options.length" class="multi-select-list">
    <li
      v-for="option in options"
      :key="option"
      class="multi-select-list-item"
      :class="{active: selectedOptions.includes(option)}"
      @click.stop="onSelect(option)"
    >
      <img
        class="multi-select-checked-icon"
        v-show="selectedOptions.includes(option)"
        :src="checkIcon"
        alt="selected-icon"
      >
      <span>{{ option }}</span>
    </li>
  </ul>
</template>

<script>
import checkIcon from '@/assets/imgs/check.png'

export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      checkIcon,
      selectedOptions: [],
    }
  },
  methods: {
    onSelect(option) {
      const optionIndex = this.selectedOptions.indexOf(option)
      if(optionIndex > -1) this.selectedOptions.splice(optionIndex, 1)
      else this.selectedOptions.push(option)
      this.$emit('select', this.selectedOptions)
    },
  },
}
</script>

<style scoped lang="sass">
.multi-select-list
  padding: 8px 0
  background: #fff
  font-size: 13px

.multi-select-list-item
  position: relative
  display: flex
  align-items: center
  padding: 10px 18px 10px 44px
  transition: 0.3s
  background: #fff
  cursor: pointer
  &:hover, &.active
    background: #E9EBEC

.multi-select-checked-icon
  position: absolute
  left: 10px
</style>