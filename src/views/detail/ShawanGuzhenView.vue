<template>
  <div class="village-detail">
    <DetailNavBar />

    <div class="container">
      <div class="detail-content">
        <div class="detail-section">
          <h2>沙湾古镇简介</h2>
          <div class="text-content">
            <p>沙湾古镇位于广州市番禺区，始建于南宋，距今已有800多年历史，是岭南广府文化的代表地之一。古镇因地处古海湾沙滩之畔而得名，明清时期经济繁荣，涌现出众多富商、文人，留下了丰富的历史文化遗产。</p>
            <p>古镇核心区保留了大量明清及民国时期的岭南传统建筑，如镬耳山墙民居、祠堂、庙宇等，其中何氏大宗祠（留耕堂）是广东四大名祠之一，以精美的石雕、木雕和砖雕著称。沙湾还是广东音乐的发源地之一，诞生了《雨打芭蕉》《赛龙夺锦》等经典名曲。</p>
            <p>此外，沙湾美食闻名遐迩，如沙湾姜撞奶、双皮奶、狗仔粥等，展现了广府饮食文化的精髓。如今，沙湾古镇已成为集历史、文化、美食于一体的旅游胜地，每年吸引众多游客前来感受岭南古韵。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>文化特色</h2>
          <div class="text-content">
            <p>作为岭南广府文化的代表，沙湾古镇在建筑、音乐、美食等方面都有独特表现：</p>
            <ul>
              <li><strong>建筑艺术：</strong>典型的镬耳山墙民居群，精美的祠堂建筑（如留耕堂）</li>
              <li><strong>广东音乐：</strong>发源地之一，代表作有《雨打芭蕉》《赛龙夺锦》</li>
              <li><strong>传统美食：</strong>沙湾姜撞奶、双皮奶、狗仔粥等特色小吃</li>
              <li><strong>民间工艺：</strong>砖雕、木雕、石雕等传统工艺精湛</li>
            </ul>
          </div>
        </div>

        <div class="detail-section">
          <h2>图片展示</h2>
          <div class="image-gallery">
            <div class="gallery-row">
              <img v-for="(img, index) in firstRowImages" :key="index" :src="img" :alt="`沙湾古镇图片${index + 1}`">
            </div>
            <div class="gallery-row">
              <img v-for="(img, index) in secondRowImages" :key="index" :src="img" :alt="`沙湾古镇图片${index + 4}`">
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
  name: 'ShawanAncientTownView',
  components: {
    DetailNavBar
  },
  data() {
    return {
      village: {
        id: 2,
        name: '沙湾古镇',
        category: 'guangzhou',
        location: '广州市番禺区',
        description: '800年历史的岭南广府文化古镇，以传统建筑、广东音乐和美食闻名。',
        image: '/yuecunwenmai1/images/guangfudiqu/shawanguzhen/shawanguzhen2.png'
      },
      images: [
        '/yuecunwenmai1/images/guangfudiqu/shawanguzhen/shawanguzhen1.png',
        '/yuecunwenmai1/images/guangfudiqu/shawanguzhen/shawanguzhen2.png',
        '/yuecunwenmai1/images/guangfudiqu/shawanguzhen/shawanguzhen3.png',
        '/yuecunwenmai1/images/guangfudiqu/shawanguzhen/shawanguzhen4.png',
        '/yuecunwenmai1/images/guangfudiqu/shawanguzhen/shawanguzhen5.png',
        '/yuecunwenmai1/images/guangfudiqu/shawanguzhen/shawanguzhen6.png',
        '/yuecunwenmai1/images/guangfudiqu/shawanguzhen/shawanguzhen7.png'
      ]
    }
  },
  computed: {
    firstRowImages() {
      return this.images.slice(0, 3); // 第一行显示前3张图片
    },
    secondRowImages() {
      return this.images.slice(3, 7); // 第二行显示后4张图片
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

.text-content ul {
  padding-left: 20px;
}

.text-content li {
  margin-bottom: 10px;
  line-height: 1.6;
  color: #666;
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

.gallery-row:last-child {
  grid-template-columns: repeat(4, 1fr);
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

  .gallery-row:last-child {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-row {
    grid-template-columns: 1fr;
  }

  .gallery-row:last-child {
    grid-template-columns: 1fr;
  }
}
</style>
