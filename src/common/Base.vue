<template>
  <drawer width="200px;" :show.sync="sideMenu.drawerVisibility" :show-mode="sideMenu.showModeValue" :placement="sideMenu.showPlacementValue" :drawer-style="{'background-color':'#35495e', width: '200px'}">

    <!-- drawer content -->
    <div slot="drawer">
      <app-side-menu></app-side-menu>
    </div>

    <!-- main content -->
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">

      <!-- <app-header></app-header> -->

      <router-view class="router-view"></router-view>

      <app-footer></app-footer>

    </view-box>

  </drawer>
</template>

<script>
import { Drawer, ViewBox, Loading, TransferDom } from 'vux'

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
    Loading,
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
      deviceready: state => state.app.deviceready,
      sideMenu: state => state.sideMenu
    })
  },
  data() {
    return {}
  }
}
</script>

<style lang="less">
.router-view {
  width: 100%;
  // top: 46px;
  top: 0px;
}

.menu-title {
  color: #888;
}
.vux-demo-tabbar-component {
  background-color: #f70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}

.vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
.demo-icon-22 {
  font-family: 'vux-demo';
  font-size: 22px;
  color: #888;
}

.weui-tabbar.vux-demo-tabbar {
  /** backdrop-filter: blur(10px);
  background-color: none;
  background: rgba(247, 247, 250, 0.5);**/
}

.vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
  color: #f70968;
}

.vux-demo-tabbar
  .weui-tabbar_item.weui-bar__item_on
  .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}

.demo-icon-22:before {
  content: attr(icon);
}

.demo-icon {
  font-family: 'vux-demo';
  font-size: 20px;
  color: #04be02;
}

.demo-icon-big {
  font-size: 28px;
}

.demo-icon:before {
  content: attr(icon);
}
</style>
