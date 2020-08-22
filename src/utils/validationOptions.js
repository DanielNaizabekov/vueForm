export const customerFormValidationOptions = {
  firstName: {
    path: 'form.firstName',
    methods: ['minLength', 'required'],
    hints: {
      minLength: 'Введите не менее 3 символов',
      required: 'Введите имя',
    },
  },
  lastName: {
    path: 'form.lastName',
    methods: ['minLength', 'required'],
    hints: {
      minLength: 'Введите не менее 3 символов',
      required: 'Введите фамилию',
    },
  },
  middleName: {
    path: 'form.middleName',
    methods: ['minLength'],
    hints: {
      minLength: 'Введите не менее 3 символов',
    },
  },
  birthDate: {
    path: 'form.birthDate',
    methods: ['required'],
    hints: {
      required: 'Введите дату рождения',
    },
  },
  mobileNumber: {
    path: 'form.mobileNumber',
    methods: ['minLength', 'firstLetter', 'numeric', 'required'],
    hints: {
      required: 'Введите номер телефона',
      minLength: 'Введите 11 цифр',
      firstLetter: 'Должен начинаться с цифры "7"',
      numeric: 'Должен состоять из цифр',
    },
  },
}