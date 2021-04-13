<template>
  <div>
    <router-view />
    <nav>
      <router-link to="/" style="margin-right:4px;">首页</router-link>
      <router-link to="/other">其他</router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>
