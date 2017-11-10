<template>
  <header>

    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenu"></actionsheet>
    </div>

    <x-header slot="header" 
            style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
            :left-options="leftOptions" 
            :right-options="rightOptions" 
            :title="title" 
            :transition="headerTransition" 
            @on-click-more="onClickMore">
      <span slot="overwrite-left" @click="updateSideMenu()">
        <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </span>
    </x-header>

  </header>
</template>
<style>

</style>
<script>
import { Actionsheet, XHeader, TransferDom } from 'vux'
import { mapState, mapActions } from 'vuex'

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet
  },
  mounted() {},
  methods: {
    onClickMore() {
      this.showMenu = true
    },
    updateSideMenu() {
      this.$store.commit('updateSideMenu', {
        drawerVisibility: !this.sideMenu.drawerVisibility
      })
    }
  },

  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      direction: state => state.direction,
      sideMenu: state => state.sideMenu
    }),
    leftOptions() {
      return {
        showBack: true
      }
    },
    rightOptions() {
      return {
        showMore: true
      }
    },
    headerTransition() {
      return this.direction === 'forward'
        ? 'vux-header-fade-in-right'
        : 'vux-header-fade-in-left'
    },
    title() {
      return 'hello'
    }
  },
  data() {
    return {
      showMenu: false,
      menus: {
        'language.noop': '<span class="menu-title">Language</span>',
        'zh-CN': '中文',
        en: 'English'
      }
    }
  }
}
</script>
