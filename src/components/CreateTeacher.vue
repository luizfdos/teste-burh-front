<template>
  <form class="card" @submit.prevent='submitForm'>
    <section
      class="avatar"
      style="
        background: url(https://source.unsplash.com/collection/8874679/600x600);"
    ></section>
    <section class="details">
      <h3>Novo professor</h3>
      <div class="item">
        <div>Endereço da imagem de perfil</div>
        <div>
          <input
            type="url"
            v-model="avatar_url"
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
            v-model="name"
            placeholder="Digite o nome"
            value=""
          />
        </div>
      </div>
      <div class="item">
        <div>Data de nascimento</div>
        <div>
          <input type="date" v-model="birth_date" value="" />
        </div>
      </div>
      <div class="item">
        <div>Escolaridade</div>
        <select v-model="education_level" placeholder="Selecione">
          <option value="Ensino Médio Completo">Ensino Médio Completo</option>

          <option value="Ensino Superior Completo">Ensino Superior Completo</option>

          <option value="Mestrado">Mestrado</option>

          <option value="Doutorado">Doutorado</option>
        </select>
      </div>

      <div class="item">
        <div>Acompanhamento</div>
        <div>
          <input
            type="text"
            v-model="subjects_taught"
            placeholder="Digite  as matérias separadas por vírgula"
            value=""
          />
        </div>
      </div>

      <div class="item">
        <div>Tipo de aula</div>
        <div>
          <span>
            <input type="radio" v-model="class_type" value="Presencial" />
            Presencial
          </span>

          <span>
            <input type="radio" v-model="class_type" value="À distância" />
            À distância
          </span>
        </div>
      </div>
      <button type="submit">Salvar</button>
    </section>

  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      avatar_url: '',
      birth_date: '',
      education_level: '',
      subjects_taught: '',
      class_type: '',
    };
  },
  methods: {
    submitForm() {
      axios
        .post(`https://crudcrud.com/api/${process.env.VUE_APP_API_KEY}/teacher`,
          {
            name: this.name,
            avatar_url: this.avatar_url,
            birth_date: this.birth_date,
            education_level: this.education_level,
            subjects_taught: this.subjects_taught.split(','),
            class_type: this.class_type,
          }).then((response) => (this.$router.push(`/teacher/${response.data._id}`)));
    },
  },
};
</script>

<style lang="scss">

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
