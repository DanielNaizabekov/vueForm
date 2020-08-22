<template>
  <div class="text-input-wrap">
    <p class="text-input-label">{{ label }} <span v-if="required">*</span></p>
    <input
      class="text-input"
      :type="type"
      :value="value"
      @input="onInput" 
      :placeholder="label"
      :maxlength="maxlength"
      :readonly="readonly"
    >
    <p class="text-input-hint">{{ hint }}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'Input Label',
    },
    hint: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    maxlength: {
      type: String,
      default: '524288',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style scoped lang="sass">
.text-input-wrap
  padding-bottom: 15px
  position: relative

.text-input-label
  font-size: 14px
  font-weight: bold
  margin-bottom: 4px

.text-input
  width: 100%
  padding: 0 8px
  height: 35px
  border-radius: 4px
  border: 1px solid #9E9E9E
  font-size: 15px
  &:hover
    border: 1px solid

.text-input-hint
  font-size: 12px
  margin: 3px 0 0 15px
  color: #FF5252
  position: absolute
</style>