<template>
  <component :is="currentComponent" />
</template>

<script>
import ChaozhouGuchenView from '@/views/detail/ChaozhouGuchenView.vue'
import LonghuGuzhaiView from '@/views/detail/LonghuGuzhaiView.vue'
import ChengYangGangView from '@/views/detail/ChengYangGangView.vue'
import QianmeiView from '@/views/detail/QianmeiView.vue'
import FoshanZumiaoView from '@/views/detail/FoshanZumiaoView.vue'
import ShawanGuzhenView from '@/views/detail/ShawanGuzhenView.vue'
import DalingView from '@/views/detail/DalingView.vue'
import SongtangView from '@/views/detail/SongtangView.vue'
import YannanfeiChatianView from '@/views/detail/YannanfeiChatianView.vue'
import QiaoxiGuyunView from '@/views/detail/QiaoxiGuyunView.vue'
import QiaoxiangView from '@/views/detail/QiaoxiangView.vue'
import NanhuaYouluView from '@/views/detail/NanhuaYouluView.vue'

export default {
  name: 'VillageDetailLayout',
  components: {
    ChaozhouGuchenView,
    LonghuGuzhaiView,
    ChengYangGangView,
    QianmeiView,
    FoshanZumiaoView,
    ShawanGuzhenView,
    DalingView,
    SongtangView,
    YannanfeiChatianView,
    QiaoxiGuyunView,
    QiaoxiangView,
    NanhuaYouluView
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
      const villageId = parseInt(this.$route.params.id)
      const componentMap = {
        1: 'ChaozhouGuchenView',
        2: 'LonghuGuzhaiView',
        7: 'ChengYangGangView',
        8: 'QianmeiView',
        3: 'FoshanZumiaoView',
        4: 'ShawanGuzhenView',
        9: 'DalingView',
        10: 'SongtangView',
        5: 'YannanfeiChatianView',
        6: 'QiaoxiGuyunView',
        11: 'QiaoxiangView',
        12: 'NanhuaYouluView'
      }
      this.currentComponent = componentMap[villageId] || 'ChaozhouGuchenView'
    }
  }
}
</script>
