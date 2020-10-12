<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <th v-for="(column, index) in columns" :key="index">
          {{ column }}
        </th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td v-for="(column, index) in columns" :key="index">
            {{ item[column] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
    },
    data: {
      type: Array,
    },
  },
};
</script>
