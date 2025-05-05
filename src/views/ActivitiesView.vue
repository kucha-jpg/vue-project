<template>
  <div class="activities">
    <NavBar />
    <div class="page-header">
      <div class="header-content">
        <h1>传统村落活动</h1>
        <p>体验传统村落魅力，参与我们的文化活动</p>
      </div>
    </div>
    <div class="content">
      <section class="activity-list">
        <h2>近期活动</h2>
        <div class="activity-grid">
          <div class="activity-card" v-for="activity in activities" :key="activity.id" @click="showDetail(activity)">
            <div class="activity-image-container">
              <img :src="activity.image" :alt="activity.title" class="activity-image">
            </div>
            <div class="activity-info">
              <div class="activity-tag">传统村落</div>
              <h3>{{ activity.title }}</h3>
              <p class="activity-desc">{{ activity.description }}</p>
              <div class="activity-meta">
                <div class="meta-item">
                  <i class="icon-calendar"></i>
                  <span>{{ activity.date }}</span>
                </div>
                <div class="meta-item">
                  <i class="icon-location"></i>
                  <span>{{ activity.location }}</span>
                </div>
              </div>
              <button class="learn-more">了解更多</button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 活动详情弹窗 -->
    <div class="activity-modal" v-if="selectedActivity" @click.self="closeDetail">
      <div class="modal-content">
        <button class="close-btn" @click="closeDetail">&times;</button>
        <div class="modal-header">
          <h2>{{ selectedActivity.title }}</h2>
          <div class="activity-tag">传统村落</div>
        </div>
        <div class="modal-image-container">
          <img :src="selectedActivity.image" :alt="selectedActivity.title" class="modal-image">
        </div>
        <div class="modal-body">
          <p>{{ selectedActivity.longDescription || selectedActivity.description }}</p>
          <div class="modal-details">
            <div class="detail-item">
              <h4>活动时间</h4>
              <p>{{ selectedActivity.date }}</p>
            </div>
            <div class="detail-item">
              <h4>活动地点</h4>
              <p>{{ selectedActivity.location }}</p>
            </div>
            <div class="detail-item" v-if="selectedActivity.organizer">
              <h4>主办单位</h4>
              <p>{{ selectedActivity.organizer }}</p>
            </div>
            <div class="detail-item" v-if="selectedActivity.contact">
              <h4>联系方式</h4>
              <p>{{ selectedActivity.contact }}</p>
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
  name: 'ActivitiesView',
  components: {
    NavBar
  },
  data() {
    return {
      selectedActivity: null,
      activities: [
        {
          id: 1,
          title: '古村落建筑修复工作坊',
          description: '学习传统村落建筑的修复技艺，亲手体验灰塑、砖雕等传统工艺',
          longDescription: '本次工作坊将邀请资深建筑修复专家，带领参与者深入了解传统村落建筑的构造特点和修复技术。通过理论讲解和实际操作，学习灰塑、砖雕等传统工艺的修复方法，亲身体验传统建筑的魅力。',
          date: '2023-11-10',
          location: '广州市从化区钱岗古村',
          organizer: '广东省传统村落保护协会',
          contact: '020-12345678',
          image: '/images/hong.jpeg'
        },
        {
          id: 2,
          title: '传统村落美食文化节',
          description: '品尝传统村落特色美食，学习传统烹饪技艺，体验乡土文化',
          longDescription: '为期五天的美食文化节将汇聚广东省内多个传统村落的特色美食。参与者可以品尝到地道的客家酿豆腐、广府糕点、潮汕小吃等，还有机会跟随当地村民学习传统烹饪技艺，深入了解美食背后的文化故事。',
          date: '2023-12-01 至 2023-12-05',
          location: '佛山市顺德区碧江村',
          organizer: '顺德区文化广电旅游体育局',
          contact: '0757-87654321',
          image: '/images/hong.jpeg'
        },
        {
          id: 3,
          title: '岭南传统村落文化讲座',
          description: '聆听专家讲解传统村落历史，了解岭南人文风情',
          longDescription: '本次讲座将邀请著名民俗学家张教授，深入浅出地讲解岭南传统村落的历史演变、建筑特色和文化内涵。通过大量实例和图片，带领听众领略传统村落的独特魅力，增强文化遗产保护意识。',
          date: '2023-11-15',
          location: '广州市天河区珠村',
          organizer: '广东省民俗文化研究会',
          contact: '020-87654321',
          image: '/images/hong.jpeg'
        }
      ]
    }
  },
  methods: {
    showDetail(activity) {
      this.selectedActivity = activity
      document.body.style.overflow = 'hidden' // 防止背景滚动
    },
    closeDetail() {
      this.selectedActivity = null
      document.body.style.overflow = '' // 恢复滚动
    }
  }
}
</script>

<style scoped>
.activities {
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
  background-color: #f8f8f8;
}

.page-header {
  height: 350px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
  url('https://images.unsplash.com/photo-1527814027898-c31105ea083d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover;
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
  font-size: 42px;
  margin-bottom: 15px;
  font-weight: 600;
  letter-spacing: 1px;
}

.page-header p {
  font-size: 20px;
  opacity: 0.9;
}

.content {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.activity-list h2 {
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
  color: #333;
  position: relative;
  padding-bottom: 15px;
}

.activity-list h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #d4a373;
}

.activity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 20px;
}

.activity-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: white;
  cursor: pointer;
}

.activity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.activity-image-container {
  height: 200px;
  overflow: hidden;
}

.activity-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.activity-card:hover .activity-image {
  transform: scale(1.05);
}

.activity-info {
  padding: 25px;
}

.activity-tag {
  display: inline-block;
  background-color: #f0e6d3;
  color: #d4a373;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  margin-bottom: 15px;
  font-weight: 500;
}

.activity-info h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #333;
  line-height: 1.3;
}

.activity-desc {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.activity-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
}

.meta-item {
  display: flex;
  align-items: center;
}

.meta-item i {
  margin-right: 5px;
  font-size: 14px;
}

.icon-calendar::before {
  content: "📅";
}

.icon-location::before {
  content: "📍";
}

.learn-more {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #d4a373;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.learn-more:hover {
  background-color: #c18e5f;
  transform: translateY(-2px);
}

/* 活动详情弹窗样式 */
.activity-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow-y: auto;
}

.modal-content {
  position: relative;
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  animation: modalFadeIn 0.3s ease;
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
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  color: #999;
  cursor: pointer;
  padding: 5px 10px;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #333;
}

.modal-header {
  padding: 30px 30px 20px;
  text-align: center;
}

.modal-header h2 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
}

.modal-image-container {
  height: 300px;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-body {
  padding: 30px;
}

.modal-body p {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
}

.modal-details {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.detail-item {
  margin-bottom: 15px;
}

.detail-item h4 {
  font-size: 16px;
  color: #777;
  margin-bottom: 8px;
  font-weight: 500;
}

.detail-item p {
  font-size: 16px;
  color: #333;
  margin: 0;
}

@media (max-width: 768px) {
  .page-header {
    height: 250px;
  }

  .page-header h1 {
    font-size: 32px;
  }

  .page-header p {
    font-size: 16px;
  }

  .content {
    padding: 40px 10px;
  }

  .activity-grid {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }

  .modal-content {
    width: 95%;
    max-height: 95vh;
  }

  .modal-image-container {
    height: 200px;
  }

  .modal-header {
    padding: 20px 20px 15px;
  }

  .modal-header h2 {
    font-size: 24px;
  }

  .modal-body {
    padding: 20px;
  }

  .modal-details {
    grid-template-columns: 1fr;
  }
}
</style>
