<template>
  <div class="side_menu">
    <group title="Drawer demo(beta)" style="margin-top:20px;">
      <cell title="Demo" link="/demo" value="演示" @click.native="drawerVisibility = false">
      </cell>
      <cell title="Buy me a coffee" link="project/donate" @click.native="drawerVisibility = false">
      </cell>
      <cell title="Github" link="http://github.com/airyland/vux" value="Star me" @click.native="drawerVisibility = false">
      </cell>
    </group>
    <group title="showMode">
      <radio v-model="showMode" :options="['push', 'overlay']" @on-change="onShowModeChange"></radio>
    </group>
    <group title="placement">
      <radio v-model="showPlacement" :options="['left', 'right']" @on-change="onPlacementChange"></radio>
    </group>
  </div>
</template>
<script>
import { Radio, Group, Cell } from 'vux'
export default {
  components: {
    Radio,
    Group,
    Cell
  },
  methods: {
    onShowModeChange(val) {
      /** hide drawer before changing showMode **/
      this.drawerVisibility = false
      setTimeout(one => {
        this.showModeValue = val
      }, 400)
    },
    onPlacementChange(val) {
      /** hide drawer before changing position **/
      this.drawerVisibility = false
      setTimeout(one => {
        this.showPlacementValue = val
      }, 400)
    }
  }
}
</script>