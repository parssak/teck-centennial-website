<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="sm:rounded-t-lg bg-accent text-white px-6 py-2 font-medium">
          Table 1: Identification types
        </div>
        <div
          class="shadow overflow-hidden border border-offblack sm:rounded-b-lg"
        >
          <table class="min-w-full divide-y divide-offblack">
            <thead class="bg-accent-lightest">
              <tr>
                <th
                  v-for="(header, headerIdx) in headers"
                  :key="header.label"
                  scope="col"
                  :class="`
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-offblack
                    uppercase
                    tracking-wider
                    ${headerIdx === 0 && 'text-offblack font-semibold'}
                  `"
                >
                  {{ header.label }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-offblack">
              <tr v-for="(item, itemIdx) in items" :key="itemIdx">
                <td
                  v-for="(value, valueIdx) in Object.values(item)"
                  :key="valueIdx"
                  :class="`px-6 py-4 whitespace-nowrap text-sm text-offblack`"
                >
                  {{ value }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const defaultItems = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  {
    name: "Cody Fisher",
    title: "Product Directives Officer",
    role: "Owner",
    email: "cody.fisher@example.com",
  },
];

const defaultHeaders = [
  {
    label: "Name",
  },
  {
    label: "Title",
  },
  {
    label: "Email",
  },
  {
    label: "Role",
  },
];

export default {
  props: {
    items: {
      type: Array,
      default: () => defaultItems,
    },
    headers: {
      type: Array,
      default: () => defaultHeaders,
    },
  },
};
</script>
