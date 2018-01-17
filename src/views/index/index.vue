<template>
  <div class="hello">

    <app-header :title='title'></app-header>

    <h1>{{ msg }}</h1>

    <group>
      <cell title="title" value="value">
      </cell>
    </group>

  </div>
</template>

<script>
import { TransferDom, Group, Cell, XButton, XInput } from 'vux'
import AppHeader from '@/theme/components/header'

export default {
  name: 'index',
  directives: {
    TransferDom
  },
  components: {
    Group,
    Cell,
    AppHeader,
    XButton
  },
  data() {
    return {
      title: 'index',
      msg: 'index'
    }
  },
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {}
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
