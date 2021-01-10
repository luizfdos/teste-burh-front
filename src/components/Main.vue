<template>
  <div>
    <header>
      <div class="wrapper">
        <a href="/" class="logo">
          <img src="@/assets/logo.svg" alt="" class="logo" />
        </a>
        <div class="links">
          <a href="/">Professores</a>
          <a href="/"></a>
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
