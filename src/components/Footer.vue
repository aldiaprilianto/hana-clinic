<template>
  <footer id="contact" class="bg-primary text-white py-24">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
        <!-- Brand -->
        <div>
          <a href="#" class="inline-block mb-8">
            <img src="/images/logo.png" alt="Hana Clinic Logo" class="h-16 w-auto brightness-0 invert" />
          </a>
          <p class="text-gray-300 font-light leading-relaxed mb-8 pr-8">
            Elevating beauty and wellness to an art form. We invite you to experience the difference of truly personalized, high-end care.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-white hover:text-primary transition-colors text-sm uppercase tracking-widest">Instagram</a>
            <a href="#" class="text-white hover:text-primary transition-colors text-sm uppercase tracking-widest">Facebook</a>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-sm uppercase tracking-[0.2em] text-primary mb-8">Contact Us</h3>
          <p class="text-gray-400 font-light mb-4 leading-loose">
            400 El Cerro Blvd, Suite 103<br>
            Danville, California 94526
          </p>
          <p class="text-gray-400 font-light mb-8 leading-loose">
            <a href="tel:+19258318792" class="hover:text-primary transition-colors block">(925) 831-8792</a>
            <a href="mailto:hello@hanaclinic.com" class="hover:text-primary transition-colors block">hello@hanaclinic.com</a>
          </p>
          <a href="#" class="inline-block border border-white/30 px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-dark transition-all">Get Directions</a>
        </div>

        <!-- Hours -->
        <div>
          <h3 class="text-sm uppercase tracking-[0.2em] text-primary mb-8">Hours</h3>
          <ul class="text-gray-400 font-light space-y-4">
            <li class="flex justify-between border-b border-white/10 pb-2"><span>Mon - Thu</span> <span>8:00 AM - 5:00 PM</span></li>
            <li class="flex justify-between border-b border-white/10 pb-2"><span>Friday</span> <span>8:00 AM - 2:00 PM</span></li>
            <li class="flex justify-between border-b border-white/10 pb-2"><span>Sat - Sun</span> <span>Closed</span></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs uppercase tracking-widest">
        <p>&copy; {{ new Date().getFullYear() }} Hana Clinic. All Rights Reserved.</p>
        <div class="mt-4 md:mt-0 space-x-6">
          <a href="#" class="hover:text-primary">Privacy Policy</a>
          <a href="#" class="hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
