<template>
  <!-- Navbar start -->
  <nav
    class="w-screen fixed hidden bg-opacity-90 bg-white p-4 lg:px-20 md:flex justify-between z-50"
  >
    <!-- Logo start -->
    <div class="h-full flex flex-col justify-center">
      <p class="tracking-widest font-semibold">TOI FÉMININ ESSENTIEL</p>
      <p class="tracking-widest font-light">COMPAGNIE OCTAVIE</p>
    </div>
    <!-- Logo end -->

    <!-- Toggler start -->
    <button role="menubar" class="md:hidden">
      <i class="fa-solid fa-bars text-2xl"></i>
    </button>
    <!-- Toggler end -->

    <!-- Menu content start -->
    <div
      class="absolute left-0 right-0 translate-y-16 bg-opacity-90 bg-white md:bg-none md:bg-opacity-0 shadow hidden md:flex flex-col gap-4 items-center p-4 md:flex-row md:static md:shadow-none md:translate-y-0"
      role="menu"
      aria-expanded="false"
    >
      <!-- Links start -->

      <button @click="scrollToHome" class="cursor-pointer tracking-widest">Accueil</button>
      <button @click="scrollToDate" class="cursor-pointer tracking-widest">Nos Dates</button>
      <button @click="scrollToPortfolio" class="cursor-pointer tracking-widest">
        Nos souvenirs
      </button>

      <img
        @click="instagramLink"
        src="@/assets/instagram-logo.png"
        alt="icon-instagram"
        class="size-16"
      />

      <!-- Links end -->
    </div>
    <!-- Menu content end -->
  </nav>
  <!-- Navbar end -->
</template>

<script setup>
function instagramLink() {
  window.open('https://www.instagram.com/toifemininessentielle.nanette/', '_blank')
}

function scrollToPortfolio() {
  const target = document.getElementById('portfolio-section')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
function scrollToDate() {
  const target = document.getElementById('date-section')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
function scrollToHome() {
  const target = document.getElementById('home-section')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style></style>
