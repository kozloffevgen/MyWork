<template>
  <input 
    class="v-button"
    :type="btnType"
    :value="btnValue"
  />
</template>

<script>
export default {
  name: 'VButton',
  props: {
    btnType: { type: String, default: 'button'},
    btnValue: { type: String, default: ''},
  },
};
</script>

<style lang="less" scoped>
.v-button {
  width: max-content;
  margin: 0 auto;
  color: var(--color-text);
  background-color: var(--color-button);
  font-size: 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 10px 16px;
  outline: none;
  cursor: pointer;
  
  &:hover {
    background-color: var(--color-button-hover);
  }
}
</style>