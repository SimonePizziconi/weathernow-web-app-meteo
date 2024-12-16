<template>
  <header>
    <nav>
      <div class="logo">LOGO</div>
      <SearchBar />
      <div class="dark-mode">Shift-Mode</div>
    </nav>
  </header>
</template>

<script>
  import SearchBar from '@/components/SearchBar.vue';
  export default {
    components: {
      SearchBar,
    },
  };
</script>

<style lang="scss" scoped>
  header {
    height: 60px;
    // DEBUG
    background-color: blue;

    nav {
      padding: 0 10px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
