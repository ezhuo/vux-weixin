<template>
  <!-- main content -->
  <view-box ref="viewBox" body-padding-top="0px" body-padding-bottom="0px">

    <!-- <app-header></app-header> -->

    <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')" :name="transitionName">
      <router-view class="router-base-view"></router-view>
    </transition>

  </view-box>
</template>

<script>
import { ViewBox, TransferDom } from 'vux';

import { mapState, mapActions } from 'vuex';

export default {
  directives: {
    TransferDom
  },
  components: {
    ViewBox
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
        'router-' +
        (this.$store.state.app_direction === 'forward' ? 'left' : 'right')
      );
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.router-base-view {
  width: 100%;
  top: 0px;
}

.router-left-enter,
.router-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.router-left-leave-active,
.router-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
