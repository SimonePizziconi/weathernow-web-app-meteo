<template>
  <div class="Jumbo">
    <div class="flex-container">
      <div class="current-weather">Gradi Attuale</div>
      <div class="icon-weather">Icona Meteo</div>
    </div>
    <div class="city">Città</div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .Jumbo {
    // DEBUG
    height: 500px;
    width: 100%;
    background-color: aqua;

    .flex-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 70%;
      margin: 0 auto;

      .current-weather {
        // DEBUG
        width: 100px;
        height: 100px;
        background-color: bisque;
      }

      .icon-weather {
        // DEBUG
        width: 100px;
        height: 100px;
        background-color: bisque;
      }
    }

    .city {
      text-align: center;
    }
  }
</style>
