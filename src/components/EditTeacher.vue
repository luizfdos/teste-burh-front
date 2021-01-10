<template>
  <form class="card" @submit.prevent='updateTeacher'>
    <section class="avatar"><img :src="teacher.avatar_url" alt=""></section>

    <section class="details">
      <h3>Editar Dados</h3>
      <div class="item">
        <label for="avatar_url">Endereço da imagem de perfil</label>
        <div>
          <input id="avatar_url"
            type="url"
            v-model="teacher.avatar_url"
            placeholder="http://"
          />
        </div>
      </div>
      <div class="item">
        <label for="name">Nome completo</label>
        <div>
          <input
            type="text"
            v-model="teacher.name"
            placeholder="Digite o nome"
            id="name"
          />
        </div>
      </div>
      <div class="item">
        <label for="birth_date">Data de nascimento</label>
        <div>
          <input type="date" id="birth_date" v-model="teacher.birth_date" value="" />
        </div>
      </div>
      <div class="item">
        <label for="education_level">Escolaridade</label>
        <select id="education_level" v-model="teacher.education_level" placeholder="Selecione">
          <option value="Ensino Médio Completo">Ensino Médio Completo</option>

          <option value="Ensino Superior Completo">Ensino Superior Completo</option>

          <option value="Mestrado">Mestrado</option>

          <option value="Doutorado">Doutorado</option>
        </select>
      </div>

      <div class="item">
        <label for="subjects_taught">Acompanhamento</label>
        <div>
          <input
            type="text"
            id="subjects_taught"
            v-model="teacher.subjects_taught"
            placeholder="Digite  as matérias separadas por vírgula"
            value=""
          />
        </div>
      </div>

      <div class="item">
        <div>Tipo de aula</div>
        <div>
          <span>
            <input type="radio" v-model="teacher.class_type" value="Presencial" />
            Presencial
          </span>

          <span>
            <input type="radio" v-model="teacher.class_type" value="À distância" />
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
      teacher: {},
    };
  },
  mounted() {
    axios
      .get(
        `https://crudcrud.com/api/${process.env.VUE_APP_API_KEY}/teacher/${this.$route.params.id}`,
      )
      .then((response) => (this.teacher = response.data));
  },
  methods: {
    updateTeacher() {
      axios
        .put(`https://crudcrud.com/api/${process.env.VUE_APP_API_KEY}/teacher/${this.$route.params.id}`,
          {
            name: this.teacher.name,
            avatar_url: this.teacher.avatar_url,
            birth_date: this.teacher.birth_date,
            education_level: this.teacher.education_level,
            subjects_taught: this.teacher.subjects_taught,
            class_type: this.teacher.class_type,
          }).then(() => (this.$router.push(`/teacher/${this.$route.params.id}`)));
    },
  },
};
</script>

<style lang="scss" src="../assets/style/components/CreateTeacher.scss" />
