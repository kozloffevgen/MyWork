<template>
  <div class="catalog">
    <VCard
      v-for="(card, key) in dataCards.content"
      :key="key"
      :dataCard="card"
      class="catalog__item"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VCard from './VCard.vue';

export default {
  name: 'VCatalog',
  components: {
    VCard,
  },
  computed: {
    ...mapState(['dataCards'])
  },
};
</script>

<style lang="less" scoped>
.catalog {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
