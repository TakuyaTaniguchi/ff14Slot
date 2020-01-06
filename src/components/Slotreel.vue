<template>
  <div>
    <ul>
      <li>
        <img src="../assets/Paladin.png" alt="Paladin" />
      </li>
      <li>
        <img src="../assets/Dragoon.png" alt="Dragoon" />
      </li>
      <li>
        <img src="../assets//WhiteMage.png" alt="WhiteMage" />
      </li>
    </ul>
    <button @click="stopReel">●</button>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
export default class Slotrell extends Vue {
  stopReel() {
    console.log("a");
  }
}
</script>

<style lang="scss" scoped></style>
