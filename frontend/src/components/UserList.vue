<template>
<div>
  <loading-content v-show="showLoad">
      <loader-box>Loading...</loader-box>
  </loading-content>

  <main>
    <div class="filter">
      <form>
        <p>Filtar por usuário:</p>
        <input type="radio" id="todos" name="filter" value="todos" v-model="selected" @change="filterUser" checked>
        <label for="todos">Todos</label>
        <br>
        <input type="radio" id="especial" name="filter" value="especial" v-model="selected" @change="filterUser">
        <label for="especial">Especial</label>
        <br>
        <input type="radio" id="normal" name="filter" value="normal" v-model="selected" @change="filterUser">
        <label for="normal">Normal</label>
        <br>
        <input type="radio" id="trabalhoso" name="filter" value="trabalhoso" v-model="selected" @change="filterUser">
        <label for="trabalhoso">Trabalhoso</label>
      </form>
    </div>
   <div class="users" v-if="users.length">
     <div class="container">
        <ul class="list-infos">
          <li v-for="(user, index) in users" :key="index" class="list-infos">
            <router-link :to="{name: 'UserPage', params: {id: user.id}}">
              <img :src="user.picture.large" alt="">
              <h1>{{user.name.first}} {{user.name.last}}</h1>
              <h3>{{user.location.street}}</h3>
              <p>{{user.location.city}}</p>
              <p>{{user.location.state}} - CEP: {{user.location.postcode}}</p>
            </router-link>
          </li>
        </ul>
     </div>

     <UserPagination :usersTotal="usersTotal" :usersLimit="usersLimit" />
   </div>

   <div class="users" v-else>
     <div class="container">
       <h1>Usuário não encontrado...</h1>
     </div>
   </div>

  </main>
  </div>
</template>

<script>
import UserPagination from "@/components/UserPagination";
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";
import { LoadingContent, LoaderBox } from "./styled";

export default {
  name: 'UserList',
  components: {
    UserPagination,
    LoadingContent,
    LoaderBox
  },
  data() {
    return {
      showLoad: false,
      users: '',
      selected: '',
      usersLimit: 9,
      usersTotal: 0,
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/api?limit=${this.usersLimit}${query}`;
    },
  },
  methods: {
    getUsers: async function() {
      this.showLoad = true;

      try {
        await api.get(this.url).then(r => {
          this.usersTotal = r.headers['x-total-count'];

          this.users = r.data;
        });
      } catch(error) {
        console.log(error);
      } finally {
        this.showLoad = false;
      }
    },
    filterUser: async function() {
      this.showLoad = true;
      this.$router.push({query: {q: undefined}})

      if(this.selected === "todos") return this.getUsers();

      try {
        await api.get(`/api/range?type=${this.selected}`).then(r => {
          this.users = r.data;
         });
      } catch(error) {
        console.log(error);
      } finally {
        this.showLoad = false;
      }
    },
  },
  watch: {
    url() {
      this.getUsers();
    }
  },
  created() {
    this.getUsers();
  },
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  width: 100%;
}

.filter {
  width: 30%;
  height: max-content;
  margin-right: 10px;

  form {
    background: #FFFFFF;
    padding: 30px 20px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);

    p {
      font-weight: bold;
      margin-bottom: 15px;
    }
  }
}

.users {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  .container {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .list-infos {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;

    li {
      text-align: center;
      list-style: none;
      width: 33.33%;
      width: 30%;
      background: #FFFFFF;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-transform: capitalize;
      margin: 10px;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
      transition: all 0.2s;

      &:hover {
        box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
        transform: scale(1.1);
        position: relative;
        z-index: 1;
      }

      img {
        border-radius: 8px;
      }

      h1 {
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 5px;
        font-weight: normal;
      }
    }
  }
}


/* ================= Responsive ================= */
@media screen and (max-width: 768px) {
  main {
    flex-direction: column;
  }

  .header {
    flex-direction: column;

    .logo {
      width: 100%;
      margin-bottom: 15px;
    }

    .search {
      form {
        justify-content: center;
        display: flex;

        #search {
          max-width: 100%;
          width: 65%;
        }
      }
    }
  }

  .filter {
    width: 100%;
    margin: 0 0 10px 0;
    display: flex;
    justify-content: center;

    form {
      width: 95%;
      box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    }
  }

  .users {
    .container {
      flex-direction: column;

      .list-infos {
        width: 100%;
        margin: 0 0 20px 0;
      }
    }
  }
}
</style>
