<template>
  <input
    class="v-input"
    :class="classes"
    :type="inputType"
     @blur="validate"
  />
</template>

<script>3
export default {
  name: 'VInput',
  props: {
    inputType: { type: String, default: 'text' },
    isRequired: { type: Boolean, default: false }
  },
  data() {
    return {
      isSuccess: false,
      isFailed: false,
    };
  },
  computed: {
    classes() {
      return {
        'v-input__text': this.inputType === 'text',
        'v-input_required': this.isRequired,
        'v-input_success': this.isSuccess,
        'v-input_failed': this.isFailed,
      }
    },
  },
  methods: {
    validate({ target }) {
      if (!this.isRequired) {
        this.isSuccess = true;
        this.emitData(target.value)

        return;
      }

      if (target.value.length < 3) {
        this.isSuccess = false;
        this.isFailed = true;
  
        return;
      } 

      this.isSuccess = true;
      this.isFailed = false;

      this.emitData(target.value)
    },
    emitData(data) {
      this.$emit('inputModel', data)
    },
  },
};
</script>

<style lang="less" scoped>
.v-input {
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);

  &_success {
    border-color: green;
  }

  &_failed {
    border-color: red;
  }
}
</style>