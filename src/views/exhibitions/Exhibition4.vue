<template>
  <div class="exhibition-container">
    <div class="exhibition-banner">
      <img src="/images/1.jpg" alt="数字艺术展">
      <div class="banner-overlay">
        <h1>未来已来：数字艺术展</h1>
      </div>
    </div>

    <div class="exhibition-nav">
      <router-link to="/exhibition/4/about" active-class="active">展览介绍</router-link>
      <router-link to="/exhibition/4/artists" active-class="active">参展艺术家</router-link>
      <router-link to="/exhibition/4/works" active-class="active">展品预览</router-link>
    </div>

    <div class="exhibition-content">
      <router-view></router-view>
    </div>

    <button @click="goBack" class="back-button">←</button>
  </div>
</template>

<script>
export default {
  name: 'Exhibition4',
  methods: {
    goBack() {
      this.$router.go(-1); // 返回上一页
    }
  }
}
</script>

<style scoped>
.exhibition-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  padding-bottom: 80px; /* 为按钮留出空间 */
}

.exhibition-banner {
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
}

.exhibition-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  padding: 40px;
  color: white;
}

.exhibition-nav {
  display: flex;
  margin: 20px 0;
  border-bottom: 1px solid #eee;
}

.exhibition-nav a {
  padding: 10px 20px;
  margin-right: 10px;
  text-decoration: none;
  color: #333;
}

.exhibition-nav a.active {
  border-bottom: 2px solid #3498db;
  color: #3498db;
  font-weight: bold;
}

.exhibition-content {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.back-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 100;
}

.back-button:hover {
  background-color: #555;
  transform: scale(1.1);
}
</style>
