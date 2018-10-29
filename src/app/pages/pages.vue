<template>
  <drawer width="200px;" :show.sync="sideMenu.drawerVisibility" :show-mode="sideMenu.showModeValue" :placement="sideMenu.showPlacementValue" :drawer-style="{'background-color':'#35495e', width: '200px'}">

    <!-- drawer content -->
    <div slot="drawer">
      <app-side-menu></app-side-menu>
    </div>

    <!-- main content -->
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">

      <!-- <app-header></app-header> -->

      <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')" :name="transitionName">
        <router-view class="router-pages"></router-view>
      </transition>

      <app-footer></app-footer>

    </view-box>

  </drawer>
</template>

<script>
import { Drawer, ViewBox, TransferDom } from 'vux';

import { mapState, mapActions } from 'vuex';
import AppHeader from '../layout/components/header';
import AppFooter from '../layout/components/footer';
import AppSideMenu from '../layout/components/menus/sideMenu';

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
      sideMenu: state => state.sideMenu,
      app_direction: state => state.app_direction
    }),
    transitionName() {
      return (
        'router-pop-' +
        (this.$store.state.app_direction === 'forward' ? 'in' : 'out')
      );
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.router-pages {
  width: 100%;
  // top: 46px;
  top: 0px;
}
</style>