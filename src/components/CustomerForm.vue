<template>
  <form @submit.prevent="onSubmit" class="customer-form">
    <div class="customer-form-group">
      <h4 class="customer-form-group-title secondary-title">Персональные Данные</h4>

      <div class="customer-form-group-inputs">
        <TextInput
          class="customer-form-input"
          v-model="form.firstName"
          label="Имя"
          :required="true"
          :hint="validationErrors(customerFormValidationOptions.firstName)"
        />
        <TextInput
          class="customer-form-input"
          v-model="form.lastName"
          label="Фамилия"
          :required="true"
          :hint="validationErrors(customerFormValidationOptions.lastName)"
        />
        <TextInput
          class="customer-form-input"
          v-model="form.middleName"
          label="Отчество"
          :hint="validationErrors(customerFormValidationOptions.middleName)"
        />
        <TextInput
          class="customer-form-input"
          type="date"
          v-model="form.birthDate"
          label="Дата рождения"
          :required="true"
          :hint="validationErrors(customerFormValidationOptions.birthDate)"
        />
        <TextInput
          class="customer-form-input"
          type="tel"
          v-model="form.mobileNumber"
          label="Номер телефона"
          :required="true"
          maxlength="11"
          :hint="validationErrors(customerFormValidationOptions.mobileNumber)"
        />
        <RadioInput/>
      </div>
    </div>

    <div class="customer-form-actions">
      <div class="btn" @click="onSubmit">Submit</div>
    </div>
  </form>
</template>

<script>
import TextInput from './app/TextInput'
import RadioInput from './app/RadioInput'
import { required, minLength, numeric } from 'vuelidate/lib/validators'
import { customerFormValidationOptions } from '@/utils/validationOptions'

export default {
  components: { TextInput, RadioInput },
  data() {
    return {
      customerFormValidationOptions,
      form: {
        firstName: '',
        lastName: '',
        middleName: '',
        birthDate: '',
        mobileNumber: '7',
      },
    }
  },
  validations: {
    form: {
      firstName: { required, minLength: minLength(3) },
      lastName: { required, minLength: minLength(3) },
      middleName: { minLength: minLength(3) },
      birthDate: { required },
      mobileNumber: { required, numeric, minLength: minLength(11), firstLetter: v => v[0] === '7' },
    },
  },
  computed: {
    validationErrors() {
      return ({ path, methods, hints }) => {
        const inputValue = path.split('.').reduce((obj, key) => obj && obj[key] || null, this.$v)

        let error = ''
        if (!inputValue.$dirty) return error
        methods.forEach( method => !inputValue[method] && (error = hints[method]) )
        return error
      }
    },
  },
  methods: {
    onSubmit() {
      if(this.$v.form.$invalid) return this.$v.form.$touch()

      console.log(this.form)
    },
  },
}
</script>

<style scoped lang="sass">
.customer-form
  display: flex
  flex-wrap: wrap

.customer-form-group
  flex: 1 1 500px
  max-width: 500px
  padding: 10px
  margin: 10px
  border: 1px solid #ccc

.customer-form-group-title
  text-align: center
  margin-bottom: 10px

.customer-form-group-inputs
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
  grid-gap: 10px

.customer-form-actions
  width: 100%
  margin: 0 10px
</style>