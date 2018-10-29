<template>
  <!-- main content -->
  <view-box ref="viewBox" body-padding-top="0px" body-padding-bottom="0px">

    <!-- <app-header></app-header> -->

    <router-view class="router-passport"></router-view>

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
.router-passport {
  width: 100%;
  top: 0px;
}
</style>
