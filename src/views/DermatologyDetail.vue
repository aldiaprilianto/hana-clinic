<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-accent text-white py-20">
      <div class="container mx-auto px-6">
        <a href="/" class="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span class="text-sm uppercase tracking-widest">Back to Home</span>
        </a>
        <h1 class="text-5xl md:text-6xl font-serif mb-4">Anti-Aging Dermatology</h1>
        <p class="text-xl text-white/90 max-w-2xl">Comprehensive anti-aging solutions with Korean technology</p>
      </div>
    </header>

    <!-- Content -->
    <div class="container mx-auto px-6 py-16">
      <!-- Overview -->
      <section class="mb-16">
        <h2 class="text-3xl font-serif text-primary mb-6">Overview</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Our Anti-Aging Dermatology program combines the latest Korean technology with proven medical treatments to address signs of aging comprehensively.
        </p>
        <p class="text-gray-600 leading-relaxed">
          From injectables to advanced laser treatments, we offer personalized solutions that deliver natural, age-defying results.
        </p>
      </section>

      <!-- Treatments -->
      <section class="mb-16">
        <h2 class="text-3xl font-serif text-primary mb-8">Our Treatments</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Injectables -->
          <div class="bg-surface p-8 rounded-2xl border border-gray-100">
            <h3 class="text-2xl font-serif text-primary mb-4">Premium Injectables</h3>
            <p class="text-gray-600 mb-4">Korean Tox and premium fillers for natural wrinkle reduction and facial contouring.</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Wrinkle reduction</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Volume restoration</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Natural results</span>
              </li>
            </ul>
          </div>

          <!-- Laser Treatments -->
          <div class="bg-surface p-8 rounded-2xl border border-gray-100">
            <h3 class="text-2xl font-serif text-primary mb-4">Laser Treatments</h3>
            <p class="text-gray-600 mb-4">Advanced laser technology for pigmentation, texture improvement, and skin rejuvenation.</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Pigmentation treatment</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Skin texture refinement</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Collagen stimulation</span>
              </li>
            </ul>
          </div>

          <!-- Chemical Peels -->
          <div class="bg-surface p-8 rounded-2xl border border-gray-100">
            <h3 class="text-2xl font-serif text-primary mb-4">Korean Peels</h3>
            <p class="text-gray-600 mb-4">Gentle yet effective Korean chemical peels for skin renewal and radiance.</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Skin renewal</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Minimal downtime</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Customizable strength</span>
              </li>
            </ul>
          </div>

          <!-- Thread Lifting -->
          <div class="bg-surface p-8 rounded-2xl border border-gray-100">
            <h3 class="text-2xl font-serif text-primary mb-4">Thread Lifting</h3>
            <p class="text-gray-600 mb-4">Korean PDO threads for subtle lifting and collagen stimulation without surgery.</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Immediate lifting</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Collagen production</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Lasts 12-18 months</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-gradient-to-r from-accent to-primary text-white p-12 rounded-3xl text-center">
        <h2 class="text-3xl font-serif mb-4">Start Your Anti-Aging Journey</h2>
        <p class="text-white/90 mb-8 max-w-2xl mx-auto">Schedule a consultation to discover the perfect anti-aging treatment plan for your skin.</p>
        <a href="/#contact" class="inline-block bg-white text-primary px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-surface transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          Book Consultation
        </a>
      </section>
    </div>
  </div>
</template>
