<template>
  <div class="topic-detail">
    <NavBar />
    <div class="topic-header" style="background-image: url('/yuecunwenmai1/images/chaoshandiqu/qianmeicun/qianmeicun3.png')">
      <button class="back-button" @click="goBack">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        返回
      </button>
      <h1>广东红色文化</h1>
      <p>追寻革命足迹，传承红色基因</p>
    </div>
    <div class="topic-content">
      <div class="tab-container">
        <div class="tab-header">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            {{ tab }}
          </button>
        </div>

        <div class="tab-content">
          <!-- 潮汕地区 -->
          <div v-if="activeTab === 0" class="region-content">
            <h2 class="region-title">潮汕地区红色文化</h2>
            <div class="culture-item">
              <img src="/yuecunwenmai1/images/红色文化/潮汕地区/潮汕铁路旧址公园.png" alt="潮汕铁路旧址公园" class="culture-image">
              <div class="culture-text">
                <h3>潮汕铁路旧址公园</h3>
                <p>潮汕铁路是中国近代史上第一条由华侨投资兴建的纯商办铁路，建于1904年，全长42.1公里。1939年日军入侵潮汕时被破坏，现存部分路基和桥梁遗址。潮汕铁路旧址公园展示了潮汕人民反抗帝国主义侵略的历史见证。</p>
                <p>公园内保存了部分铁路遗迹，并建有纪念馆展示潮汕铁路的历史沿革和革命斗争事迹。</p>
              </div>
            </div>
            <div class="culture-item reverse">
              <img src="/yuecunwenmai1/images/红色文化/潮汕地区/桂园旧陈列馆.png" alt="桂园旧陈列馆" class="culture-image">
              <div class="culture-text">
                <h3>桂园旧陈列馆</h3>
                <p>桂园始建于1923年，是一座典型的潮汕民居建筑。1925年，东征军总指挥蒋介石和政治部主任周恩来曾在此居住和办公。1927年南昌起义军南下广东时，周恩来等起义军领导人再次入住桂园。</p>
                <p>如今桂园已辟为陈列馆，展示南昌起义军在潮汕的活动史迹，是重要的爱国主义教育基地。</p>
              </div>
            </div>
          </div>

          <!-- 广府地区 -->
          <div v-if="activeTab === 1" class="region-content">
            <h2 class="region-title">广府地区红色文化</h2>
            <div class="culture-item">
              <img src="/yuecunwenmai1/images/红色文化/广府地区/广州起义纪念馆.png" alt="广州起义纪念馆" class="culture-image">
              <div class="culture-text">
                <h3>广州起义纪念馆</h3>
                <p>广州起义纪念馆原为国民党广东省会公安局，1927年12月11日广州起义后成为广州苏维埃政府所在地。起义期间，这里张贴了第一张苏维埃政府布告，颁布了实行社会改革的纲领。</p>
                <p>纪念馆内保存了起义领导人的办公室、会议室等革命遗址，并陈列了大量珍贵历史文物和图片资料。</p>
              </div>
            </div>
            <div class="culture-item reverse">
              <img src="/yuecunwenmai1/images/红色文化/广府地区/孙中山大元帅府纪念馆.png" alt="孙中山大元帅府纪念馆" class="culture-image">
              <div class="culture-text">
                <h3>孙中山大元帅府纪念馆</h3>
                <p>孙中山大元帅府前身为广东士敏土厂，1917年和1923年孙中山两次在此建立革命政权。大元帅府见证了孙中山领导护法运动和国民革命运动的重要历史时刻。</p>
                <p>纪念馆通过大量历史照片、文物和场景复原，生动展现了孙中山在广州的革命活动历程。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/yuecunwenmai1/images/红色文化/广府地区/辛亥革命纪念馆.png" alt="辛亥革命纪念馆" class="culture-image">
              <div class="culture-text">
                <h3>辛亥革命纪念馆</h3>
                <p>辛亥革命纪念馆是为纪念孙中山领导的辛亥革命活动而建的专题纪念馆，位于广州黄埔区长洲岛。纪念馆通过大量珍贵文物和历史资料，全面展示了辛亥革命的历史进程。</p>
                <p>馆内常设"辛亥革命时期广东名人展"、"伟大的历程——辛亥革命展"等基本陈列，是了解辛亥革命历史的重要场所。</p>
              </div>
            </div>
          </div>

          <!-- 客家地区 -->
          <div v-if="activeTab === 2" class="region-content">
            <h2 class="region-title">客家地区红色文化</h2>
            <div class="culture-item">
              <img src="/yuecunwenmai1/images/红色文化/客家地区/梅州平远县仁居镇红军街.png" alt="梅州平远县仁居镇红军街" class="culture-image">
              <div class="culture-text">
                <h3>梅州平远县仁居镇红军街</h3>
                <p>仁居镇红军街是红四军在平远开展革命活动的重要遗址。1929年和1930年，红四军三次进入平远，在仁居镇建立了苏维埃政权，开展了土地革命斗争。</p>
                <p>红军街保留了当年的红军标语、革命委员会旧址等遗迹，是平远县重要的爱国主义教育基地。</p>
              </div>
            </div>
            <div class="culture-item reverse">
              <img src="/yuecunwenmai1/images/红色文化/客家地区/梅州平远县仁居镇红军街2.png" alt="梅州平远县仁居镇红军街2" class="culture-image">
              <div class="culture-text">
                <h3>红军标语墙</h3>
                <p>在仁居镇红军街的墙壁上，至今仍保留着多条红军书写的标语，如"红军是为劳苦工农谋利益的先锋队"、"只有苏维埃才能救中国"等。这些标语是研究红四军历史和宣传工作的重要实物资料。</p>
                <p>标语墙见证了当年红军与当地群众的鱼水情深，是革命传统教育的生动教材。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/yuecunwenmai1/images/红色文化/客家地区/梅州平远县仁居镇红军街3.png" alt="梅州平远县仁居镇红军街3" class="culture-image">
              <div class="culture-text">
                <h3>革命旧址群</h3>
                <p>仁居镇红军街周边分布着多个革命旧址，包括平远县革命委员会旧址、红军兵工厂旧址、红军医院旧址等。这些旧址完整保留了当年的建筑风貌，展现了红军在艰苦条件下坚持斗争的革命精神。</p>
                <p>近年来，当地政府对这些旧址进行了保护性修缮，并建立了完善的展示体系。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'DialectView',
  components: {
    NavBar
  },
  data() {
    return {
      activeTab: 0,
      tabs: ['潮汕地区', '广府地区', '客家地区']
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.topic-detail {
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
  background-color: #f8f9fa;
}

.topic-header {
  height: 350px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
}

.topic-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.topic-header h1 {
  font-size: 48px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.topic-header p {
  font-size: 24px;
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  z-index: 3;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.topic-content {
  padding: 60px 50px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 标签页样式 */
.tab-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.tab-header {
  display: flex;
  border-bottom: 1px solid #eee;
}

.tab-header button {
  padding: 16px 32px;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.tab-header button:hover {
  color: #1890ff;
}

.tab-header button.active {
  color: #1890ff;
}

.tab-header button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background: #1890ff;
  animation: underline 0.3s ease;
}

@keyframes underline {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.tab-content {
  padding: 30px;
}

.region-title {
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.culture-item {
  display: flex;
  margin-bottom: 40px;
  gap: 30px;
}

.culture-item.reverse {
  flex-direction: row-reverse;
}

.culture-image {
  width: 50%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  height: auto;
  max-height: 400px;
}

.culture-text {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.culture-text h3 {
  font-size: 24px;
  color: #1890ff;
  margin-bottom: 15px;
}

.culture-text p {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 15px;
}

@media (max-width: 992px) {
  .culture-item {
    flex-direction: column;
  }

  .culture-item.reverse {
    flex-direction: column;
  }

  .culture-image, .culture-text {
    width: 100%;
  }

  .culture-image {
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .topic-content {
    padding: 40px 20px;
  }

  .topic-header {
    height: 250px;
  }

  .topic-header h1 {
    font-size: 36px;
  }

  .topic-header p {
    font-size: 18px;
  }

  .tab-header button {
    padding: 12px 20px;
    font-size: 16px;
  }

  .tab-content {
    padding: 20px;
  }

  .region-title {
    font-size: 28px;
    margin-bottom: 20px;
  }
}
</style>
