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
    <button @click="login()">login</button>
    <button @click="user()">user</button>
    <button @click="post()">post</button>
    <!-- <app-footer></app-footer> -->

    <div v-transfer-dom>
      <loading :show="show1" :text="text1"></loading>
    </div>

  </div>
</template>

<script>
import { TransferDom, Loading, Group, Cell, XButton, XInput } from 'vux'
import AppHeader from '@/app/layout/components/header'

export default {
  name: 'HelloWorld',
  directives: {
    TransferDom
  },
  components: {
    Group,
    Cell,
    AppHeader,
    XButton,
    Loading
  },
  data() {
    return {
      title: 'hello',
      msg: 'Welcome to Your Vue.js App',
      show1: false,
      text1: 'hello'
    }
  },
  mounted() {},
  beforeDestroy() {},
  computed: {},
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
      this.$http.get('/orginfo?&page=1&pageSize=20&_order=').then(result => {
        console.log(result)
      })
    },
    login() {
      this.$http
        .post('auth/login', {
          login_type: 'sys',
          name: 'admin',
          password: '123456'
        })
        .then(result => {
          this.$service.session.set('id', result.data.data.token)
          console.log(this.$service.session.get('id'))
          console.log(result.data)
        })
        .catch(result => {
          console.error(result)
        })
    },
    user() {
      this.$service.dialog.alert(JSON.stringify(this.$service.user()))
    },
    post() {
      this.$http.post('/test/post', { aaa: 'fdsa客户' }).then(result => {
        console.log(result)
      })
    }
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
