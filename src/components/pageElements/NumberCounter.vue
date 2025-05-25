<script setup lang="ts">
import {ref, onMounted} from 'vue'

const props = defineProps({
  endValue: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 2000,
  },
  classes : {
    type: String,
    default: ''
  }
})

const displayedNumber = ref(0)

function easeInOutQuad(t) {
  return t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t
}

onMounted(() => {
  const startTime = performance.now()
  const startValue = 0

  function animate(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    const easedProgress = easeInOutQuad(progress)

    displayedNumber.value = startValue + (props.endValue - startValue) * easedProgress

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      displayedNumber.value = props.endValue // ensure it ends exactly
    }
  }

  requestAnimationFrame(animate)
})
</script>

<template>
  <p :class=classes>
    {{ Math.floor(displayedNumber) }}
  </p>
</template>