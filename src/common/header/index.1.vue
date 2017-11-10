<template>
  <header>
    <x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true" style="background-color:#00CC66;">
      {{tag}}
      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>

    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
      <nv-menu :show-menu="show" :page-type="pageType" :nick-name="nickname" :profile-url="profileimgurl" v-if="fixHead"></nv-menu>
    </div>
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
import { XHeader, Actionsheet, TransferDom } from 'vux'
import NvMenu from '../menus'

export default {
  name: 'AppHeader',
  data() {
    return {
      tag: '资讯',
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      show: false,
      showMenus: false,
      nickname: '',
      profileimgurl: '',
      fixHead: false
    }
  },
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    NvMenu
  },
  methods: {}
}
</script>
