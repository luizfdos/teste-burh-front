<template>
  <div>
    <header>
      <div class="wrapper">
        <router-link to="/" class="logo">
          <img src="@/assets/logo.svg" alt="" class="logo" />
        </router-link>
        <div class="links">
          <router-link to="/">Professores</router-link>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style scoped lang="scss" src="@/assets/style/components/Main.scss" />
