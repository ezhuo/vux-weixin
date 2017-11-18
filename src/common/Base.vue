<template>
  <drawer width="200px;" :show.sync="sideMenu.drawerVisibility" :show-mode="sideMenu.showModeValue" :placement="sideMenu.showPlacementValue" :drawer-style="{'background-color':'#35495e', width: '200px'}">

    <!-- drawer content -->
    <div slot="drawer">
      <app-side-menu></app-side-menu>
    </div>

    <!-- main content -->
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">

      <!-- <app-header></app-header> -->

      <router-view class="router-base-view"></router-view>

      <app-footer></app-footer>

    </view-box>

  </drawer>
</template>

<script>
import { Drawer, ViewBox, TransferDom } from 'vux'

import { mapState, mapActions } from 'vuex'
import AppHeader from './header'
import AppFooter from './footer'
import AppSideMenu from './menus/sideMenu'

export default {
  directives: {
    TransferDom
  },
  components: {
    Drawer,
    ViewBox,
    AppFooter,
    AppHeader,
    AppSideMenu
  },
  methods: {},
  mounted() {},
  beforeDestroy() {},
  computed: {
    ...mapState({
      route: state => state.route,
      sideMenu: state => state.sideMenu
    })
  },
  data() {
    return {}
  }
}
</script>

<style lang="less">
.router-base-view {
  width: 100%;
  top: 46px;
  // top: 0px;
}
</style>
