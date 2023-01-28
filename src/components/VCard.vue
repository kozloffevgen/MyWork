<template>
  <div class="card">
    <div class="card__avatar-container">
      <img
        :src="dataCard.avatar"
        alt=""
        class="card__avatar"
      >
    </div>
    <div class="card__info">
      <div class="card__info-item">
        <span>Name: </span>
        <span>{{ dataCard.name }}</span>
      </div>
      <div class="card__info-item">
        <span>Last Name: </span>
        <span>{{ dataCard.lastName }}</span>
      </div>
      <div class="card__info-item">
        <span>Phone: </span>
        <span> {{ dataCard.phone }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCard',
  props: {
    dataCard: { type: Object, required: true }
  },
};
</script>

<style lang="less" scoped>
.card {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 20px;

  &__avatar {
    max-width: 150px;
    padding: 20px;
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    background-color: var(--color-bg-blue);
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 14px;
    max-width: 190px;
    margin: 10px auto 0;
    text-align: left;
  }
}
</style>