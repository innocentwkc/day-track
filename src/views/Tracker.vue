<template>
  <h1>
    {{ currentYear }}
  </h1>
  <div>
    <svg
      :width="((dotRadius * 3) * columns) - dotRadius"
      :height="dotRadius * 2"
      :style="{ marginBottom: rowGap + 'px' }"
      class="dot-row"
      v-for="(week, rowIndex) in daysInWeeks"
      :key="rowIndex"
    >
      <circle
        v-for="({ date, month }, columnIndex) in week"
        class="dot"
        :class="['dot-color-' + (month), { 'current-date': (date == currentDate) }]"
        :key="columnIndex"
        :cx="(columnIndex) * columnGap + dotRadius"
        :cy="dotRadius"
        :r="dotRadius"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, toRefs } from 'vue'
  // const state = reactive({
  //   dots: Array(12).fill().map(() => Array(12).fill(1))
  // })
  import { currentYear, weeks, daysInWeeks, shortDate } from '../assets/ts/yearData'
  
  const dotRadius = 9
  const rows = weeks
  const rowGap = 12
  const columns = 7
  const columnGap = dotRadius * 3

  const date = new Date()
  const year = date.getFullYear()
  const firstDayOfYear: any = new Date(year, 0, 1)
  const lastDayOfYear: any = new Date(year, 11, 31)
  const weeksInYear = Math.ceil((lastDayOfYear - firstDayOfYear) / (7 * 24 * 60 * 60 * 1000))

  // Current date
  const currentDate = shortDate(date)

  // console.log(`There are ${weeksInYear} weeks in the year ${year}.`);
  console.log(currentDate)

</script>

<style lang="scss" scoped>

  $colors: 
    #FFC6C1, 
    #C1FFC6, 
    #C6C1FF, 
    #C1FFF6, 
    #FFC6C6, 
    #C6C1F6, 
    #F6C1FF, 
    #C1FFC1, 
    #FFC1C6, 
    #C1C6FF, 
    #F6FFC1, 
    #C6C1F6;

  .dot-row {
    // height: 20px;
    display: block;
    overflow: visible;

    @for $i from 1 through length($colors) {
      .dot-color-#{$i} {
        fill: nth($colors, $i);

          &:hover {
          fill: rgb(205, 210, 60);
        }
      }
    }

    .current-date {
      fill: rgba(0, 0, 0, 0);
      stroke-width: 2px;
      stroke: red;
      stroke-linecap: round;
    }

  }

</style>
