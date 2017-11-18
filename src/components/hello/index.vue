<template>
  <div class="hello">

    <app-header :title='title'></app-header>

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <group>
      <cell title="title" value="value">
      </cell>
    </group>

    <x-button type="primary" @click.native="alert()">primary</x-button>
    <button @click="alert()">alert</button>
    <button @click="toast()">toast</button>
    <button @click="loading()">loading</button>
    <button @click="ajax()">ajax</button>
    <!-- <app-footer></app-footer> -->

    <div v-transfer-dom>
      <loading :show="show1" :text="text1"></loading>
    </div>

  </div>
</template>

<script>
import { Group, Cell, XButton, Loading, TransferDom } from 'vux'
import AppHeader from '@/common/header'

export default {
  name: 'HelloWorld',
  directives: {
    TransferDom
  },
  data() {
    return {
      title: 'hello',
      msg: 'Welcome to Your Vue.js App',
      show1: false,
      text1: 'hello'
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
    },
    loading() {
      // this.show1 = true
      this.$vux.loading.show({
        text: 'Loading'
      })
      setTimeout(() => this.$vux.loading.hide(), 30000)
    },
    ajax() {
      this.$http.get('/api/data.json').then((result) => {
         console.log(result);
      })
    }
  },
  components: {
    Group,
    Cell,
    AppHeader,
    XButton,
    Loading
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
