<template>
  <component :is="currentComponent" />
</template>

<script>
import Exhibition1 from '@/views/exhibitions/Exhibition1.vue'
import Exhibition2 from '@/views/exhibitions/Exhibition2.vue'
import Exhibition3 from '@/views/exhibitions/Exhibition3.vue'
import Exhibition4 from '@/views/exhibitions/Exhibition4.vue'
import Exhibition5 from '@/views/exhibitions/Exhibition5.vue'

export default {
  name: 'ExhibitionDetailLayout',
  components: {
    Exhibition1,
    Exhibition2,
    Exhibition3,
    Exhibition4,
    Exhibition5
  },
  data() {
    return {
      currentComponent: null
    }
  },
  created() {
    this.loadComponent()
  },
  watch: {
    '$route.params.id': {
      handler: 'loadComponent',
      immediate: true
    }
  },
  methods: {
    loadComponent() {
      const exhibitionId = parseInt(this.$route.params.id)
      const componentMap = {
        1: 'Exhibition1',
        2: 'Exhibition2',
        3: 'Exhibition3',
        4: 'Exhibition4',
        5: 'Exhibition5'
      }
      this.currentComponent = componentMap[exhibitionId] || 'Exhibition1'
    }
  }
}
</script>
