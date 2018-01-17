<template>
  <div class="side_menu">
    <group title="Drawer demo(beta)" style="margin-top:20px;">
      <cell title="Demo" link="/demo" value="演示" @click.native="updateSideMenu({drawerVisibility:false})">
      </cell>
      <cell title="Buy me a coffee" link="project/donate" @click.native="updateSideMenu({drawerVisibility:false})">
      </cell>
      <cell title="Github" link="http://github.com/airyland/vux" value="Star me" @click.native="updateSideMenu({drawerVisibility:false})">
      </cell>
    </group>
    <group title="showMode">
      <radio v-model="sideMenus.showMode" :options="['push', 'overlay']" @on-change="onShowModeChange"></radio>
    </group>
    <group title="placement">
      <radio v-model="sideMenus.showPlacement" :options="['left', 'right']" @on-change="onPlacementChange"></radio>
    </group>
  </div>
</template>
<script>
import { Radio, Group, Cell } from 'vux'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Radio,
    Group,
    Cell
  },
  computed: {
    ...mapState({
      sideMenus: state => state.sideMenu
    })
  },
  methods: {
    updateSideMenu(opt = {}) {
      this.$store.commit('updateSideMenu', opt)
    },
    onShowModeChange(val) {
      /** hide drawer before changing showMode **/
      this.$store.commit('updateSideMenu', {
        drawerVisibility: false
      })
      setTimeout(one => {
        this.$store.commit('updateSideMenu', {
          showModeValue: val
        })
      }, 400)
    },
    onPlacementChange(val) {
      /** hide drawer before changing position **/
      this.$store.commit('updateSideMenu', {
        drawerVisibility: false
      })
      setTimeout(one => {
        this.$store.commit('updateSideMenu', {
          showPlacementValue: val
        })
      }, 400)
    }
  }
}
</script>