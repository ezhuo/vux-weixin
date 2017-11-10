<template>
  <div>
    <tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="!isTabbarDemo" slot="bottom">
      <tabbar-item :link="{path:'/'}" :selected="route.path === '/'">
        <span class="demo-icon-22 vux-demo-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>
        <span slot="label">Home</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/demo'}" :selected="isDemo" badge="9">
        <span class="demo-icon-22" slot="icon">&#xe633;</span>
        <span slot="label">
          <span v-if="componentName" class="vux-demo-tabbar-component">{{componentName}}</span>
          <span v-else>Demos</span>
        </span>
      </tabbar-item>
      <tabbar-item :link="{path:'/project/donate'}" :selected="route.path === '/project/donate'" show-dot>
        <span class="demo-icon-22" slot="icon">&#xe630;</span>
        <span slot="label">Donate</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<style>

</style>
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'AppFooter',
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      index: 0
    }
  },
  methods: {
    onclick1() {
      console.log(1)
    }
  }
}
</script>
