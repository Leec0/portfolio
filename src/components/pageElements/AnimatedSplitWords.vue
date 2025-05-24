<template>
  <div class="split-words">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";
import {onMounted} from "vue";

gsap.registerPlugin(SplitText);

onMounted(() => {
  let split = SplitText.create(".split-words", {type: "words"});

  gsap.from(split.words, {
    y: -100,
    opacity: 0,
    rotation: "random(-80, 80)",
    duration: 0.7,
    ease: "back",
    stagger: 0.05
  })
})
</script>