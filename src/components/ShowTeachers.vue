<template>
  <div class="card table-container" id="container">
    <div class="header">
      <a href="/create" class="button">Novo</a>
    </div>
    <table>
      <thead>
        <tr>
          <th>Professor</th>
          <th class="subjects_taught">Acompanhamento</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="teacher in teachers" :key="teacher._id">
          <td>
            <span
              :style="
                'background: url(' +
                  teacher.avatar_url +
                  ') no-repeat center center / cover'
              "
            ></span>
            {{ teacher.name }}
          </td>
          <td class="subjects_taught">
            <span
              v-for="subject in teacher.subjects_taught"
              v-bind:key="subject"
              >{{ subject }}</span
            >
          </td>
          <td>
            <a :href="'/teacher/' + teacher._id">ver</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      teachers: [],
    };
  },
  mounted() {
    axios
      .get(`https://crudcrud.com/api/${process.env.VUE_APP_API_KEY}/teacher`)
      .then((response) => (this.teachers = response.data));
  },
};
</script>

<style lang="scss" src="../assets/style/components/ShowTeachers.scss" />
