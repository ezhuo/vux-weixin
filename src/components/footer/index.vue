<template>
  <div>
    <tabbar class="vux-tabbar" icon-class="vux-center">
      <tabbar-item :link="{path:'/app'}" :selected="route.name === env.routerName.index">
        <span class="app-icon-22 vux-tabbar-icon-home" slot="icon" style="position:relative;top: -2px;">&#xe637;</span>
        <span slot="label">Home</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/app/hello'}" badge="9">
        <span class="app-icon-22" slot="icon">&#xe633;</span>
        <span slot="label"> demo </span>
      </tabbar-item>

      <tabbar-item :link="{path:'/'}">
        <img slot="icon" src="../../assets/images/ic_nav_news_normal.png">
        <img slot="icon-active" src="../../assets/images/ic_nav_news_actived.png">
        <span slot="label">综合</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/'}">
        <img slot="icon" src="../../assets/images/ic_nav_tweet_normal.png">
        <img slot="icon-active" src="../../assets/images/ic_nav_tweet_actived.png">
        <span slot="label">动弹</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/'}">
        <img style="height:40px;width:40px;" slot="icon" src="../../assets/images/ic_nav_add_normal.png">
      </tabbar-item>
      <tabbar-item :link="{path:'/login'}">
        <img slot="icon" src="../../assets/images/ic_nav_discover_normal.png">
        <img slot="icon-active" src="../../assets/images/ic_nav_discover_actived.png">
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/mysettings'}">
        <img slot="icon" src="../../assets/images/ic_nav_my_normal.png">
        <img slot="icon-active" src="../../assets/images/ic_nav_my_pressed.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>

  </div>
</template>


<script>
import { Tabbar, TabbarItem } from 'vux'
import { mapState } from 'vuex'

export default {
  name: 'AppFooter',
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      index: 0
    }
  },
  computed: {
    ...mapState({
      route: state => state.route,
      env: state => state.env
    })
  },
  methods: {
    onclick1() {
      console.log(1)
    }
  }
}
</script>

<style lang="less">

// tabbar -------------------------

.weui-tabbar.vux-tabbar {
  backdrop-filter: blur(10px);
  background-color: none;
  background: rgba(247, 247, 250, 0.5);
}

.vux-tabbar .weui-bar__item_on .app-icon-22 {
  color: #f70968;
}
.vux-tabbar .weui-tabbar_item.weui-bar__item_on .vux-tabbar-icon-home {
  color: rgb(53, 73, 94);
}

.weui-tabbar__icon + .weui-tabbar__label {
  margin-top: 0 !important;
}

.vux-tabbar-component {
  background-color: #f70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}

// ----- ICON ----------------

.app-icon {
  font-family: 'vux-demo';
  font-size: 20px;
  color: #04be02;
}

.app-icon:before {
  content: attr(icon);
}

.app-icon-big {
  font-size: 28px;
}

.app-icon-22 {
  font-family: 'app-icon-font';
  font-size: 22px;
  color: #888;
}

.app-icon-22:before {
  content: attr(icon);
}
</style>
