<template>
  <div class="creations">
    <NavBar />
    <div class="page-header">
      <div class="header-content">
        <h1>传统村落文创</h1>
        <p>守护村落记忆，焕活乡村新生</p>
        <div class="header-decoration">
          <div class="decoration-line"></div>
          <div class="decoration-icon">🏡</div>
          <div class="decoration-line"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <section class="creation-list">
        <div class="section-header">
          <h2>村落文创精选</h2>
          <div class="section-divider"></div>
        </div>
        <div class="creation-grid">
          <div
            class="creation-card"
            v-for="creation in creations"
            :key="creation.id"
            @click="showDetail(creation)"
          >
            <div class="card-image-container">
              <img :src="creation.image" :alt="creation.title" class="creation-image">
            </div>
            <div class="creation-info">
              <div class="info-header">
                <h3>{{ creation.title }}</h3>
              </div>
              <p class="creation-description">{{ creation.description }}</p>
              <div class="creation-meta">
                <span class="creation-category">{{ creation.category }}</span>
                <span class="creation-origin">{{ creation.origin }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="culture-feature">
        <div class="feature-content">
          <h3>村落记忆，匠心传承</h3>
          <p>我们的文创产品汲取传统村落建筑、民俗、手工艺等多元文化精髓，将古村智慧与现代设计完美融合，让传统村落文化以全新姿态走进您的生活。</p>
          <button class="learn-more">村落探源</button>
        </div>
      </section>
    </div>

    <!-- 详情弹窗 -->
    <div class="detail-modal" v-if="selectedCreation" @click.self="closeDetail">
      <div class="modal-content">
        <span class="close-btn" @click="closeDetail">&times;</span>
        <div class="modal-image-container">
          <img :src="selectedCreation.image" :alt="selectedCreation.title" class="modal-image">
        </div>
        <div class="modal-info">
          <h2>{{ selectedCreation.title }}</h2>
          <p class="modal-description">{{ selectedCreation.description }}</p>
          <div class="modal-meta">
            <span class="modal-category">类别: {{ selectedCreation.category }}</span>
            <span class="modal-origin">产地: {{ selectedCreation.origin }}</span>
            <span class="modal-rating" v-if="selectedCreation.rating">评分: {{ selectedCreation.rating }}</span>
          </div>
          <div class="modal-detail">
            <h3>产品详情</h3>
            <p>{{ getDetailText(selectedCreation) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'CreationsView',
  components: {
    NavBar
  },
  data() {
    return {
      selectedCreation: null,
      creations: [
        {
          id: 1,
          title: '徽派古建模型套装',
          description: '1:50比例还原马头墙、小青瓦等徽派建筑元素，手工雕刻木制构件',
          category: '建筑艺术',
          origin: '安徽宏村',
          image: '/images/hong.jpeg',
          rating: '4.8',
          isNew: true,
          detail: '采用榫卯结构工艺，精选百年老杉木，纯手工雕刻马头墙、小青瓦等细节，包含天井、堂屋等典型徽派建筑元素，底座配有LED照明系统。'
        },
        {
          id: 2,
          title: '蓝印花布笔记本',
          description: '采用传统草木染工艺，手工镂空版印制，配以再生纸内页',
          category: '非遗手作',
          origin: '浙江乌镇',
          image: '/images/hong.jpeg',
          rating: '4.9',
          isNew: false,
          detail: '使用天然蓝草染料，经过16道传统工序印染，封面采用手工镂空版印花技术，内页为80g再生纸，共192页，包含传统纹样插图。'
        },
        {
          id: 3,
          title: '古村窗棂书签',
          description: '以江南古村木雕窗棂为原型，黄铜蚀刻工艺，保留传统纹样细节',
          category: '工艺美术',
          origin: '江苏周庄',
          image: '/images/hong.jpeg',
          rating: '4.7',
          isNew: false,
          detail: '精选黄铜材质，采用化学蚀刻工艺还原明清时期窗棂纹样，表面做旧处理，尺寸为12×4cm，配有流苏挂饰。'
        },
        {
          id: 4,
          title: '村落年画礼盒',
          description: '复刻清代杨柳青年画风格，手工套色印刷，配传统年节贺卡',
          category: '民俗文化',
          origin: '天津杨柳青',
          image: '/images/hong.jpeg',
          rating: '4.6',
          isNew: true,
          detail: '精选《连年有余》《五子夺魁》等经典年画题材，采用传统六色套印工艺，礼盒包含年画×2、贺卡×6、红包×8，附赠年画故事手册。'
        },
        {
          id: 5,
          title: '土楼茶具套装',
          description: '以福建土楼为灵感，粗陶手作，釉面呈现夯土肌理质感',
          category: '陶瓷艺术',
          origin: '福建永定',
          image: '/images/hong.jpeg',
          rating: '4.8',
          isNew: true,
          detail: '采用当地高岭土手工拉坯成型，外施仿夯土釉料，内施透明釉，包含茶壶×1、茶杯×4、公道杯×1，壶嘴设计模拟土楼排水系统。'
        },
        {
          id: 6,
          title: '竹编灯具系列',
          description: '采用浙江东阳传统竹编技艺，现代几何造型，可调节光线角度',
          category: '生活美学',
          origin: '浙江东阳',
          image: '/images/hong.jpeg',
          rating: '4.9',
          isNew: false,
          detail: '精选5年生毛竹，经过21道工序处理，采用人字编、十字编等传统技法，LED光源三档调光，桌面款尺寸φ20×30cm，吊灯款尺寸φ30×40cm。'
        },
        {
          id: 7,
          title: '古村门环摆件',
          description: '青铜铸造传统门环造型，表面做旧处理，重现岁月痕迹',
          category: '金属工艺',
          origin: '山西平遥',
          image: '/images/hong.jpeg',
          rating: '4.7',
          isNew: false,
          detail: '采用失蜡法青铜铸造工艺，还原明清时期门环造型，表面做旧处理模拟铜绿效果，底座为整木切割，尺寸18×15×5cm，附收藏证书。'
        },
        {
          id: 8,
          title: '节气主题手账',
          description: '收录24节气古村插画，搭配传统色卡与农谚手写体',
          category: '文具精品',
          origin: '云南和顺',
          image: '/images/hong.jpeg',
          rating: '4.6',
          isNew: true,
          detail: '精选120g特种纸内页，收录24幅手绘古村节气场景，附24节气传统色卡和农谚手写体，布面精装烫金工艺，尺寸14×21cm，含书签带。'
        }
      ]
    }
  },
  methods: {
    showDetail(creation) {
      this.selectedCreation = creation;
      document.body.style.overflow = 'hidden'; // 防止背景滚动
    },
    closeDetail() {
      this.selectedCreation = null;
      document.body.style.overflow = ''; // 恢复背景滚动
    },
    getDetailText(creation) {
      // 这里可以添加更复杂的详情文本处理逻辑
      return creation.detail || '暂无详细介绍';
    }
  }
}
</script>

<style scoped>
.creations {
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
  background-color: #f8f8f8;
  color: #333;
}

/* 页面头部样式 */
.page-header {
  height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
  url('https://example.com/village-bg.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
}

.header-content {
  max-width: 800px;
  padding: 0 20px;
}

.page-header h1 {
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.page-header p {
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.header-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.decoration-line {
  width: 60px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.8);
}

.decoration-icon {
  margin: 0 15px;
  font-size: 1.5rem;
}

/* 内容区域 */
.content {
  padding: 60px 5%;
  max-width: 1400px;
  margin: 0 auto;
}

/* 章节标题 */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #333;
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #6a5, #9c7);
}

.section-divider {
  height: 1px;
  width: 80%;
  max-width: 800px;
  margin: 30px auto;
  background-color: rgba(0, 0, 0, 0.1);
}

/* 产品网格 */
.creation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

/* 产品卡片 */
.creation-card {
  position: relative;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.creation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.card-image-container {
  height: 280px;
  overflow: hidden;
}

.creation-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.creation-card:hover .creation-image {
  transform: scale(1.05);
}

/* 产品信息 */
.creation-info {
  padding: 25px;
}

.info-header {
  margin-bottom: 15px;
}

.info-header h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
  color: #333;
}

.creation-description {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
  height: 48px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.creation-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 0.85rem;
  color: #999;
}

.creation-origin {
  background-color: #f9f9f9;
  padding: 3px 8px;
  border-radius: 4px;
}

/* 文化特色区域 */
.culture-feature {
  margin-top: 80px;
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
  url('https://example.com/village-culture.jpg') center/cover;
  padding: 60px 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.feature-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.feature-content h3 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.feature-content p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 30px;
}

/* 详情弹窗样式 */
.detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
}

.modal-content {
  position: relative;
  background-color: white;
  border-radius: 10px;
  width: 80%;
  max-width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  animation: modalFadeIn 0.3s;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2rem;
  color: #999;
  cursor: pointer;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #333;
}

.modal-image-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  padding: 30px;
  flex-grow: 1;
}

.modal-info h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
}

.modal-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 25px;
}

.modal-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 25px;
  font-size: 0.9rem;
  color: #666;
}

.modal-meta span {
  background-color: #f5f5f5;
  padding: 5px 12px;
  border-radius: 20px;
}

.modal-detail {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.modal-detail h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #444;
}

.modal-detail p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header {
    height: 300px;
  }

  .page-header h1 {
    font-size: 2.5rem;
  }

  .page-header p {
    font-size: 1.2rem;
  }

  .creation-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  .card-image-container {
    height: 220px;
  }

  .modal-content {
    width: 95%;
    flex-direction: column;
  }

  .modal-image-container {
    height: 200px;
  }
}

@media (min-width: 769px) {
  .modal-content {
    flex-direction: row;
  }

  .modal-image-container {
    width: 40%;
    height: auto;
    min-height: 400px;
  }

  .modal-info {
    width: 60%;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .creation-grid {
    grid-template-columns: 1fr;
  }

  .card-image-container {
    height: 200px;
  }

  .modal-image-container {
    height: 180px;
    min-height: auto;
  }

  .modal-info {
    padding: 20px;
  }

  .modal-info h2 {
    font-size: 1.5rem;
  }
}
</style>
