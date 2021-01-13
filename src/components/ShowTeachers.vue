<template>
  <div class="card table-container" id="container" >
    <div class="header">
      <router-link to="/create" class="button">Novo</router-link>
    </div>
    <table>
      <thead>
        <tr>
          <th>Professor</th>
          <th class="subjects_taught">Acompanhamento</th>
          <th>Preço/hr</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="teacher in teachers" :key="teacher._id">
          <td data-label="Professor">
            <span
              :style="
                'background: url(' +
                  teacher.avatar_url +
                  ') no-repeat center center / cover'
              "
            ></span>
            {{ teacher.name }}
          </td>
          <td
           data-label="Assunto"
           class="subjects_taught">
            <span
              v-for="subject in teacher.subjects_taught"
              v-bind:key="subject"
              >{{ subject }}</span
            >
          </td>
          <td data-label="Preço/hr">
            <div v-if="teacher.hour_price > 0">
              {{ teacher.hour_price
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
            </div>
            <div class='free' v-else>Grátis</div>
          </td>
          <td data-label="Ação">
            <router-link :to="'/teacher/' + teacher._id">ver</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { fetchTeachers } from '../services/index';

export default {
  data() {
    return {
      teachers: [],
    };
  },
  async mounted() {
    const response = await fetchTeachers();
    this.teachers = response.data.map((teacher) => ({
      ...teacher,
      hour_price: +teacher.hour_price,
    }));
  },
};
</script>

<style lang="scss" src="../assets/style/components/ShowTeachers.scss" />
