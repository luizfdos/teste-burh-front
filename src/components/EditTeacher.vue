<template>
  <form class="card" @submit.prevent='update'>
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
        <div>Nome completo</div>
        <div>
          <input
            type="text"
            v-model.trim="teacher.name"
            @change="$v.teacher.name.$touch()"
            placeholder="Digite o nome"
            :class="{ 'error': $v.teacher.name.$error}"
          />
        </div>
        <p v-if="$v.teacher.name.$error">
          Por favor informe o nome
        </p>
        <p v-if="!$v.teacher.name.minLength">
          O nome deve ter pelo menos {{$v.teacher.name.$params.minLength.min}} letras.
        </p>
      </div>
       <div class="item">
        <div>Número de telefone</div>
        <div>
          <input
            type="text"
            v-model="teacher.phone_number"
            v-mask="'+55 (##) #####-####'"
            @change="$v.teacher.phone_number.$touch()
            ">
        </div>
        <p v-if="$v.teacher.phone_number.$error">
          Por favor informe o telefone
        </p>
      </div>
      <div class="item">
        <div>Data de nascimento</div>
        <div>
          <input
            type="date"
            v-model.trim="teacher.birth_date"
            @change="$v.teacher.birth_date.$touch()"
            :class="{ 'error': $v.teacher.birth_date.$error}"

          />
        </div>
        <p v-if="$v.teacher.birth_date.$error">
          Por favor informe a data
        </p>
      </div>
      <div class="item">
        <div>Escolaridade</div>
        <select
        v-model.trim="teacher.education_level"
        @change="$v.teacher.education_level.$touch()"
        placeholder="Digite o nome"
        :class="{ 'error': $v.teacher.education_level.$error}"
        >
          <option value="Ensino Médio Completo">Ensino Médio Completo</option>

          <option value="Ensino Superior Completo">
            Ensino Superior Completo
          </option>

          <option value="Mestrado">Mestrado</option>

          <option value="Doutorado">Doutorado</option>
        </select>
        <p v-if="$v.teacher.education_level.$error">
          Por favor selecione a Escolaridade
        </p>
      </div>

      <div class="item">
        <div>Assuntos de ensinados</div>
        <div>
          <input
            type="text"
            v-model.trim="teacher.subjects_taught"
            @change="$v.teacher.subjects_taught.$touch()"
            :class="{ 'error': $v.teacher.subjects_taught.$error}"
            placeholder="Digite  as matérias separadas por vírgula"
            value=""
          />
        </div>
        <p v-if="$v.teacher.subjects_taught.$error">
          Por favor informe os assuntos ensinados
        </p>
      </div>

      <div class="item">
        <div>Tipo de aula</div>
        <div>
          <span>
            <input
            type="radio"
            v-model.trim="teacher.class_type"
            value="Presencial"
            @change="$v.teacher.class_type.$touch()"
             />
            Presencial
          </span>

          <span>
            <input
            type="radio"
            v-model.trim="teacher.class_type"
            value="À distância"
            @change="$v.teacher.class_type.$touch()"
            />
            À distância
          </span>
        </div>
        <p v-if="$v.teacher.class_type.$error">
          Por favor selecione o tipo de aula
        </p>
      </div>
      <div class="item">
        <div>Atende finais de semana</div>
        <div>
          <label class="switch">
            <input type="checkbox" v-model.trim="teacher.taught_on_weekends">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
       <div class="item">
        <div>Preço por hora/aula</div>
        <div>
          <input
            type="float"
            v-model.trim="teacher.hour_price"
            @change="$v.teacher.hour_price.$touch()"
            placeholder="R$ preço em reais"
          />
        </div>
        <p v-if="!$v.teacher.hour_price.between">
          Informe um valor entre
          R${{$v.teacher.hour_price.$params.between.min}} e
          R${{$v.teacher.hour_price.$params.between.max}}</p>
      </div>
      <button type="submit">Salvar</button>
    </section>

  </form>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators';
import { fetchTeacher, updateTeacher } from '../services/index';

export default {

  data() {
    return {
      teacher: {},
    };
  },
  validations: {
    teacher: {
      name: {
        required,
        minLength: minLength(4),
      },
      phone_number: { required },
      birth_date: { required },
      education_level: { required },
      subjects_taught: { required },
      class_type: { required },
      hour_price: { between: between(0, 300) },
    },
  },
  async mounted() {
    await fetchTeacher(this.$route.params.id)
      .then((response) => response.data)
      .then((teacher) => ({
        ...teacher, subjects_taught: teacher.subjects_taught.join(','),
      }))
      .then((teacher) => (this.teacher = teacher));
  },
  methods: {
    async updateTeacher() {
      await updateTeacher({
        name: this.teacher.name,
        phone_number: this.teacher.phone_number,
        avatar_url: this.teacher.avatar_url,
        birth_date: this.teacher.birth_date,
        education_level: this.teacher.education_level,
        subjects_taught: this.teacher.subjects_taught.split(','),
        class_type: this.teacher.class_type,
        work_on_weekends: this.teacher.work_on_weekends,
        hour_price: this.teacher.hour_price,
      }, this.$route.params.id).then(() => (this.$router.push(`/teacher/${this.$route.params.id}`)));
    },
    update() {
      this.$v.$touch();
      if (!this.$v.$invalid && !this.$v.$required && !this.$v.$minLength) {
        this.updateTeacher();
      }
    },
  },
  update() {
    this.$v.$touch();
    if (!this.$v.$invalid && !this.$v.$required && !this.$v.$minLength) {
      this.updateTeacher();
    }
  },
};
</script>

<style lang="scss" src="../assets/style/components/CreateTeacher.scss" />
