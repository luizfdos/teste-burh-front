<template>
  <div class="card table-container">
    <div class="header">
      <a href="/create" class="button">Novo</a>
    </div>
    <table width="100%">
      <thead>
        <tr>
          <th>Professor</th>
          <th>Acompanhamento</th>
          <th id>Alunos</th>
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
          <td>
            <span
              v-for="subject in teacher.subjects_taught"
              v-bind:key="subject"
              >{{ subject }}</span
            >
          </td>
          <td>
            <div class="total_students">{{ teacher.total_students }}</div>
          </td>
          <td>
            <a :href="'/teachers/' + teacher.id">ver</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      teachers: [{
        id: 1,
        name: 'Dannielle Vidal Siqueira',
        avatar_url: 'https://media-exp1.licdn.com/dms/image/C4D35AQGX7LmChE_fXw/profile-framedphoto-shrink_800_800/0/1608746748556?e=1610215200&v=beta&t=KZK-YkmMCDZoihE0wTZl2oR8-elQVIGTECu4mH5JeHU',
        subjects_taught: ['Graphic Design', 'Ux/Ui Design'],
        total_students: 10,
      },
      {
        id: 1,
        name: 'Rubens Pereira',
        avatar_url: 'https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
        subjects_taught: ['ReactJS', 'Typescript', 'VueJS', 'Elixir'],
        total_students: 8,
      },
      {
        id: 1,
        name: 'Leo Camargo',
        avatar_url: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        subjects_taught: ['ReactJS', 'Typescript', 'VueJS', 'Elixir'],
        total_students: 8,
      },
      ],
    };
  },
};
</script>

<style lang="scss">

.card {
  min-height: 400px;
  width: 800px;
  margin: 45px auto;
  background-color: var(--panel-color);
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  box-shadow: 1px 1px 5px 5px rgba(51, 26, 26, 0.5);

  opacity: 0;
  animation-name: left;
  animation-duration: 700ms;
  animation-fill-mode: forwards;
  transition-timing-function: ease;
}

@keyframes left {
  from {
      transform: translateX(20px);
  }
  to {
      opacity: 1;
  }
}

.details {
  padding: 32px;
  h3 {
    color: var(--hover-color);
    text-transform: uppercase;
  }
  span {
    padding: 6px 10px;
    margin: 5px 0 0 10px;
    display: inline-block;
    border-radius: 7px;
    background-color: var(--hover-color);
    color: var(--main-bg-color);
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .item {
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3 );
    &:last-child {
      border: none;
    }
    div:nth-child(1) {
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.8px;
      font-weight: 500;
      padding-bottom: 4px;
    }
    div:nth-child(1) {
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.8px;
      font-weight: 500;
      padding-bottom: 4px;
    }
    .item div:nth-child(2) {
      font-size: 18px;
      font-weight: bold;
      filter: brightness(150%);
    }
  }
}

.table-container {
  display: block;
  padding: 40px;
  box-sizing: border-box;
  width: 1000px;
  height: auto;
}

.table-container table {
  border-spacing: 0;
}

.table-container thead tr th {
  text-align: left;
}

td, th {
  padding: 16px;
  border-bottom: 1px solid var(--secondary-text-color);
}

th {
  text-transform: uppercase;
  font-size: 14px;
}

tbody tr:last-child td {
  border-bottom: none;
}

tbody tr td:first-child {
  display: grid;
  grid-template-columns: 64px 1fr;
  align-items: center;
}

tbody tr td:first-child span {
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-shadow: 3px 2px 6px -4px white;
  border: 2px solid var(--text-color);
}

.table-container tr td:last-child a,
.table-container span {
  background-color: var(--hover-color);
  padding: 6px 16px;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-size: 12px;
  border-radius: 4px;
  margin-bottom: auto;

}

.table-container span {
  padding: 4px 6px;
  margin-right: 4px;
  box-shadow: 1px 2px 5px -4px white;
}

.table-container thead tr th:last-child,
td:last-child, div.total_students {
  text-align: center;
}

</style>
