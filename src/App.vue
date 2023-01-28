<template>
  <div class="catalog-buttons">
    <VButton
      btnValue="Add new card"
      @click="addCard"
    />
    <VButton
      v-if="showBtnBack"
      btnValue="Back"
      @click="moveBack"
    />
  </div>
  <div class="main-content">
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'App',
  components: {
    VButton
  },
  data() {
    return {
      showBtnBack: false,
    };
  },
  watch: {
    $route(to) {
      if (to.path !== '/') {
        this.showBtnBack = true;
      } else {
        this.showBtnBack = false;
      }      
    }
  },
  computed: {
    ...mapState(['dataCards'])
  },
  methods: {
    ...mapActions(['fetchData']),
    addCard() {
      this.$router.push('/add-card');
    },
    moveBack() {
      this.$router.go(-1);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="less" scoped>
.catalog-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-content {
  margin-top: 20px;
}
</style>
