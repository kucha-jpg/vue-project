<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link to="/" class="logo-container">
        <img src="/images/logo.PNG" alt="粤村文脉 Logo" class="logo-image">
        <span class="logo-text">粤村文脉</span>
      </router-link>
    </div>
    <div class="navbar-right">
      <router-link to="/" class="nav-link" active-class="active">首页</router-link>
      <router-link to="/villages" class="nav-link" active-class="active">村落</router-link>
      <router-link to="/topics" class="nav-link" active-class="active">专题</router-link>
      <router-link to="/exhibitions" class="nav-link" active-class="active">特展</router-link>
<!--      <router-link to="/activities" class="nav-link" active-class="active">活动</router-link>-->
      <router-link to="/creations" class="nav-link" active-class="active">文创</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-image {
  height: 40px; /* 根据实际图片尺寸调整 */
  width: auto;
  margin-right: 10px; /* 图片和文字之间的间距 */
}

.logo-text {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  font-family: "Microsoft YaHei", sans-serif;
}

.navbar-right {
  display: flex;
  gap: 30px;
}

.nav-link {
  font-size: 18px;
  color: #555;
  text-decoration: none;
  transition: color 0.3s;
  padding: 10px 0;
  position: relative;
}

.nav-link:hover {
  color: #1890ff;
}

.nav-link.active {
  color: #1890ff;
  font-weight: 500;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1890ff;
}

/* 响应式设计 - 在小屏幕上隐藏Logo图片 */
@media (max-width: 768px) {
  .logo-image {
    display: none;
  }
  .logo-text {
    font-size: 24px;
  }
}
</style>
