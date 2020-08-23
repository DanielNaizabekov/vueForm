<template>
  <div class="checkbox-wrap">
    <input :id="name" type="checkbox" @change="onChange">
    <label :for="name"> <span/> {{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: 'Checkbox',
    },
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.checked)
    },
  },
}
</script>

<style lang="sass" scoped>
label
  display: inline-block
  cursor: pointer
  
  span
    display: inline-block
    position: relative
    width: 20px
    height: 20px
    border: 2px solid #000
    border-radius: 10px
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
      top: 8px
      left: 5px
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
      top: 11px
      left: 6px
      transition: width 50ms ease
      transform-origin: 0% 0%

input[type="checkbox"]
  display: none
  
  &:checked
    + label
      span
        &:after
          width: 10px
          transition: width 100ms ease 100ms
        
        &:before
          width: 5px
          transition: width 100ms ease 100ms
</style>