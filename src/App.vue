<template>
  <div style="height:100%;">

    <div v-transfer-dom>
      <loading :show="router_isLoading"></loading>
    </div>

    <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')" :name="transitionName">
      <router-view class="router-root"></router-view>
    </transition>

  </div>
</template>

<script>
import { Loading, TransferDom } from 'vux';
import { mapState } from 'vuex';

export default {
  directives: {
    TransferDom
  },
  components: {
    Loading
  },
  methods: {},
  mounted() {},
  beforeDestroy() {},
  computed: {
    ...mapState({
      route: state => state.route,
      deviceready: state => state.app.deviceready,
      router_isLoading: state => state.router_isLoading,
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

<style lang="less">
@import './styles/index.less';
</style>