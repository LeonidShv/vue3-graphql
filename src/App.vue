<template>
  <section>
    <h2>SpaceX</h2>

    <section class="spacex-block">
      <h2>Company info</h2>
      <div v-if="company">
        <p>founder: {{ company.company.founder }}</p>
        <p>year: {{ company.company.founded }}</p>
        <p>
          {{ company.company.summary }}
        </p>
        <a
          v-if="company.company?.links?.website"
          :href="company.company?.links?.website"
          target="_blank"
          >Website</a
        >
      </div>
      <VLoader :value="companyLoading" />
      <p v-show="isCompanyError">
        Bad request to company info, {{ isCompanyError }}
      </p>
    </section>

    <section class="spacex-block">
      <h2>Mutate users</h2>

      <VLoader :value="sendMessageLoading" />

      <button @click="sendMessage">Send message</button>

      {{ sendMessageError ? sendMessageError : "" }}
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";
import VLoader from "@/components/VLoader.vue";

import { useQuery, useMutation } from "@vue/apollo-composable";
import { QUERY_COMPANY_INFO, MUTATE_INSERT_USERS } from "@/graphQl/index.ts";

const {
  result: company,
  loading: companyLoading,
  error: isCompanyError,
} = useQuery(QUERY_COMPANY_INFO);

const object = ref({
  objects: [
    {
      name: "Leo",
    },
  ],
});
const {
  mutate: sendMessage,
  loading: sendMessageLoading,
  error: sendMessageError,
  onDone,
} = useMutation(MUTATE_INSERT_USERS, {
  variables: object.value,
});

onDone((result) => {
  console.log(result);
});
</script>

<style>
.spacex-dragon {
  margin-bottom: 8px;
  padding-bottom: 8px;
  box-shadow: var(--shadow);
}

.spacex-block {
  position: relative;
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid #c2bcbc;
}

button {
  cursor: pointer;
  background: #fff;
  padding: 8px;
  border: red;
}
</style>
