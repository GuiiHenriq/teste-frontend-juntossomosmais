<template>
  <main>
    <loading-content v-show="showLoad">
      <loader-box>Loading...</loader-box>
    </loading-content>

    <card-wrapper v-if="dataUser">
     <card-container>
       <ul>
         <li>
            <card-image :src="dataUser.picture.large" alt="" />
            <card-title>{{dataUser.name.first}} {{dataUser.name.last}}</card-title>
            <card-subtitle>{{dataUser.location.street}}</card-subtitle>
            <p>{{dataUser.location.city}}</p>
            <p>{{dataUser.location.state}} - CEP: {{dataUser.location.postcode}}</p>
            <card-phone>
              <img class="icon" src="../assets/ico-phone.svg" alt="">
              <p>{{dataUser.phone}}</p>
            </card-phone>
            <card-mail>
              <img class="icon" src="../assets/ico-mail.svg" alt="">
              <p>{{dataUser.email}}</p>
            </card-mail>
         </li>
       </ul>
     </card-container>
   </card-wrapper>
  </main>
</template>

<script>
import { api } from "@/services.js";
import { LoadingContent, LoaderBox, CardWrapper, CardContainer, CardImage, CardTitle, CardSubtitle, CardPhone, CardMail } from "./styled";


export default {
  name: 'UserPage',
  components: {
    LoadingContent,
    LoaderBox,
    CardWrapper,
    CardContainer,
    CardImage,
    CardTitle,
    CardSubtitle,
    CardPhone,
    CardMail
  },
  data() {
    return {
      showLoad: false,
      dataUser: null
    };
  },
  props: ["id"],
  methods: {
    getUser: async function() {
      this.showLoad = true;

      try {
        await api.get(`/api/${this.id}`).then(r => {
          this.dataUser = r.data;
        });
      } catch(error) {
        console.log(error);
      } finally {
        this.showLoad = false;
      }
    }
  },
  created() {
    this.getUser();
  }
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  width: 100%;
}

.icon {
  width: 22px;
  height: 22px;
}
</style>
