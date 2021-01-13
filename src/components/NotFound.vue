<template>
<div class="card">
  <h1>Erro 404 - Página não encontrada</h1>
  <p>A página solicitada não foi encontrada</p>
  <div class="content">
    <router-link to='/'>Clique aqui para voltar para a página principal</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  p {
    margin-top: 10px;
  }
  p, a {
    font-size: 1.5rem;
    }
  .content {
    margin: auto;
    a {
      color: $text-color;
      text-decoration: underline;
    &:hover {
      color: $hover-color;
      }
    }
  }
  }

</style>
