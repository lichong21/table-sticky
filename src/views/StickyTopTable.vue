<template>
  <div id="parentContiner">
    <h1>dasdas</h1>
    <h1>dasdas</h1>
    <h1>dasdas</h1>
    <h1>dasdas</h1>
    <h1>dasdas</h1>
    <h1>dasdas</h1>
    <h1>dasdas</h1>
    <h1>dasdas</h1>
    <h1>dasdas</h1>
    <h1>dasdas</h1>
    <h1>dasdas</h1>
    <el-table
      v-sticky="{ top: 100, parent: 'parentContiner', isFixed: false }"
      :data="tableData"
      header-row-class-name="custom-header"
      border
    >
      <!-- <el-table-column prop="date" label="日期" fixed="left" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" fixed="left" width="180">
      </el-table-column> -->
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="month" label="月份"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="month1" label="月份"> </el-table-column>
      <el-table-column prop="age1" label="年龄"> </el-table-column>
      <el-table-column prop="month12" label="月份"> </el-table-column>
      <el-table-column prop="age12" label="年龄"> </el-table-column>
    </el-table>
    <hr />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import sticky from '../util/sticky';

@Component({
  components: {},
  directives: {
    sticky,
  },
})
export default class extends Vue {
  tableData = [
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      age: "12321321321",
      month: "发的手机壳",
      age1: "12321321321",
      month1: "发的手机壳",
      age12: "12321321321",
      month12: "发的手机壳",
    },
  ];
}
</script>
<style lang="scss">
#parentContiner {
  height: calc(100vh - 100px);
  width: 800px;
  border: 1px solid red;
  overflow: scroll;
  margin-left: 100px;
}
.custom-header {
  color: red !important;
  font-weight: 700;
}
</style>
