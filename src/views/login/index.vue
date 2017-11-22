<template>
  <div>
    <group title="请输入帐号和密码">
      <x-input title="帐号" placeholder="" novalidate :icon-type="iconType.name" :show-clear="false" @on-blur="onBlur($event,'name')" placeholder-align="right" v-model="loginData.name"></x-input>
      <x-input title="密码" placeholder="" novalidate :icon-type="iconType.password" :show-clear="false" @on-blur="onBlur($event , 'password')" placeholder-align="right" type='password' v-model="loginData.password"></x-input>
    </group>
    <div style="padding:15px;">
      <x-button @click.native="login" type="primary"> 登录</x-button>
    </div>
  </div>
</template>

<script>
import { TransferDom, Group, Cell, XButton, XInput } from 'vux'
import { mapState, mapActions } from 'vuex'
import env from '@/config/env'

export default {
  directives: {
    TransferDom
  },
  components: { Group, Cell, XButton, XInput },
  data() {
    return {
      iconType: {
        name: '',
        password: ''
      },
      loginData: {}
    }
  },
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {
    onBlur(self, type) {
      this.$data.iconType[type] = this.$data.loginData[type]
        ? 'success'
        : 'error'
    },
    login() {
      let self = this
      if (!self.$data.loginData.name || !self.$data.loginData.password) {
        self.$service.notice.warn('请输入帐号和密码')
        return false
      }
      self.$service.notice.loading('正在登录...')
      self.$http
        .post(
          env.apiConfig.auth.login,
          Object.assign({ login_type: 'sys' }, this.$data.loginData)
        )
        .then(result => {
          self.$service.token.write(result.data.data.token)
          self.$http.post(env.apiConfig.auth.user, {}).then(user => {
            self.$service.notice.success('登录成功')
            self.$service.token.writeUser(user.data.data)
            self.$router.push({ name: env.routerName.index })
          })
        })
        .catch(result => {
          // self.$service.notice.warn('登录失败！')
        })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
