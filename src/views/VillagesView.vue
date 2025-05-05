<template>
  <div class="villages">
    <NavBar />
    <div class="hero">
      <div class="hero-content">
        <h1>广东传统村落</h1>
        <p>探索岭南文化的千年传承</p>
      </div>
    </div>

    <div class="container">
      <!-- 分类筛选 -->
      <div class="filter-section">
        <h2>村落分类</h2>
        <div class="filter-buttons">
          <button
            :class="{ active: activeFilter === 'all' }"
            @click="filterVillages('all')"
          >
            全部
          </button>
          <button
            :class="{ active: activeFilter === 'chaoshan' }"
            @click="filterVillages('chaoshan')"
          >
            潮汕村落
          </button>
          <button
            :class="{ active: activeFilter === 'guangfu' }"
            @click="filterVillages('guangfu')"
          >
            广府村落
          </button>
          <button
            :class="{ active: activeFilter === 'hakka' }"
            @click="filterVillages('hakka')"
          >
            客家村落
          </button>
        </div>
      </div>

      <!-- 村落列表 -->
      <div class="village-list">
        <div v-if="filteredVillages.length === 0" class="no-results">
          <p>当前分类下暂无村落信息</p>
        </div>

        <div v-else class="village-grid">
          <div
            v-for="village in filteredVillages"
            :key="village.id"
            class="village-card"
            @click="goToVillageDetail(village.id)"
          >
            <div class="image-container">
              <img :src="village.image" :alt="village.name" class="village-image">
              <div class="image-overlay">
                <h3>{{ village.name }}</h3>
                <p class="location">{{ village.location }}</p>
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
  name: 'VillagesView',
  components: {
    NavBar
  },
  data() {
    return {
      activeFilter: 'all',
      villages: [
        // 潮汕村落
        { id: 1, name: '潮州古城', category: 'chaoshan', location: '潮州市', description: '保存完好的潮州古城，拥有众多明清建筑。', image: '/images/hong.jpeg' },
        { id: 2, name: '龙湖古寨', category: 'chaoshan', location: '汕头市', description: '面向南海的古老渔村，保留传统潮汕建筑风格。', image: '/images/hong.jpeg' },
        { id: 7, name: '程洋冈村', category: 'chaoshan', location: '汕头市澄海区', description: '千年古村，有"粤东襟喉、潮州门户"之称', image: '/images/hong.jpeg' },
        { id: 8, name: '前美村', category: 'chaoshan', location: '汕头市澄海区', description: '潮汕著名侨乡，拥有陈慈黉故居等名胜', image: '/images/hong.jpeg' },

        // 广府村落
        { id: 3, name: '佛山祖庙', category: 'guangfu', location: '佛山市', description: '以祖庙为中心的广府文化村落，建筑精美。', image: '/images/hong.jpeg' },
        { id: 4, name: '沙湾古镇', category: 'guangfu', location: '广州市', description: '典型的广府水乡，保留完整的古建筑群。', image: '/images/hong.jpeg' },
        { id: 9, name: '大岭村', category: 'guangfu', location: '广州市番禺区', description: '千年古村，有"蛎江涌头，半月古村"之称', image: '/images/hong.jpeg' },
        { id: 10, name: '松塘村', category: 'guangfu', location: '佛山市南海区', description: '翰林村，因村中数百年来出了不少进士而得名', image: '/images/hong.jpeg' },

        // 客家村落
        { id: 5, name: '雁南飞茶田', category: 'hakka', location: '梅州市', description: '客家围屋与茶田完美结合的生态村落。', image: '/images/hong.jpeg' },
        { id: 6, name: '桥溪古韵', category: 'hakka', location: '梅州市', description: '隐藏在深山中的客家古村落，风景秀丽。', image: '/images/hong.jpeg' },
        { id: 11, name: '侨乡村', category: 'hakka', location: '梅州市梅县区', description: '客家围屋博物馆，有"客家围屋之乡"的美誉', image: '/images/hong.jpeg' },
        { id: 12, name: '南华又庐', category: 'hakka', location: '梅州市梅县区', description: '典型的客家方形围屋，建筑规模宏大', image: '/images/hong.jpeg' }
      ]
    }
  },
  computed: {
    filteredVillages() {
      if (this.activeFilter === 'all') {
        return this.villages
      }
      return this.villages.filter(village => village.category === this.activeFilter)
    }
  },
  methods: {
    filterVillages(category) {
      this.activeFilter = category
    },
    getCategoryName(category) {
      const categories = {
        'chaoshan': '潮汕村落',
        'guangfu': '广府村落',
        'hakka': '客家村落'
      }
      return categories[category] || category
    },
    goToVillageDetail(id) {
      this.$router.push(`/village/${id}`)
    }
  }
}
</script>

<style scoped>
/* 保持原有样式不变 */
.villages {
  font-family: "Microsoft YaHei", sans-serif;
}

.hero {
  height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('/images/lan.jpeg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 40px;
}

.hero-content h1 {
  font-size: 42px;
  margin-bottom: 15px;
}

.hero-content p {
  font-size: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.filter-section {
  margin-bottom: 30px;
  text-align: center;
}

.filter-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.filter-buttons button {
  padding: 10px 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.filter-buttons button:hover {
  background-color: #e0e0e0;
}

.filter-buttons button.active {
  background-color: #1976d2;
  color: white;
  border-color: #1976d2;
}

.village-list {
  min-height: 500px;
}

.no-results {
  text-align: center;
  padding: 50px 0;
  color: #666;
  font-size: 18px;
}

.village-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
}

.village-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer; /* 添加指针样式表示可点击 */
}

.village-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.image-container {
  position: relative;
  height: 200px;
}

.village-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 15px;
}

.image-overlay h3 {
  margin: 0 0 5px 0;
  font-size: 18px;
}

.image-overlay .location {
  font-size: 14px;
  margin: 0;
}

@media (max-width: 768px) {
  .hero {
    height: 300px;
  }

  .hero-content h1 {
    font-size: 32px;
  }

  .hero-content p {
    font-size: 16px;
  }

  .village-grid {
    grid-template-columns: 1fr;
  }
}
</style>
