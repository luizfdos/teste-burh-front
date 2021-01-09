<template>
  <form class="card" method="POST" action="/teachers">
    <section
      class="avatar"
      style="
        background: url(https://source.unsplash.com/collection/8874679/500x500)
          no-repeat center center / cover;
      "
    ></section>
    <section class="details">
      <h3>Novo professor</h3>
      <div class="item">
        <div>Endereço da imagem de perfil</div>
        <div>
          <input
            type="url"
            name="avatar_url"
            placeholder="http://"
            value=""
          />
        </div>
      </div>
      <div class="item">
        <div>Nome completo</div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Digite o nome"
            value=""
          />
        </div>
      </div>
      <div class="item">
        <div>Data de nascimento</div>
        <div>
          <input type="date" name="birth_date" value="" />
        </div>
      </div>
      <div class="item">
        <div>Escolaridade</div>
        <select name="education_level" placeholder="Selecione">
          <option value="medio">Ensino Médio Completo</option>

          <option value="superior">Ensino Superior Completo</option>

          <option value="mestrado">Mestrado</option>

          <option value="doutorado">Doutorado</option>
        </select>
      </div>

      <div class="item">
        <div>Acompanhamento</div>
        <div>
          <input
            type="text"
            name="subjects_taught"
            placeholder="Digite  as matérias separadas por vírgula"
            value=""
          />
        </div>
      </div>

      <div class="item">
        <div>Tipo de aula</div>
        <div>
          <span>
            <input type="radio" name="class_type" value="Presencial" />
            Presencial
          </span>

          <span>
            <input type="radio" name="class_type" value="À distância" />
            À distância
          </span>
        </div>
      </div>
    </section>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

input,
select {
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  font-size: 17px;
  padding: 2px;
  outline: none;
  color: var(--text-color);
}

input[type="radio"]{
  width: initial;
  margin-right: 8px;
}

</style>
