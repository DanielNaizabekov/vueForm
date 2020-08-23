<template>
  <ul v-if="options.length" class="multi-select-list">
    <li
      v-for="option in options"
      :key="option"
      class="multi-select-list-item"
      :class="{active: selectedOptions.includes(option)}"
      @click.stop="onSelect(option)"
    >
      <div class="multi-select-list-label"> <span/> {{ option }}</div>
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
  padding: 10px 18px 10px 10px
  transition: 0.3s
  background: #fff
  cursor: pointer
  &:hover, &.active
    background: #E9EBEC

.multi-select-list-label
  span
    display: inline-block
    position: relative
    width: 18px
    height: 18px
    border: 2px solid #000
    border-radius: 3px
    vertical-align: -4px
    margin-right: 7px
      
    &:before
      content: ""
      width: 0px
      height: 2px
      border-radius: 2px
      background: #000
      position: absolute
      transform: rotate(45deg)
      top: 7px
      left: 4px
      transition: width 50ms ease 50ms
      transform-origin: 0% 0%
  
    &:after
      content: ""
      width: 0px
      height: 2px
      border-radius: 2px
      background: #000
      position: absolute
      transform: rotate(305deg)
      top: 10px
      left: 5px
      transition: width 50ms ease
      transform-origin: 0% 0%

.multi-select-list-item
  &.active
    span
      &:after
        width: 10px
        transition: width 100ms ease 100ms
      
      &:before
        width: 5px
        transition: width 100ms ease 100ms
</style>