<template>
  <div class="exhibition-detail">
    <NavBar />
    <ExhibitionHeader
      title="村落形态格局展"
      description="展示广东传统村落的空间布局、风水理念和规划特点，揭示人地和谐的居住智慧。"
      image="/images/1.jpg"
    />

    <div class="content">
      <div class="exhibition-content">
        <div class="exhibition-main">
          <div class="exhibition-text">
            <h2>村落形态格局展</h2>
            <p class="date-location">展览时间: 2023-11-01 至 2023-12-31 | 地点: 广州博物馆</p>

            <div class="section">
              <h3>展览概述</h3>
              <p>广东传统村落的形态格局是中国古代居住智慧的结晶，体现了人与自然和谐共生的理念。本展览将带您探索这些村落独特的空间布局和规划特点。</p>
            </div>

            <div class="section">
              <h3>主要展示内容</h3>
              <ul>
                <li>村落选址的风水理念</li>
                <li>宗祠、庙宇等公共建筑的布局</li>
                <li>民居建筑的排列方式</li>
                <li>街巷系统的规划特点</li>
                <li>水系与村落的关系</li>
              </ul>
            </div>

            <div class="section">
              <h3>特色展品</h3>
              <div class="exhibit-grid">
                <div class="exhibit-item" v-for="item in exhibits" :key="item.id">
                  <img :src="item.image" :alt="item.name">
                  <h4>{{ item.name }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="exhibition-sidebar">
            <div class="sidebar-card">
              <h3>展览信息</h3>
              <p><strong>开放时间:</strong> 周二至周日 9:00-17:00</p>
              <p><strong>票价:</strong> 免费</p>
              <p><strong>地点:</strong> 广州博物馆</p>
              <p><strong>交通:</strong> 地铁2号线纪念堂站C出口</p>
            </div>

            <div class="sidebar-card">
              <h3>相关活动</h3>
              <div class="activity-item" v-for="activity in activities" :key="activity.id">
                <h4>{{ activity.title }}</h4>
                <p>{{ activity.date }} | {{ activity.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 返回按钮 -->
    <button class="back-button" @click="$router.go(-1)">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H6M12 5l-7 7 7 7"></path>
      </svg>
    </button>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ExhibitionHeader from '@/components/ExhibitionHeader.vue'

export default {
  name: 'Exhibition1',
  components: {
    NavBar,
    ExhibitionHeader
  },
  data() {
    return {
      exhibits: [
        {
          id: 1,
          name: '明清村落规划图',
          image: '/images/exhibits/1-1.jpg',
          description: '展示了明清时期典型广东村落的规划布局'
        },
        {
          id: 2,
          name: '风水罗盘',
          image: '/images/exhibits/1-2.jpg',
          description: '古代风水先生用于村落选址的工具'
        },
        {
          id: 3,
          name: '村落模型',
          image: '/images/exhibits/1-3.jpg',
          description: '按比例还原的典型广东村落微缩模型'
        }
      ],
      activities: [
        {
          id: 1,
          title: '村落规划讲座',
          date: '2023-11-15',
          time: '14:00-16:00'
        },
        {
          id: 2,
          title: '传统建筑工作坊',
          date: '2023-11-20',
          time: '10:00-12:00'
        }
      ]
    }
  }
}
</script>

<style scoped>
.exhibition-detail {
  font-family: "Microsoft YaHei", sans-serif;
  background: url('/images/3.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  padding-top: 0;
  position: relative;
}

.content {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.9);
}

.exhibition-main {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.exhibition-text {
  flex: 2;
  padding-right: 30px;
}

.exhibition-sidebar {
  flex: 1;
}

.section {
  margin-bottom: 30px;
}

.section h3 {
  color: #8b4513;
  border-bottom: 2px solid #8b4513;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.date-location {
  color: #666;
  font-style: italic;
  margin-bottom: 30px;
}

.exhibit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.exhibit-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.exhibit-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
}

.sidebar-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.sidebar-card h3 {
  color: #8b4513;
  margin-top: 0;
  margin-bottom: 15px;
}

.activity-item {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.activity-item h4 {
  margin: 0;
  color: #333;
}

/* 返回按钮样式 */
.back-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #8b4513;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 1000;
}

.back-button:hover {
  background-color: #a0522d;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.back-button svg {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .exhibition-main {
    flex-direction: column;
  }

  .exhibition-text {
    padding-right: 0;
  }

  .exhibit-grid {
    grid-template-columns: 1fr;
  }

  .back-button {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }

  .back-button svg {
    width: 20px;
    height: 20px;
  }
}
</style>
