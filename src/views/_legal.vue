<template>
  <div class="legal" @click.stop="toggle" :class="{ collapsed: collapsed }">
    <Comment
      v-if="collapsed"
      :comment="`(c) ${year} Radin Shayanfar`"
    >
      <Collapsed/>
    </Comment>
    <CommentBlock
      v-else
      :comment="`(c) ${year}\n\nRadin Shayanfar\nTehran, Iran\n\nme@rshayanfar.ir`"
    />
  </div>
</template>

<script lang="ts">
  import { track } from "../util";

  import Comment from "./_comment.vue";
  import CommentBlock from "./_comment_block.vue";
  import Collapsed from "./_collapsed.vue";

  const openOnStart = window.location.hash === "#legal";

  export default {
    data() {
      return {
        collapsed: !openOnStart
      };
    },
    mounted() {
      if (openOnStart) {
        setTimeout(() => {
          window.scrollTo({ top: this.$el.offsetTop });
        }, 1750);
      }
    },
    methods: {
      toggle() {
        this.collapsed = !this.collapsed;
        track((this.collapsed ? "Close" : "Open") + "Legal", "none");
      }
    },
    computed: {
      year() {
        return new Date().getFullYear();
      }
    },
    components: {
      Comment,
      CommentBlock,
      Collapsed
    }
  };
</script>
