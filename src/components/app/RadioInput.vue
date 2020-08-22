<template>
  <div class="radio-input-wrap">
    <p class="radio-input-label">{{ title }} <span v-if="required">*</span></p>
      <div class="radio-input-group">
        <div
          v-for="option in options"
          :key="option.value"
          class="radio-input"
        >
          <input
            :id="option.value"
            type="radio"
            :value="option.value"
            :name="option.group"
            @change="onChange"
          >
          <label :for="option.value">{{ option.label }}</label>
        </div>
      </div>
    <p class="radio-input-hint">{{ hint }}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    title: {
      type: String,
      default: 'Input Title',
    },
    hint: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style scoped lang="sass">
.radio-input-wrap
  padding-bottom: 15px
  position: relative

.radio-input-label
  font-size: 14px
  font-weight: bold
  margin-bottom: 4px

.radio-input-group
  display: flex
  flex-wrap: wrap
  align-items: center
  min-height: 35px

.radio-input input
  margin: 0

.radio-input label
  margin: 0 15px 0 5px

.radio-input-hint
  font-size: 12px
  margin: 3px 0 0 15px
  color: #FF5252
  position: absolute
</style>