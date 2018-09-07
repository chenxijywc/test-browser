<template>
  <div id="wrapper">
    <slide></slide>
    <div id="content">
      <transition :name="transitionName" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>

  </div>
</template>

<script>
  import slide from './components/slide'
  export default {
    name: 'test-browser',
    components: {
      slide
    },
    computed: {
      transitionName () {
        return this.$route.path === '/' ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>

<style lang="scss">
  /* CSS */
  @import './assets/css/style';
  #wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    background: #f4f5f6;
  }
  #wrapper #content {
    flex: 1;
    height: 100%;
    overflow: auto;
  }
  // Animations
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .scale-enter-active {
    animation: scale-in .3s;
  }
  .scale-leave-active {
    animation: scale-out .3s;
  }
  @keyframes scale-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes scale-out {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  .slide-left-enter-active {
    transition: all .3s;
  }
  .slide-left-enter {
    transform: translateX(50px);
    opacity: 0;
  }

  .slide-right-enter-active {
    transition: all .3s;
  }
  .slide-right-enter {
    transform: translateX(-50px);
    opacity: 0;
  }
</style>
