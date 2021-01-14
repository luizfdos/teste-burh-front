<template>
  <form class="card" @submit.prevent="submitForm">
    <section class="avatar"><img src="https://source.unsplash.com/collection/8874679/800x800" alt=""></section>
    <section class="details">
      <h3>Novo professor</h3>
      <div class="item">
        <div>Endereço da imagem de perfil</div>
        <div>
          <input
            type="url"
            v-model.trim="avatar_url"
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
            v-model.trim="name"
            @change="$v.name.$touch()"
            placeholder="Digite o nome"
            :class="{ 'error': $v.name.$error}"
          />
        </div>
        <p v-if="$v.name.$error">
          Por favor informe o nome
        </p>
        <p v-if="!$v.name.minLength">
          O nome deve ter pelo menos {{$v.name.$params.minLength.min}} letras.
        </p>
      </div>
      <div class="item">
        <div>Número de telefone</div>
        <div>
          <input
            type="text"
            v-model="phone_number"
            v-mask="'+55 (##) #####-####'"
            @change="$v.phone_number.$touch()
            ">
        </div>
        <p v-if="$v.phone_number.$error">
          Por favor informe o telefone
        </p>
      </div>
      <div class="item">
        <div>Data de nascimento</div>
        <div>
          <input
            type="date"
            v-model.trim="birth_date"
            @change="$v.birth_date.$touch()"
            :class="{ 'error': $v.birth_date.$error}"

          />
        </div>
        <p v-if="$v.birth_date.$error">
          Por favor informe a data
        </p>
      </div>
      <div class="item">
        <div>Escolaridade</div>
        <select
        v-model.trim="education_level"
        @change="$v.education_level.$touch()"
        placeholder="Digite o nome"
        :class="{ 'error': $v.education_level.$error}"
        >
          <option value="Ensino Médio Completo">Ensino Médio Completo</option>

          <option value="Ensino Superior Completo">
            Ensino Superior Completo
          </option>

          <option value="Mestrado">Mestrado</option>

          <option value="Doutorado">Doutorado</option>
        </select>
        <p v-if="$v.education_level.$error">
          Por favor selecione a Escolaridade
        </p>
      </div>

      <div class="item">
        <div>Assuntos ensinados</div>
        <div>
          <input
            type="text"
            v-model.trim="subjects_taught"
            @change="$v.subjects_taught.$touch()"
            :class="{ 'error': $v.subjects_taught.$error}"
            placeholder="Assuntos separados por vírgula"
            value=""
          />
        </div>
        <p v-if="$v.subjects_taught.$error">
          Por favor informe os assuntos ensinados
        </p>
      </div>

      <div class="item">
        <div>Tipo de aula</div>
        <div>
          <span>
            <input
            type="radio"
            v-model.trim="class_type"
            value="Presencial"
            @change="$v.class_type.$touch()"
             />
            Presencial
          </span>

          <span>
            <input
            type="radio"
            v-model.trim="class_type"
            value="À distância"
            @change="$v.class_type.$touch()"
            />
            À distância
          </span>
        </div>
        <p v-if="$v.class_type.$error">
          Por favor selecione o tipo de aula
        </p>
      </div>
      <div class="item">
        <div>Atende finais de semana</div>
        <div>
          <label class="switch">
            <input type="checkbox" v-model.trim="taught_on_weekends">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
       <div class="item">
        <div>Preço por hora/aula</div>
        <div>
          <input
            type="float"
            v-model.trim="hour_price"
            @change="$v.hour_price.$touch()"
            placeholder="R$ preço em reais"
          />
        </div>
        <p v-if="!$v.hour_price.between">
          Informe um valor entre
          R${{$v.hour_price.$params.between.min}} e
          R${{$v.hour_price.$params.between.max}}</p>
      </div>
      <button type="submit" @click.prevent="create()">Salvar</button>
    </section>
  </form>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators';
import { createTeacher } from '../services';

export default {

  data() {
    return {
      name: '',
      phone_number: '',
      avatar_url: '',
      birth_date: '',
      education_level: '',
      subjects_taught: '',
      class_type: '',
      taught_on_weekends: '',
      hour_price: '',
    };
  },
  validations: {
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
  methods: {
    async submitForm() {
      const response = await createTeacher({
        name: this.name,
        phone_number: this.phone_number,
        avatar_url: this.avatar_url,
        birth_date: this.birth_date,
        education_level: this.education_level,
        subjects_taught: this.subjects_taught.split(','),
        class_type: this.class_type,
        taught_on_weekends: this.taught_on_weekends,
        hour_price: this.hour_price,
      });
      this.$router.push(`/teacher/${response.data._id}`);
    },
    create() {
      this.$v.$touch();
      if (!this.$v.$invalid && !this.$v.$required && !this.$v.$minLength) {
        this.submitForm();
      }
    },
  },
};
</script>

<style lang="scss" src="../assets/style/components/CreateTeacher.scss" />
