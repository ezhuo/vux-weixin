<template>
  <div class="hello">
    <app-header></app-header>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <group>
      <cell title="title" value="value">
        fdsafds
      </cell>
    </group>

    <x-button type="primary" @click.native="alert()">primary</x-button>
    <button @click="alert()">alert</button>
    <button @click="toast()">toast</button>
    <app-footer></app-footer>

  </div>
</template>

<script>
import { Group, Cell, XButton } from 'vux'
import AppHeader from '@/common/header'
import AppFooter from '@/common/footer'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    alert() {
      this.$vux.alert.show({
        title: 'Vux is Cool',
        content: 'Do you agree?',
        onShow() {
          console.log("Plugin: I'm showing")
        },
        onHide() {
          console.log("Plugin: I'm hiding")
        }
      })
    },
    toast() {
      this.$vux.toast.text('hello', 'top')
    }
  },
  components: {
    Group,
    Cell,
    AppHeader,
    AppFooter,
    XButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
