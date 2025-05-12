<template>
  <div class="village-detail">
    <DetailNavBar />

    <div class="container">
      <div class="detail-content">
        <div class="detail-section">
          <h2>祖庙简介</h2>
          <div class="text-content">
            <p>佛山祖庙，位于广东省佛山市禅城区，始建于北宋元丰年间（1078-1085年），是岭南地区最具代表性的古建筑群之一，集祭祀、文化、艺术于一体。祖庙最初供奉北帝（真武大帝），故又称"北帝庙"，后逐渐成为佛山民间信仰与宗祠文化的核心。</p>
            <p>佛山祖庙的建立与当时佛山手工业和商业的繁荣密切相关。北宋时期，佛山已是岭南重要的冶铁、陶瓷和纺织中心，民众为祈求风调雨顺、生意兴隆而建此庙。经过明清两代的多次重修和扩建，形成了现今的规模。</p>
            <p>建筑群占地约3500平方米，以灵应牌坊、万福台、锦香池、三门、前殿、正殿等为主体，采用岭南特色的陶塑、木雕、砖雕和灰塑装饰，尤以光绪年间的"三雕两塑"工艺闻名，展现了古代工匠的精湛技艺。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>建筑特色</h2>
          <div class="text-content">
            <p>佛山祖庙融合了岭南传统建筑艺术的精髓，木雕、砖雕、石雕、陶塑、灰塑等工艺精湛，堪称古代工匠的智慧结晶。</p>
            <p>主要建筑包括：</p>
            <ul>
              <li><strong>万福台</strong>：华南保存最完好的古戏台，建于清顺治年间，是粤剧文化的重要载体</li>
              <li><strong>灵应牌坊</strong>：祖庙的标志性建筑，始建于明景泰年间，气势恢宏</li>
              <li><strong>锦香池</strong>：明代开挖的放生池，池中有石雕龟蛇，象征北帝的坐骑</li>
              <li><strong>三门</strong>：祖庙的正门，门额上悬挂着"祖庙"和"圣域"牌匾</li>
              <li><strong>正殿</strong>：供奉北帝的主殿，殿内北帝铜像重约2.5吨</li>
              <li><strong>庆真楼</strong>：祖庙的最高建筑，建于清嘉庆年间</li>
            </ul>
          </div>
        </div>

        <div class="detail-section">
          <h2>文化价值</h2>
          <div class="text-content">
            <p>祖庙不仅承载着佛山人的精神信仰，还见证了明清时期手工业繁荣与民间自治传统，被誉为"东方民间艺术之宫"。庙内保存的大量文物和碑刻，记录了佛山数百年的历史变迁。</p>
            <p>每年春节期间，祖庙都会举行盛大的北帝诞庆典，包括舞狮、烧香祈福等传统活动，吸引众多信众和游客参与。此外，祖庙还是佛山武术和粤剧文化的重要展示场所。</p>
            <p>现为全国重点文物保护单位，与相邻的岭南天地共同构成佛山历史文化地标，每年吸引数百万游客参观。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>图片展示</h2>
          <div class="image-gallery">
            <div class="gallery-row">
              <img v-for="(img, index) in firstRowImages" :key="index" :src="img" :alt="`佛山祖庙图片${index + 1}`">
            </div>
            <div class="gallery-row" v-if="secondRowImages.length > 0">
              <img v-for="(img, index) in secondRowImages" :key="index" :src="img" :alt="`佛山祖庙图片${index + 4}`">
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
  name: 'FoshanZumiaoView',
  components: {
    DetailNavBar
  },
  data() {
    return {
      village: {
        id: 2,
        name: '佛山祖庙',
        category: 'lingnan',
        location: '广东省佛山市禅城区',
        description: '岭南地区最具代表性的古建筑群之一，被誉为"东方民间艺术之宫"。',
        image: '/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao1.png'
      },
      images: [
        '/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao1.png',
        '/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao2.png',
        '/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao3.png',
        '/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao4.png',
        '/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao5.png'
      ]
    }
  },
  computed: {
    firstRowImages() {
      return this.images.slice(0, 3); // 第一行显示前3张图片
    },
    secondRowImages() {
      return this.images.slice(3, 5); // 第二行显示后2张图片
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
  margin-bottom: 15px;
}

.text-content li {
  margin-bottom: 8px;
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
