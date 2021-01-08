<template>
    <header>
      <div class="wrapper">
        <img src="@/assets/logo.svg" alt="" class="logo" />
        <div class="links">
          <a href="/teachers">Professores</a>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style scoped lang="scss">
header {
  padding: 28px;
  background-color: var(--menu-color);
  width: 100%;
  box-sizing: border-box;
  border-bottom: 2px solid var(--hover-color);
  display: flex;
  justify-content: center;
}

header div.wrapper {
  padding: 0 5% 0 5%;
  box-sizing: border-box;
  width: 100%;
  max-width: 1240px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
}

header img.logo {
  width: 220px;
}

.links {
    font-size: 24px;
    justify-self: center;
}

.links a {
    text-decoration: none;
    color: white;
    position: relative;
    opacity: 0.6;
}

.links a.active {
    font-weight: bold;
    opacity: 1;
}

.links a:hover {
    color: var(--hover-color);
    transition: 500ms;
    filter: brightness(170%);
    opacity: 1;
}

.links a::after {
    content: "";
    width: 0;
    height: 2px;
    background-color: var(--hover-color);
    position: absolute;
    left: 0;
    bottom: -4px;
}

.links a:hover::after {
    width: 100%;
    transition: width 400ms ease-in-out;
}
</style>
