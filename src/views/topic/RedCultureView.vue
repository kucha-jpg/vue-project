<template>
  <div class="topic-detail">
    <NavBar />
    <div class="topic-header" style="background-image: url('/images/hong.jpeg')">
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
              <img src="/images/hong.jpeg" alt="潮汕红色文化" class="culture-image">
              <div class="culture-text">
                <h3>潮汕革命根据地</h3>
                <p>潮汕地区是广东省重要的革命老区，早在大革命时期就建立了党组织。1927年南昌起义军南下广东，部分部队进入潮汕地区，建立了红色政权。潮汕人民在党的领导下，开展了艰苦卓绝的革命斗争。</p>
                <p>著名的革命遗址包括：八一南昌起义南下部队指挥部旧址、大南山革命根据地、红场革命烈士纪念碑等。</p>
              </div>
            </div>
            <div class="culture-item reverse">
              <img src="/images/hong.jpeg" alt="潮汕红色文化" class="culture-image">
              <div class="culture-text">
                <h3>革命英雄人物</h3>
                <p>潮汕地区涌现了许多革命英雄人物，如彭湃、杨石魂、方方等。彭湃是中国共产党早期农民运动领导人之一，被誉为"农民运动大王"。杨石魂是潮汕地区党组织创始人之一，为革命事业献出了年轻的生命。</p>
              </div>
            </div>
          </div>

          <!-- 广府地区 -->
          <div v-if="activeTab === 1" class="region-content">
            <h2 class="region-title">广府地区红色文化</h2>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="广府红色文化" class="culture-image">
              <div class="culture-text">
                <h3>广州起义</h3>
                <p>1927年12月11日，中国共产党在广州领导工人、农民和革命士兵举行了广州起义，建立了中国第一个城市苏维埃政权——广州苏维埃政府。虽然起义最终失败，但它是中国共产党领导城市革命的一次伟大尝试。</p>
                <p>主要遗址包括：广州起义纪念馆、广州起义烈士陵园、黄埔军校旧址等。</p>
              </div>
            </div>
            <div class="culture-item reverse">
              <img src="/images/hong.jpeg" alt="广府红色文化" class="culture-image">
              <div class="culture-text">
                <h3>珠江三角洲抗日根据地</h3>
                <p>抗日战争时期，珠江三角洲地区建立了广泛的抗日根据地。东江纵队是这一地区的主要抗日武装力量，开展了艰苦卓绝的游击战争，为抗日战争胜利作出了重要贡献。</p>
                <p>著名景点：东江纵队纪念馆、中山烈士陵园、顺德革命烈士纪念碑等。</p>
              </div>
            </div>
          </div>

          <!-- 客家地区 -->
          <div v-if="activeTab === 2" class="region-content">
            <h2 class="region-title">客家地区红色文化</h2>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="客家红色文化" class="culture-image">
              <div class="culture-text">
                <h3>中央苏区南方屏障</h3>
                <p>梅州、河源等客家地区是中央苏区的重要组成部分，被称为"南方屏障"。这里建立了完善的苏维埃政权，开展了土地革命，为中央红军提供了重要的战略支撑。</p>
                <p>主要遗址：梅县革命烈士纪念碑、三河坝战役纪念园、阮啸仙故居等。</p>
              </div>
            </div>
            <div class="culture-item reverse">
              <img src="/images/hong.jpeg" alt="客家红色文化" class="culture-image">
              <div class="culture-text">
                <h3>革命英雄人物</h3>
                <p>客家地区涌现了许多革命英雄人物，如叶剑英、阮啸仙、古大存等。叶剑英是中国人民解放军的创建者之一，长期担任党和国家重要领导职务。阮啸仙是广东青年运动先驱，曾任中共广东省委书记。</p>
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
