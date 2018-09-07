<template>
  <el-table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="item"
      label="项目"
      width="280">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="desc"
      label="描述">
    </el-table-column>
  </el-table>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      tableData2: [
        {
          item: '加载总时间',
          time: '300',
          desc: '这几乎代表了用户等待页面可用的时间'
        },
        {
          item: 'Unload事件耗时',
          time: '300',
          desc: '这几乎代表了用户等待页面可用的时间'
        },
        {
          item: '执行 onload 回调函数的时间',
          time: '300',
          desc: '是否太多不必要的操作都放到 onload 回调函数里执行了，考虑过延迟加载、按需加载的策略么？'
        },
        {
          item: '用户可操作时间',
          time: '300',
          desc: '这几乎代表了用户等待页面可用的时间'
        },
        {
          item: '首屏时间',
          time: '300',
          desc: '用户在没有滚动时候看到的内容渲染完成并且可以交互的时间'
        },
        {
          item: '解析 DOM 树结构的时间',
          time: '300',
          desc: '期间要加载内嵌资源'
        },
        {
          item: '请求完毕至DOM加载耗时',
          time: '300',
          desc: '这几乎代表了用户等待页面可用的时间'
        },
        {
          item: '准备新页面时间耗时',
          time: '300',
          desc: '这几乎代表了用户等待页面可用的时间'
        },
        {
          item: '重定向的时间',
          time: '300',
          desc: '这几乎代表了用户等待页面可用的时间'
        },
        {
          item: 'DNS缓存耗时',
          time: '300',
          desc: '这几乎代表了用户等待页面可用的时间'
        },
        {
          item: 'DNS查询耗时',
          time: '300',
          desc: '这几乎代表了用户等待页面可用的时间'
        },
        {
          item: 'TCP连接耗时',
          time: '300',
          desc: '这几乎代表了用户等待页面可用的时间'
        },
        {
          item: '内容加载完成的时间',
          time: '300',
          desc: '这几乎代表了用户等待页面可用的时间'
        },
        {
          item: '请求文档',
          time: '300',
          desc: '这几乎代表了用户等待页面可用的时间'
        },
        {
          item: '接收文档',
          time: '300',
          desc: '这几乎代表了用户等待页面可用的时间'
        },
        {
          item: '读取页面第一个字节的时间',
          time: '300',
          desc: '这几乎代表了用户等待页面可用的时间'
        }
      ]
    }
  },
  computed: {
    thisRoute () {
    },
    ...mapGetters([])
  },
  created () {
  },
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    ...mapActions([])
  }
}
</script>
<style lang="scss" scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
