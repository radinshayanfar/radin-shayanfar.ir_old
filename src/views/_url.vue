<template>
  <span class="string">
    '<a :href="url" target="_blank" @click="openLink">{{display}}</a>'
  </span>
</template>

<script lang="ts">
  import { formatCode } from '../util';
  import { track } from '../util';

  export default {
    props: [
      'value',
      'url',
    ],
    methods: {
      openLink() {
        track('OpenLink', this.url);
      },
    },
    computed: {
      display() {
        if (this.url.length == 0) {
          this.url = this.value;
        }
        if (this.value.length > 70) {
          return this.value.replace('http://', '').replace('https://', '');
        }
        return this.value;
      },
    },
  };
</script>
