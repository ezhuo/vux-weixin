<template>
  <div style="height:100%;">

    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>

    <drawer width="200px;" :show.sync="sideMenu.drawerVisibility" :show-mode="sideMenu.showModeValue" :placement="sideMenu.showPlacementValue" :drawer-style="{'background-color':'#35495e', width: '200px'}">

      <!-- drawer content -->
      <div slot="drawer">
        <app-side-menu></app-side-menu>
      </div>

      <!-- main content -->
      <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">

        <app-header></app-header>

        <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
        <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')" :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
          <router-view class="router-view"></router-view>
        </transition>

        <app-footer></app-footer>

      </view-box>

    </drawer>
  </div>
</template>

<script>
import { Drawer, ViewBox, Loading, TransferDom } from 'vux'

import { mapState, mapActions } from 'vuex'
import AppHeader from '@/common/header'
import AppFooter from '@/common/footer'
import AppSideMenu from '@/common/menus/sideMenu'

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
  methods: {
  },
  mounted() {},
  beforeDestroy() {
  },
  computed: {
    ...mapState({
      route: state => state.route,
      deviceready: state => state.app.deviceready,
      isLoading: state => state.isLoading,
      direction: state => state.direction,
      sideMenu: state => state.sideMenu
    })
  },
  data() {
    return {}
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import './assets/style/index.less';
</style>

<style lang="less">
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
