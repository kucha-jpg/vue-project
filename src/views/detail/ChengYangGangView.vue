<template>
  <div class="village-detail">
    <DetailNavBar />

    <div class="container">
      <div class="detail-content">
        <div class="detail-section">
          <h2>程洋冈简介</h2>
          <div class="text-content">
            <p>程洋冈，地处广东省汕头市澄海区莲下镇。古时候，因其挺立在一片汪洋大海之中的一个山冈，以故取名程洋冈，古时候简称凤岭，又叫岐陇或旗陇，又被称为凤鸣冈，因东有凤岭，北有凤冈山而得名。</p>
            <p>该地于唐朝出现聚落，并建造了凤岭宫，宋代成为凤岭古港所在，后成为海上丝绸之路节点港口，南宋建立防御性寨抵御元兵，明清发展出糖业，以此更加繁荣。清末与周边6村合称程前七乡，抗战胜利后并入莲中乡。</p>
            <p>建筑以丹砂古寺、虎丘摩崖石刻、侨宅群、凤岭宫、古葵庵出名。这些建筑不仅具有历史价值，还展现了程洋冈独特的文化底蕴。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>程洋冈文化</h2>
          <div class="text-content">
            <p>程洋冈的民俗文化丰富多彩，包括游神赛会、游花灯、猜灯谜、烧番塔、舞狮舞龙等。其中，"营（迎）老爷"是程洋冈最热闹的民俗活动之一，每年都会吸引众多游客和当地居民参与。</p>
            <p>此外，程洋冈还保留着许多传统手工艺，如潮绣、木雕等，这些技艺代代相传，成为了程洋冈文化的重要组成部分。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>图片展示</h2>
          <div class="image-gallery">
            <div class="gallery-row">
              <img v-for="(img, index) in firstRowImages" :key="index" :src="img" :alt="`程洋冈图片${index + 1}`">
            </div>
            <div class="gallery-row">
              <img v-for="(img, index) in secondRowImages" :key="index" :src="img" :alt="`程洋冈图片${index + 4}`">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailNavBar from '@/components/DetailNavBar.vue'

export default {
  name: 'ChengYangGangView',
  components: {
    DetailNavBar
  },
  data() {
    return {
      village: {
        id: 2,
        name: '程洋冈',
        category: 'chaoshan',
        location: '广东省汕头市澄海区莲下镇',
        description: '历史悠久的程洋冈，海上丝绸之路节点港口，以丹砂古寺、虎丘摩崖石刻等建筑闻名。',
        image: '/yuecunwenmai1/images/chaoshandiqu/chengyanggang/chengyanggang1.png'
      },
      images: [
        '/yuecunwenmai1/images/chaoshandiqu/chengyanggang/chengyanggang1.png',
        '/yuecunwenmai1/images/chaoshandiqu/chengyanggang/chengyanggang2.png',
        '/yuecunwenmai1/images/chaoshandiqu/chengyanggang/chengyanggang3.png',
        '/yuecunwenmai1/images/chaoshandiqu/chengyanggang/chengyanggang4.png',
        '/yuecunwenmai1/images/chaoshandiqu/chengyanggang/chengyanggang5.png',
        '/yuecunwenmai1/images/chaoshandiqu/chengyanggang/chengyanggang6.png'
      ]
    }
  },
  computed: {
    firstRowImages() {
      return this.images.slice(0, 3); // 第一行显示前3张图片
    },
    secondRowImages() {
      return this.images.slice(3, 6); // 第二行显示后3张图片
    }
  }
}
</script>

<style scoped>
/* 重置默认边距 */
body {
  margin: 0;
  padding: 0;
}

.village-detail {
  font-family: "Microsoft YaHei", sans-serif;
  max-width: 100vw;
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.detail-content {
  background: white;
  padding: 30px;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.detail-section {
  margin-bottom: 40px;
  padding: 0 20px;
}

.detail-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.text-content {
  margin-bottom: 20px;
}

.text-content p {
  line-height: 1.8;
  color: #666;
  margin-bottom: 15px;
}

.image-gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.gallery-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.image-gallery img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  object-fit: cover;
  aspect-ratio: 16/9;
}

.image-gallery img:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .container {
    padding: 20px 15px;
  }

  .detail-content {
    padding: 20px;
  }

  .detail-section {
    padding: 0 10px;
  }

  .gallery-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-row {
    grid-template-columns: 1fr;
  }
}
</style>
