<template>
  <div class="wrapper flex-column-l-t">
    <el-form :inline="true" :model="form" class="demo-form-inline header">
      <el-form-item label="网址">
        <el-input v-model="form.url" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-select v-model="form.count" placeholder="次数">
          <el-option label="1" value=1></el-option>
          <el-option label="5" value=5></el-option>
          <el-option label="10" value=10></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="当前次数">
        <el-input v-model="count"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onStart">开始</el-button>
        <el-button type="primary" @click="onStop">停止</el-button>
      </el-form-item>
    </el-form>
    <!--
    preload="~@/assets/js/primus.js"
    -->
    <webview ref="webview" src="https://www.github.com/" class="webview" nodeintegration plugins>
    </webview>
  </div>

</template>
<script>
  /* eslint-disable no-unused-vars */

  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        count: 0, // 加载次数
        form: {
          url: 'https://www.baidu.com',
          count: 1
        }
      }
    },
    computed: {
      thisRoute () {
      },
      ...mapGetters([])
    },
    created () {
    },
    mounted () {
      let webview = this.$refs.webview
      let preloadFile = 'file://' + require('path').resolve('src/renderer/assets/js/primus.js')
      console.log('preload', preloadFile)
      webview.setAttribute('preload', preloadFile)
      webview.addEventListener('console-message', e => {
        console.log('console-message: ' + e.message)
      })
      // renderer环境
      webview.addEventListener('ipc-message', (event) => {
        //! 消息属性叫channel，有些奇怪，但就是这样
        console.log('ipc-message', event.channel)
      })
      // 此处不执行
      // webview.send('ping', 'ping')
    },
    methods: {
      onStart () {
        let webview = this.$refs.webview
        let webContents = webview.getWebContents()
        let loadUrl = this.form.url
        let countTotal = parseInt(this.form.count)
        this.count = 0
        if (!loadUrl) {
          return
        }
        // webview.send('ping', 'ping')
        webContents.on('did-finish-load', () => {
          /* console.log('count', 'countTotal')
          console.log(this.count, countTotal)
          console.log(webContents)
          console.log(webContents.getLastWebPreferences()) */
          if (this.count >= countTotal) {
            return null
          } else {
            this.count++
            setTimeout(() => {
              webContents.loadURL(loadUrl)
            }, 1000)
          }
        })
        this.count++
        webContents.loadURL(loadUrl)
      },
      onStop () {
        let webview = this.$refs.webview
        let webContents = webview.getWebContents()
        // webview.stop()
        webview.send('ping', 'ping')
        webview.executeJavaScript('window', true, (result) => {
          console.log('result', result)
        })
      },
      ...mapActions([])
    }
  }
</script>
<style lang="scss" scoped>
  .wrapper {
    display: flex;
    width: 100%;
    height:100%;
    .header {
      width: 100%;
      height: 50px;
      padding: 8px 0 0 0;
      color: #000000;
    }
    .webview {
      width: 100%;
      height:100%;
    }
  }
</style>
