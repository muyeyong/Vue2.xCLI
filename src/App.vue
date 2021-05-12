<template>
    <div id="app">
        <el-container class="home">
            <el-main class="main">
                <div class="w">
                    <transition name="router-fade" mode="out-in">
                        <keep-alive>
                            <router-view v-if="$route.meta.keepAlive"></router-view>
                        </keep-alive>
                    </transition>
                    <transition name="router-fade" mode="out-in">
                        <router-view v-if="!$route.meta.keepAlive"></router-view>
                    </transition>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>

export default {
  created () {
  },
  mounted () {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
@import './style/common.css';
@import './style/base.css';
#app {
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #f5f6f7;
    .home {
        height: 100%;
        flex-direction: column;
        .main {
            width: 100%;
            overflow: initial;
            background: #f5f6f7;
            padding-top: 0.84rem;
        }
        .w {
            background: #fff;
        }
    }
    .router-fade-enter-active,
    .router-fade-leave-active {
        transition: opacity 0.3s;
    }
    .router-fade-enter,
    .router-fade-leave-active {
        opacity: 0;
    }
}
</style>
