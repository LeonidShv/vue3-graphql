<template>
  <div v-if="isVisible" class="modal-overlay" @click="backgroundClick">
    <div class="modal" @click.stop>
      <button class="btn-close" @click="closeModal">Close</button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const isVisible = computed(() => props.show);

const emits = defineEmits(['update:show']);
const closeModal = () => {
  emits('update:show', false);
};

const backgroundClick = () => {
  closeModal();
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  width: 500px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-close {
  float: right;
}
</style>
