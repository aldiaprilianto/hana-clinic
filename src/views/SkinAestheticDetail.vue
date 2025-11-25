<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-primary text-white py-20">
      <div class="container mx-auto px-6">
        <a href="/" class="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span class="text-sm uppercase tracking-widest">Back to Home</span>
        </a>
        <h1 class="text-5xl md:text-6xl font-serif mb-4">Korean Skin Aesthetic</h1>
        <p class="text-xl text-white/90 max-w-2xl">Advanced Korean lifting treatments for radiant, youthful skin</p>
      </div>
    </header>

    <!-- Content -->
    <div class="container mx-auto px-6 py-16">
      <!-- Overview -->
      <section class="mb-16">
        <h2 class="text-3xl font-serif text-primary mb-6">Overview</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Our Korean Skin Aesthetic treatments combine cutting-edge technology from Seoul's leading aesthetic clinics with personalized care. We specialize in non-invasive procedures that deliver visible, lasting results without surgery.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Using advanced Korean devices including Ultherapy Prime, Thermage FLX, and premium Skin Boosters, we help you achieve naturally beautiful, radiant skin.
        </p>
      </section>

      <!-- Treatments -->
      <section class="mb-16">
        <h2 class="text-3xl font-serif text-primary mb-8">Our Treatments</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Ultherapy -->
          <div class="bg-surface p-8 rounded-2xl border border-gray-100">
            <h3 class="text-2xl font-serif text-primary mb-4">Ultherapy Prime</h3>
            <p class="text-gray-600 mb-4">2nd generation ultrasound technology that targets the SMAS layer for elegant, natural lifting without surgery.</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Non-invasive SMAS lifting</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Visible results in 2-3 months</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Lasts 12-18 months</span>
              </li>
            </ul>
          </div>

          <!-- Thermage FLX -->
          <div class="bg-surface p-8 rounded-2xl border border-gray-100">
            <h3 class="text-2xl font-serif text-primary mb-4">Thermage FLX</h3>
            <p class="text-gray-600 mb-4">Advanced radiofrequency technology for skin tightening and collagen remodeling with immediate and long-term results.</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Immediate skin tightening</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Collagen remodeling</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Single session treatment</span>
              </li>
            </ul>
          </div>

          <!-- Linear Z -->
          <div class="bg-surface p-8 rounded-2xl border border-gray-100">
            <h3 class="text-2xl font-serif text-primary mb-4">Linear Z</h3>
            <p class="text-gray-600 mb-4">Precision-designed device for targeted lifting on specific facial areas with customized treatment plans.</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Targeted precision lifting</span>
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
                <span>Customizable treatment depth</span>
              </li>
            </ul>
          </div>

          <!-- Skin Boosters -->
          <div class="bg-surface p-8 rounded-2xl border border-gray-100">
            <h3 class="text-2xl font-serif text-primary mb-4">Premium Skin Boosters</h3>
            <p class="text-gray-600 mb-4">Korean skin boosters for deep hydration, radiance, and skin quality improvement with visible glow.</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Deep skin hydration</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Instant radiance boost</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>3-4 session protocol</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-gradient-to-r from-primary to-accent text-white p-12 rounded-3xl text-center">
        <h2 class="text-3xl font-serif mb-4">Ready to Transform Your Skin?</h2>
        <p class="text-white/90 mb-8 max-w-2xl mx-auto">Book a consultation with our Korean aesthetic specialists to create your personalized treatment plan.</p>
        <a href="/#contact" class="inline-block bg-white text-primary px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-surface transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          Book Consultation
        </a>
      </section>
    </div>
  </div>
</template>
