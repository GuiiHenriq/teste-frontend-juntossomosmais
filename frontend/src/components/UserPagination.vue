<template>
  <div class="pagination">
    <ul v-if="totalPages > 1" class="pagination__box">
      <router-link :to="{query: query(1)}">«</router-link>

      <li v-for="page in pages" :key="page">
        <router-link :to="{query: query(page)}">{{page}}</router-link>
      </li>
      
      <router-link :to="{query: query(totalPages)}">»</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    usersLimit: {
      type: Number,
      default: 1
    },
    usersTotal: {
      type: Number,
      default: 1
    }
  },
  methods: {
    query(page) {
      return {
        ...this.$route.query,
        page: page
      };
    }
  },
  computed: {
    totalPages() {
      const total = this.usersTotal / this.usersLimit;
      return (total !== Infinity) ? Math.ceil(total) : 0;
    },
    pages() {
      const current = Number(this.$route.query.page);
      const range = 3;
      const offset = Math.ceil(range / 2);
      const total = this.totalPages;
      const pagesArr = []

      for(let i = 1; i <= total; i++) {
        pagesArr.push(i);
      }

      pagesArr.splice(0, current - offset);
      pagesArr.splice(range, total);

      return pagesArr;
    },
  }
}
</script>

<style lang="scss">
.pagination {
  &__box {
    grid-column: 1 / -1;
    margin-top: 50px;

    li {
      display: inline-block;

      a {
        &.router-link-exact-active {
          background: #4E71A7;
          color: #fff;
        }
      }
    }

    a {
      padding: 6px 14px;
      border-radius: 2px;
      margin: 4px;
      font-size: 17px;

      &:hover {
        background: #4E71A7;
        color: #fff;
      }
    }
  }
}
</style>