<template>
  <nav class="nav-header">
    <h1 class="logo"><a href="/">Thomas Michel</a></h1>

    <div class="nav-header-menu">
      <p><a href="https://github.com/pr0m3th3usEx" target="_blank">Github</a></p>
      <p><a href="https://www.linkedin.com/in/thomas-glowmefr/" target="_blank">Linkedin</a></p>
      <p><a href="/">Download CV</a></p>
    </div>
  </nav>
</template>

<style scoped lang="scss">

nav.nav-header {
  display: flex;
  padding: 32px 48px;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  .nav-header-menu {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .logo {
    font-size: 24px;
    
    a {
      &:hover {
        text-decoration: none;
      }
    }
  }

}

@media screen and (max-width: 600px) {
  .nav-header {
    flex-direction: column;
    gap: 24px;
  }
}
</style>