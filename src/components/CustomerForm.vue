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
        <RadioInput
          v-model="form.gender"
          title="Пол"
          :options="genderOptions"
        />
        <DropCard ref="customerGroupInput">
          <template #activator>
            <div @click.stop="onOpenCustomerGroupInput">
              <TextInput
                class="customer-form-input"
                value="Группа клиентов"
                label="Группа клиентов"
                :required="true"
                :readonly="true"
                :hint="validationErrors(customerFormValidationOptions.customerGroup)"
              />
            </div>
          </template>
          <MultiSelectList
            :options="customerGroupOptions"
            @select="onSelectCustomerGroup"
          />
        </DropCard>
        <DropCard ref="doctorInput">
          <template #activator>
            <div @click.stop="onOpenDoctorInput">
              <TextInput
                class="customer-form-input"
                v-model="form.doctor"
                label="Лечащий врач"
                :readonly="true"
              />
            </div>
          </template>
          <SelectList
            :options="doctorOptions"
            @select="onSelectDoctor"
          />
        </DropCard>
        <Checkbox
          v-model="form.dontSendSms"
          name="sms"
          label="Не отправлять СМС"
        />
      </div>
    </div>

    <div class="customer-form-group">
      <h4 class="customer-form-group-title secondary-title">Адрес</h4>

      <div class="customer-form-group-inputs">
        <TextInput
          class="customer-form-input"
          type="number"
          v-model="form.postcode"
          label="Индекс"
          :hint="validationErrors(customerFormValidationOptions.postcode)"
        />
        <TextInput
          class="customer-form-input"
          v-model="form.country"
          label="Страна"
          :hint="validationErrors(customerFormValidationOptions.country)"
        />
        <TextInput
          class="customer-form-input"
          v-model="form.region"
          label="Область"
        />
        <TextInput
          class="customer-form-input"
          v-model="form.city"
          label="Город"
          :required="true"
          :hint="validationErrors(customerFormValidationOptions.city)"
        />
        <TextInput
          class="customer-form-input"
          v-model="form.street"
          label="Улица"
        />
        <TextInput
          class="customer-form-input"
          v-model="form.house"
          label="Дом"
        />
      </div>
    </div>

    <div class="customer-form-group">
      <h4 class="customer-form-group-title secondary-title">Паспортные данные</h4>

      <div class="customer-form-group-inputs">
        <DropCard ref="documentTypeInput">
          <template #activator>
            <div @click.stop="onOpenDocumentTypeInput">
              <TextInput
                class="customer-form-input"
                v-model="form.documentType"
                label="Тип документа"
                :required="true"
                :readonly="true"
                :hint="validationErrors(customerFormValidationOptions.documentType)"
              />
            </div>
          </template>
          <SelectList
            :options="documentTypeOptions"
            @select="onSelectDocumentType"
          />
        </DropCard>
        <TextInput
          class="customer-form-input"
          v-model="form.passportSeries"
          label="Серия"
        />
        <TextInput
          class="customer-form-input"
          type="number"
          v-model="form.passportNumber"
          label="Номер"
          :hint="validationErrors(customerFormValidationOptions.passportNumber)"
        />
        <TextInput
          class="customer-form-input"
          v-model="form.issuedBy"
          label="Кем выдан"
        />
        <TextInput
          class="customer-form-input"
          type="date"
          v-model="form.issuedDate"
          label="Дата выдачи"
          :required="true"
          :hint="validationErrors(customerFormValidationOptions.issuedDate)"
        />
      </div>
    </div>

    <div class="customer-form-actions">
      <div class="btn" @click="onSubmit">Отправить</div>
    </div>
  </form>
</template>

<script>
import TextInput from './app/TextInput'
import RadioInput from './app/RadioInput'
import DropCard from './app/DropCard'
import SelectList from './app/SelectList'
import MultiSelectList from './app/MultiSelectList'
import Checkbox from './app/Checkbox'
import { required, minLength, numeric } from 'vuelidate/lib/validators'
import { customerFormValidationOptions } from '@/utils/validationOptions'

export default {
  components: { TextInput, RadioInput, DropCard, SelectList, MultiSelectList, Checkbox },
  data() {
    return {
      customerFormValidationOptions,
      form: {
        firstName: '',
        lastName: '',
        middleName: '',
        birthDate: '',
        mobileNumber: '7',
        gender: '',
        doctor: '',
        customerGroup: [],
        dontSendSms: false,
        postcode: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',
        documentType: '',
        passportSeries: '',
        passportNumber: '',
        issuedBy: '',
        issuedDate: '',
      },
      genderOptions: [
        { value: 'male', label: 'М', group: 'gender', },
        { value: 'female', label: 'Ж', group: 'gender', },
      ],
      doctorOptions: ['Иванов', 'Захаров', 'Чернышева'],
      customerGroupOptions: ['VIP', 'Проблемные', 'ОМС'],
      documentTypeOptions: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение'],
    }
  },
  validations: {
    form: {
      firstName: { required, minLength: minLength(3) },
      lastName: { required, minLength: minLength(3) },
      middleName: { minLength: minLength(3) },
      birthDate: { required },
      mobileNumber: { required, numeric, minLength: minLength(11), firstLetter: v => v[0] === '7' },
      customerGroup: { required: v => v.length },
      postcode: { numeric },
      country: { minLength: minLength(3) },
      city: { required },
      documentType: { required },
      passportNumber: { numeric },
      issuedDate: { required },
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
      alert('Ваш профиль успешно создан')
    },
    onOpenDoctorInput() {
      this.$refs.doctorInput.onOpen()
    },
    onSelectDoctor(value) {
      this.form.doctor = value
    },
    onOpenCustomerGroupInput() {
      this.$refs.customerGroupInput.onOpen()
    },
    onSelectCustomerGroup(value) {
      this.form.customerGroup = value
    },
    onOpenDocumentTypeInput() {
      this.$refs.documentTypeInput.onOpen()
    },
    onSelectDocumentType(value) {
      this.form.documentType = value
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
  align-items: flex-start

.customer-form-actions
  width: 100%
  margin: 0 10px 10px 10px
</style>