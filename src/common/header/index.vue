<template>
  <header>

    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenu"></actionsheet>
    </div>

    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :left-options="leftOptions" :right-options="rightOptions" :title="title" :transition="headerTransition" @on-click-more="onClickMore">
      <span v-if="route.path === '/' || route.path === '/component/drawer'" slot="overwrite-left" @click="updateSideMenu()">
        <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </span>
    </x-header>

  </header>
</template>
<style>
.tabbar {
  background-color: #00cc66;
  height: 50px;
  position: relative;
}
.search {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 999;
}
.title {
  text-align: center;
  margin: auto;
  color: white;
  line-height: 50px;
  font-size: 18px;
}
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
  methods: {
    onClickMore() {
      this.showMenu = true
    },
    updateSideMenu() {
      this.$store.commit('updateSideMenu', {
        drawerVisibility: !this.sideMenus.drawerVisibility
      })
    },
    ...mapActions(['updateDemoPosition'])
  },
  mounted() {
    this.handler2 = () => {
      if (this.path === '/demo') {
        this.box = document.querySelector('#demo_list_box')
        this.updateDemoPosition(this.box.scrollTop)
      }
    }
  },
  beforeDestroy() {
    this.box && this.box.removeEventListener('scroll', this.handler, false)
  },
  watch2: {
    path(path) {
      console.log(path);
      if (path === '/component/demo') {
        this.$router.replace('/demo')
        return
      }
      if (path === '/demo') {
        setTimeout(() => {
          this.box = document.querySelector('#demo_list_box')
          if (this.box) {
            this.box.removeEventListener('scroll', this.handler, false)
            this.box.addEventListener('scroll', this.handler, false)
          }
        }, 1000)
      } else {
        this.box && this.box.removeEventListener('scroll', this.handler, false)
      }
    }
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      direction: state => state.direction,
      sideMenus: state => state.sideMenu
    }),
    leftOptions() {
      return {
        showBack: this.route.path !== '/'
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
    componentName() {
      if (this.route.path) {
        const parts = this.route.path.split('/')
        if (/component/.test(this.route.path) && parts[2]) return parts[2]
      }
    },
    title() {
      if (this.route.path === '/') return 'Home'
      if (this.route.path === '/project/donate') return 'Donate'
      if (this.route.path === '/demo') return 'Demo list'
      return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
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
