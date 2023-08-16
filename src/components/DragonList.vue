<template>
  <section>
    <section v-for="dragon in dragons.dragons" :key="dragon.id" class="dragon-info-wrapper" @click="() => clickItem(dragon)">
      <VDetailInfo :item="dragon" :props-list="['name', 'id', 'type', 'active']" />
    </section>
  </section>
  <VModal :show="modalVisible"  @update:show="closeModal">
    <DragonInfo :dragon-id="currentDragonId"/>
  </VModal> 
</template>

<script setup lang="ts">
import { ref } from "vue";
import DragonInfo from "./DragonInfo.vue";
import VDetailInfo from "./VDetailInfo.vue";
import VModal from "./VModal.vue";

defineProps({
  dragons: {
    type: Object,
    required: true,
  },
});

// current selected id
const currentDragonId = ref();

// modal
const useModal = () => {
  const modalVisible = ref(false);
  const closeModal = () => {
    modalVisible.value = false;
  };

  const openModal = () => {
    modalVisible.value = true;
  };

  return {
    modalVisible,
    closeModal,
    openModal,
  };
};
const {modalVisible, openModal, closeModal} = useModal();

const clickItem = (dragonItem) => {
  openModal();
  currentDragonId.value = dragonItem.id;
};

</script>

<style scoped >
.dragon-info-wrapper:not(:last-child) {
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
