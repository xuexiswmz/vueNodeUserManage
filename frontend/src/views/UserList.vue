<template>
  <div>
    <h1>用户列表</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";
interface User {
  id: number;
  name: string;
  email: string;
}
const users = ref<User[]>([]); // 定义users变量，类型为User数组
// 在组件挂载时执行异步请求，获取用户列表
onMounted(async () => {
  try {
    const response = await axios.get("/api/users"); // 发送GET请求，获取用户列表
    users.value = response.data; // 将获取到的用户列表赋值给users变量
  } catch (error) {
    console.log("获取用户列表失败:" + error); // 如果请求失败，打印错误信息
  }
});
</script>
<!-- <style></style> -->
