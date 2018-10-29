<template>
  <div style="height:100%;">

    <div v-transfer-dom>
      <loading :show="router_isLoading"></loading>
    </div>

    <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')" :name="transitionName">
      <router-view class="router-view"></router-view>
    </transition>

  </div>
</template>

<script>
import { Loading, TransferDom } from 'vux'
import { mapState } from 'vuex'

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
        'vux-pop-' +
        (this.$store.state.app_direction === 'forward' ? 'in' : 'out')
      )
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less">
  @import './styles/index.less';
</style>

<style lang="less" scoped>
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 0.5s;
  height: 100%;
  top: 0px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
