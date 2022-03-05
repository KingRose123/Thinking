<script setup>
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
const value = ref('1')

const options =[{
    value: '1',
    label: '文章',
  },{
    value: '2',
    label: '用户',
}]
const formLabelAlign = reactive({
  input: ''
})
const onSubmit = () => {
  console.log(formLabelAlign.input)
  console.log(value.value)
}
</script>
<template>
  <div class="header-banner-content wrapper">
      <div class="header-banner-left">
          <div id="ym-menu" class="ym-menu">
              <ul id="menu-header" class="menu">
                  <li class="menu-item">
                      <a href="https://www.baidu.com">订阅</a>
                  </li>
                  <li class="menu-item">
                      <a href="https://www.baidu.com">精选</a>
                  </li>
                  <li class="menu-item">
                      <a href="https://www.baidu.com">日报</a>
                  </li>
                  <li class="menu-item">
                      <a href="https://www.baidu.com">关于</a>
                  </li>
                  <li class="menu-item">
                      <a href="https://www.baidu.com">播客</a>
                  </li>
              </ul>
          </div>
      </div>
      <div class="header-banner-right normal-banner-right">
          <div class="mobile-hidden">
              <div class="top-search mobile-hidden">
                <el-form :inline="true" :model="formLabelAlign" class="mobile-search-input b2-radius">
                  <el-form-item>
                    <el-select-v2
                          v-model="value"
                          :options="options"
                          placeholder="Please select"
                          class="top-search-button"
                    />
                  </el-form-item>
                  <el-form-item>
                    <el-input
                    v-model="formLabelAlign.input"
                    placeholder="搜索"
                    @keyup.enter="onSubmit"
                    class="top-search-input">
                      <template #suffix>
                        <el-button @click="onSubmit">
                          <el-icon color="#fff"><Search /></el-icon>
                        </el-button>
                      </template>
                    </el-input>
                  </el-form-item>
                </el-form>
              </div>
          </div>
      </div>
  </div>
</template>

<style scoped>
.header-banner-content {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
}
.header-banner-content > div {
    display: flex;
    align-items: center;
    line-height: 1;
}
.header-banner-left {
    opacity: 1;
    transition: opacity .3s;
}
.header-banner-left ul {
    display: flex;
    align-items: center;
    white-space: nowrap;
}
.header-banner-left .menu li {
    margin-right: 26px;
}
.header-banner-left .menu li a {
    display: flex;
    align-items: center;
    transition: opacity .2s ease-out;
    padding: 21px 0;
    position: relative;
    font-weight: 100;
}
.top-search {
    position: relative;
}
.top-search form {
    display: flex;
    background-color: rgb(204 204 204/21%);
}
.top-search-button {
    display: flex;
    white-space: nowrap;
    align-items: center;
    font-size: 12px;
    width: 80px;
    height: 50%;
    border-right: 1px solid #DEE1E4;
}
.top-search-button >>> .el-select-v2__wrapper{
  background-color: inherit;
  border: none;
  width: 100%;
}
.top-search-button >>> .el-select-v2__placeholder{
  color: #fff;
}
.top-search-button >>> .el-select-dropdown__option-item.is-selected{
  color: #333;
  background: #F5F6F7;
}
.top-search-input >>> .el-input__inner{
  background-color: inherit;
  box-shadow: none;
  width: 150px;
  font-family: var(--font-family);
  font-weight: 300;
}
.top-search-input >>> .el-button{
  background-color: inherit;
  border: none;
}
.top-search-select {
    cursor: pointer;
    display: block;
    padding: 0 16px;
    height: 19px;
    line-height: 19px;
    color: initial;
    border-right: 1px solid #DEE1E4;
    color: inherit;
}
.top-search .header-search-select {
    position: absolute;
    display: flex;
    flex-flow: column;
    top: 37px;
    background: #fff;
    left: 0;
    border: 1px solid #F5F6F7;
    padding: 5px;
}
.header-search-select .select {
    background: #F5F6F7;
}
.header-search-select a {
    padding: 9px 14px;
    color: #333;
    margin-bottom: 5px;
}
.mobile-search-input .el-form-item--default{
    --font-size: 12px;
    --el-form-label-font-size: var(--font-size);
    margin-bottom: 0;
    margin-right: 0;
}
</style>