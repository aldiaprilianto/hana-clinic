<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-dark text-white py-20">
      <div class="container mx-auto px-6">
        <a href="/" class="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span class="text-sm uppercase tracking-widest">Back to Home</span>
        </a>
        <h1 class="text-5xl md:text-6xl font-serif mb-4">Aesthetic Dentistry</h1>
        <p class="text-xl text-white/90 max-w-2xl">Complete your beauty transformation with a perfect smile</p>
      </div>
    </header>

    <!-- Content -->
    <div class="container mx-auto px-6 py-16">
      <!-- Overview -->
      <section class="mb-16">
        <h2 class="text-3xl font-serif text-primary mb-6">Overview</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Our Aesthetic Dentistry services complement your beauty journey with comprehensive smile design solutions.
        </p>
        <p class="text-gray-600 leading-relaxed">
          From teeth whitening to complete smile makeovers, we help you achieve the confident smile you deserve.
        </p>
      </section>

      <!-- Treatments -->
      <section class="mb-16">
        <h2 class="text-3xl font-serif text-primary mb-8">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Veneers -->
          <div class="bg-surface p-8 rounded-2xl border border-gray-100">
            <h3 class="text-2xl font-serif text-primary mb-4">Porcelain Veneers</h3>
            <p class="text-gray-600 mb-4">Custom-designed veneers for a natural, beautiful smile transformation.</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Natural appearance</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Stain resistant</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Long-lasting results</span>
              </li>
            </ul>
          </div>

          <!-- Whitening -->
          <div class="bg-surface p-8 rounded-2xl border border-gray-100">
            <h3 class="text-2xl font-serif text-primary mb-4">Teeth Whitening</h3>
            <p class="text-gray-600 mb-4">Professional whitening for a brighter, more confident smile.</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Immediate results</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Safe and effective</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Customized treatment</span>
              </li>
            </ul>
          </div>

          <!-- Implants -->
          <div class="bg-surface p-8 rounded-2xl border border-gray-100">
            <h3 class="text-2xl font-serif text-primary mb-4">Dental Implants</h3>
            <p class="text-gray-600 mb-4">Permanent solution for missing teeth with natural look and function.</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Permanent solution</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Natural function</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Bone preservation</span>
              </li>
            </ul>
          </div>

          <!-- Smile Design -->
          <div class="bg-surface p-8 rounded-2xl border border-gray-100">
            <h3 class="text-2xl font-serif text-primary mb-4">Complete Smile Design</h3>
            <p class="text-gray-600 mb-4">Comprehensive smile makeover combining multiple treatments.</p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Personalized design</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Digital preview</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Complete transformation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-gradient-to-r from-dark to-primary text-white p-12 rounded-3xl text-center">
        <h2 class="text-3xl font-serif mb-4">Ready for Your Perfect Smile?</h2>
        <p class="text-white/90 mb-8 max-w-2xl mx-auto">Book a smile consultation to discover how we can transform your smile.</p>
        <a href="/#contact" class="inline-block bg-white text-primary px-10 py-4 rounded-full uppercase tracking-[0.2em] text-xs font-bold hover:bg-surface transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          Book Consultation
        </a>
      </section>
    </div>
  </div>
</template>
