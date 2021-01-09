<template>
  <div class="card">
    <section
      class="avatard"
      :style="
        'background: url(' +
        teacher.avatar_url +
        ') no-repeat center center / cover'
      "
    ></section>
    <section class="details">
      <h3>Detalhes</h3>

      <div class="item">
        <div>Professor</div>
        <div>{{ teacher.name }}</div>
      </div>
      <div class="item">
        <div>Idade</div>
        <div>{{ teacher.age }}</div>
      </div>

      <div class="item">
        <div>Escolaridade</div>
        <div>
          {{ teacher.education_level }}
        </div>
      </div>

      <div class="item">
        <div>Acompanhamento</div>
        <div>
          <span
            v-for="subject in teacher.subjects_taught"
            v-bind:key="subject"
            >{{ subject }}</span>
        </div>
      </div>

      <div class="item">
        <div>Tipo de aula</div>
        <div>{{ teacher.class_type }}</div>
      </div>

      <div class="item">
        <div>Desde</div>
        <div>{{ teacher.created_at }}</div>
      </div>
      <div class="buttons">
        <a :href="'/teachers/'+ teacher._id +'/edit'" class="button">Editar</a>
        <form id="form-delete" @submit.prevent='deleteTeacher'>
          <button type="submit" id="delete">Deletar</button>
        </form>
      </div>
    </section>
  </div>
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
      .get(`https://crudcrud.com/api/${process.env.VUE_APP_API_KEY}/teacher/${this.$route.params.id}`)
      .then((response) => (this.teacher = response.data));
  },
};

</script>

<style lang="scss" scoped>
button#delete {
    background-color: crimson;
    cursor: pointer;
}

a {
  text-align: center;
}

div.buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
}
</style>
