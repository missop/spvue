<template>
<div>
    1231231
</div>
</template>

<script setup>
import {ref,reactive,onMounted} from 'vue'
import {onBeforeRouteLeave,onBeforeRouteUpdate} from 'vue-router'

onMounted(()=>{
    console.log("home DOM挂载")
})

onBeforeRouteLeave((to,form,next)=>{
    console.log("离开home组件了,顺序为1")
    next()
})

onBeforeRouteUpdate(()=>{
    console.log("home组件更新了！")
})
</script>

<style></style>
