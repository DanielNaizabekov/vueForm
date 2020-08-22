<template>
  <div class="checkbox-wrap">
    <input :id="name" type="checkbox" @change="onChange">
    <label :for="name">{{ label }}</label>
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
.checkbox-wrap
  display: flex
  align-items: center
  & input
    margin: 0 5px 3px 0
    width: 15px
    height: 15px
</style>