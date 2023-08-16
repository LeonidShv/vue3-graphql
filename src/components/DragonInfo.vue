<template>
  <div v-if="!loading && !error && dragon">
    <VDetailInfo :item="dragon" :props-list="['name', 'description', 'type', 'first_flight', 'active', 'wikipedia']" />
  </div>
  <VLoader :value="loading" />
</template>

<script setup lang="ts">
import { QUERY_DRAGON_ID } from "@/graphQl/index.ts";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import VDetailInfo from "./VDetailInfo.vue";
import VLoader from "./VLoader.vue";

const props = defineProps({
  dragonId: {
    type: String,
    required: true,
  },
});

const dragonId = computed(() => props.dragonId);
const { result: dragonResult, loading, error } = useQuery(QUERY_DRAGON_ID, {
  dragonId: dragonId,
});

const dragon = computed(() => {
  return dragonResult.value?.dragon || {};
});
</script>
