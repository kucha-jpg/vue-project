<template>
  <div class="tea-garden-detail">
    <DetailNavBar />

    <div class="container">
      <div class="detail-content">
        <div class="detail-section">
          <h2>燕南飞茶园简介</h2>
          <div class="text-content">
            <p>燕南飞茶园位于广东省梅州市梅县区雁洋镇，坐落在风景秀丽的阴那山麓，是集茶叶种植、加工、生态旅游于一体的综合性茶园。茶园依托梅州优越的自然环境，以种植高品质单丛茶、金萱茶为主，所产茶叶清香甘醇，深受茶客喜爱。</p>
            <p>茶园依山势而建，层层叠叠的茶田与青山云雾相映成趣，形成一幅天然的山水画卷。游客在此可体验采茶、制茶、品茶的全过程，感受传统茶文化的魅力。园内还设有茶艺展示区、客家美食区及生态观光步道，将茶文化与客家风情、自然景观完美融合。</p>
            <p>作为梅州重要的茶旅综合体，燕南飞茶园不仅推动了当地茶产业发展，更成为粤东地区独具特色的生态旅游目的地，吸引众多游客前来寻茶香、赏美景、品客家文化。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>茶园特色</h2>
          <div class="text-content">
            <p><strong>茶叶种植：</strong>主要种植单丛茶、金萱茶等高品质茶种，采用有机种植方式，确保茶叶天然健康。</p>
            <p><strong>茶文化体验：</strong>提供采茶、制茶、品茶全套体验，让游客亲身感受茶文化魅力。</p>
            <p><strong>生态景观：</strong>茶田与青山云雾交相辉映，四季景色各异，尤以云海茶田最为壮观。</p>
            <p><strong>客家风情：</strong>园内设有客家美食区，可品尝盐焗鸡、酿豆腐等传统客家美食。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>图片展示</h2>
          <div class="image-gallery">
            <div class="gallery-row" v-for="(row, rowIndex) in imageRows" :key="rowIndex">
              <img v-for="(img, imgIndex) in row" :key="imgIndex" :src="img" :alt="`燕南飞茶园图片${rowIndex * 3 + imgIndex + 1}`">
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
  name: 'YanNanFeiTeaGardenView',
  components: {
    DetailNavBar
  },
  data() {
    return {
      images: [
        '/images/kejiadiqu/yannanfeichatian/yannanfeichatian1.png',
        '/images/kejiadiqu/yannanfeichatian/yannanfeichatian2.png',
        '/images/kejiadiqu/yannanfeichatian/yannanfeichatian3.png',
        '/images/kejiadiqu/yannanfeichatian/yannanfeichatian4.png',
        '/images/kejiadiqu/yannanfeichatian/yannanfeichatian5.png',
        '/images/kejiadiqu/yannanfeichatian/yannanfeichatian6.png',
        '/images/kejiadiqu/yannanfeichatian/yannanfeichatian7.png',
        '/images/kejiadiqu/yannanfeichatian/yannanfeichatian8.png',
        '/images/kejiadiqu/yannanfeichatian/yannanfeichatian9.png'
      ]
    }
  },
  computed: {
    imageRows() {
      // 将9张图片分成3行，每行3张
      const rows = [];
      for (let i = 0; i < this.images.length; i += 3) {
        rows.push(this.images.slice(i, i + 3));
      }
      return rows;
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

.tea-garden-detail {
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
