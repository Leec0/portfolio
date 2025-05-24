<template>
  <div class="split-chars">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";
import {onMounted} from "vue";

gsap.registerPlugin(SplitText);

onMounted(() => {
  let split = SplitText.create(".split-chars", {type: "chars"});

  gsap.from(split.chars, {
    x: 150,
    autoAlpha: 0,
    duration: 0.7,
    ease: "power4",
    stagger: 0.04,
  })
})
</script>