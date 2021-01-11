<template>
  <div class="card">
    <section class="avatar"><img :src="teacher.avatar_url" alt=""> </section>
    <section class="details">
      <h3>Detalhes</h3>

      <div class="item">
        <div>Professor</div>
        <div>{{ teacher.name }}</div>
      </div>
      <div class="item">
        <div>Telefone</div>
        <div>{{ teacher.phone_number }}</div>
      </div>
      <div class="item">
        <div>Idade</div>
        <div>{{ dateToAge() }}</div>
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
            >{{ subject }}</span
          >
        </div>
      </div>

      <div class="item">
        <div>Tipo de aula</div>
        <div>{{ teacher.class_type }}</div>
      </div>
      <div class="item">
        <div>Atende finais de semana</div>
        <div v-if="teacher.work_on_weekends">
          Sim
        </div>
        <div v-else>Não</div>
      </div>
       <div class="item">
        <div>Preço por hora/aula</div>
          <div v-if="teacher.hour_price > 0">R$ {{teacher.hour_price}}</div>
          <div class='free' v-else>Grátis</div>
      </div>
      <div class="buttons">
        <router-link :to="'/teacher/edit/'+ teacher._id" class="button"
          >Editar</router-link>
        <form id="form-delete" @submit.prevent="deleteTeacher">
          <button type="submit" id="delete">Deletar</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { deleteTeacher, fetchTeacher } from '../services/index';

export default {
  data() {
    return {
      teacher: {},
    };
  },
  async mounted() {
    await fetchTeacher(this.$route.params.id)
      .then((response) => (this.teacher = response.data));
  },
  methods: {
    async deleteTeacher() {
      if (confirm('Deseja deletar?')) {
        await deleteTeacher(this.$route.params.id)
          .then(() => this.$router.push('/'));
      }
    },
    dateToAge() {
      const today = new Date();
      const birthDate = new Date(this.teacher.birth_date);

      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();

      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age -= 1;
      }
      return age;
    },
  },
};
</script>

<style lang="scss" src="../assets/style/components/TeacherDetails.scss" />
