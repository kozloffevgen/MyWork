export default {
  getData(store, data) {
    store.dataCards.content = JSON.parse(atob(data.content));
    store.dataCards.sha = data.sha;
  }
}