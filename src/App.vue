<template>
  <div id="app">
    <CustomerForm/>
  </div>
</template>

<script>
import CustomerForm from './components/CustomerForm'

export default {
  name: 'App',
  components: { CustomerForm },
}
</script>

<style lang="sass">
html, body
  margin: 0
  padding: 0

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  color: #2c3e50

*
  box-sizing: border-box

h1, h2, h3, h4, p
  margin: 0
  padding: 0

.secondary-title
  font-weight: normal
  font-size: 18px

.btn
  padding: 9px 20px
  border-radius: 5px
  border: 1px solid #DCDFE6
  display: inline-block
  cursor: pointer
  &:hover
    background: #ECF5FF
    border: 1px solid #C6E2FF
  &:active
    background: #ECF5FF
    border: 1px solid #3A8EE6
</style>
