<template>
  <div>
    <div class="p-slotreel">
        <ul class="p-slotreel_column">
            <li @click="stopReel(11)">
                <img src="../assets/Paladin.png" alt="Paladin" />
            </li>
            <li @click="stopReel(12)">
                <img src="../assets/Dragoon.png" alt="Dragoon" />
            </li>
            <li @click="stopReel(13)">
                <img src="../assets//WhiteMage.png" alt="WhiteMage" />
            </li>
        </ul>
        <ul class="p-slotreel_column">
            <li @click="stopReel(21)">
                <img src="../assets/Paladin.png" alt="Paladin" />
            </li>
            <li @click="stopReel(22)">
                <img src="../assets/Dragoon.png" alt="Dragoon" />
            </li>
            <li @click="stopReel(23)">
                <img src="../assets//WhiteMage.png" alt="WhiteMage" />
            </li>
        </ul>
        <ul class="p-slotreel_column">
            <li @click="stopReel(31)">
                <img src="../assets/Paladin.png" alt="Paladin" />
            </li>
            <li @click="stopReel(32)">
                <img src="../assets/Dragoon.png" alt="Dragoon" />
            </li>
            <li @click="stopReel(33)">
                <img src="../assets//WhiteMage.png" alt="WhiteMage" />
            </li>
        </ul>
    </div>
    {{getSlot}}
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
export default class Slotrell extends Vue {
  stopReel() {
      
  }

  get getSlot(){
    return this.$store.getters['slot/getSlot'];
  }
}
</script>

<style lang="scss" scoped>
.p-slotreel{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &_column{
        padding: 0;
    }

}
</style>
