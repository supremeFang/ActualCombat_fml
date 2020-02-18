<template>
  <div id="footerContainer">
    <div :class="{active: $route.path === '/home'}" @click="goPath('/home')" class="guideItem">
      <i class="iconfont icon-navbar_zhuye"></i>
      <span>首页</span>
    </div>
    <div :class="{active: $route.path === '/types'}" @click="goPath('/types')" class="guideItem">
      <i class="iconfont icon-moban"></i>
      <span>分类</span>
    </div>
    <div :class="{active: $route.path === '/topic'}" @click="goPath('/topic')" class="guideItem">
      <i class="iconfont icon-navbar_zhanpin"></i>
      <span>值得买</span>
    </div>
    <div :class="{active: $route.path === '/shopcart'}" @click="goPath('/shopcart')" class="guideItem">
      <i class="iconfont icon-show_goumai"></i>
      <span>购物车</span>
    </div>
    <div :class="{active: $route.path === '/profile'}" @click="goPath('/profile')" class="guideItem">
      <i class="iconfont icon-navbar_wode"></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goPath(path){      
        path !== this.$route.path && this.$router.push(path)

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #footerContainer
    display flex
    top-border-1px(#eee)
    position fixed
    left 0
    bottom 0
    width 100%
    height 100px
    box-sizing border-box
    background #fff
    .guideItem
      width 20%
      height 100px
      text-align center
      display flex
      flex-direction column
      &.active
        color $red
      .iconfont
        font-size 40px
        line-height 60px
</style>
