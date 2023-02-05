<template>
  <div>
    <svg
      v-for="(row, rowIndex) in dots"
      :key="rowIndex"
      :y="rowIndex * 20"
    >
      <circle
        v-for="(dot, dotIndex) in row"
        :key="dotIndex"
        :cx="dotIndex * 20"
        :cy="10"
        :r="5"
        fill="white"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue';
  // const state = reactive({
  //   dots: Array(12).fill().map(() => Array(12).fill(1))
  // })

  const rows = 12
  const rowGap = 12
  const columns = 12
  const columnGap = 12

  const dots = [1,2,3,1,2,3,1,2,3]
</script>
