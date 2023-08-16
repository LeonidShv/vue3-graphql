<template>
  <div v-if="item">
    <div v-for="prop in propsList" :key="prop">
      <div><label>{{ prop }}</label>
        <span v-if="isURL(item[prop])">
          <a :href="item[prop]" target="_blank" rel="noopener noreferrer">{{ item[prop] }}</a>
        </span>
        <span v-else>{{ item[prop] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isURL } from "@/utils/index.ts";

const { item, propsList } = defineProps<{
  item: Record<string, any>;
  propsList: string[];
}>();

</script>

<style scoped>
label {
  font-weight: bold;
  margin-right: 10px;
}
</style>
