<template>
  <div class="search">
    <form class="search__box">
      <input name="search" id="search" type="text" placeholder="Buscar Aqui" v-model="search">
      <input type="submit" id="submit" value="Buscar" @click.prevent="searchUser">
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserSearch',
  data() {
    return {
      search: "",
    }
  },
  methods: {
    searchUser() {
      let valueSearch = this.search.toLowerCase().split(" ");

      if(valueSearch[0] === undefined) valueSearch[0] = '';
      if(valueSearch[1] === undefined) valueSearch[1] = '';
      if(valueSearch[2] === undefined) valueSearch[2] = ''; 

      this.$router.push({ query: {firstName: valueSearch[0], lastName: valueSearch[2] ? `${valueSearch[1]} ${valueSearch[2] }` : valueSearch[1]} })
    }
  }
}
</script>

<style scoped lang="scss">
.search {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  &__box {
    position: relative;
    max-width: 550px;
    width: 100%;

    input {
      border-radius: 4px;
      border: 1px solid white;
      padding: 15px;
      box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
      transition: all 0.3s;
      font-size: 1rem;
      margin-bottom: 15px;
    }

    #search {
      width: 100%;
      padding: 20px;
      border: none;

      &:focus,
      &:hover {
        transform: scale(1.1);
      }
    }

    #submit {
      width: 62px;
      height: 62px;
      background: url("../assets/search.svg") no-repeat center center;
      text-indent: -150px;
      border: none;
      cursor: pointer;
      position: absolute;
      top: 0px;
      right: 0px;
      box-shadow: none;
    }
  }
}


/* ================= Responsive ================= */
@media screen and (max-width: 768px) {
  .search {
    &__box {
      width: 95%;
    }
  }
}
</style>
