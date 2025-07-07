<template>
  <!-- Navbar start -->
  <nav class="w-screen fixed bg-opacity-90 bg-white p-4 lg:px-20 flex justify-between z-50">
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
      <a href="#" role="menuitem">
        <p class="mx-4">Accueil</p>
      </a>

      <a href="#" role="menuitem">
        <p class="mx-4">À Propos</p>
      </a>

      <a href="#" role="menuitem">
        <p class="mx-4">Explorez</p>
      </a>
      <p @click="scrollToSection" class="cursor-pointer text-blue-500">Nos souvenirs</p>

      <button class="btn" role="menuitem">Contactez-nous</button>

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

function scrollToSection() {
  const target = document.getElementById('portfolio-section')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style></style>
