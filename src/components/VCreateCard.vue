<template>
  <div class="card-constructor">
    <h1>Create new card</h1>
    <div class="card-constructor__info">
      <VInput
        class="card-constructor__info-item"
        placeholder="Image Link"
        isRequired
        @inputModel="(val) => valueAvatar = val" 
      />
      <VInput
        class="card-constructor__info-item"
        placeholder="Name"
        isRequired
        @inputModel="(val) => valueName = val"
      />
      <VInput
        class="card-constructor__info-item"
        placeholder="Last Name"
        isRequired
        @inputModel="(val) => valueLastName = val"
      />
      <VInput
        class="card-constructor__info-item"
        placeholder="Phone number"
        inputType="tel"
        isRequired
        @inputModel="(val) => valuePhone = val"
      />
      <VButton
        class="card-constructor__info-item"
        btnValue="Create new Card"
        @click="sendData"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import VInput from './common/VInput.vue';
import VButton from './common/VButton.vue';

export default {
  name: 'VCreateCard',
  components: {
    VInput,
    VButton,
  },
  data() {
    return {
      valueAvatar: '',
      valueName: '',
      valueLastName: '',
      valuePhone: ''
    };
  },
  methods: {
    ...mapActions(['putData']),
    sendData() {
      this.putData({
        id: new Date().getTime(),
        name: this.valueName,
        lastName: this.valueLastName,
        phone: this.valuePhone,
        avatar: this.valueAvatar,
      });

      this.$router.go(-1);
    },
  }
};
</script>

<style lang="less" scoped>
.card-constructor {
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-border);
  }
}
</style>
