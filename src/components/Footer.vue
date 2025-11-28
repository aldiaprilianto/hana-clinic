<template>
  <footer id="contact" class="bg-primary text-white py-24">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Brand -->
        <div>
          <a href="#" class="inline-block mb-8">
            <img src="/images/logo.png" alt="Hana Clinic Logo" class="h-16 w-auto brightness-0 invert" />
          </a>
          <p class="text-gray-300 font-light leading-relaxed mb-8">
            Elevating beauty and wellness to an art form. Experience personalized, high-end care.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-white hover:text-accent transition-colors text-sm uppercase tracking-widest">Instagram</a>
            <a href="#" class="text-white hover:text-accent transition-colors text-sm uppercase tracking-widest">Facebook</a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm uppercase tracking-[0.2em] text-accent mb-8">Quick Links</h3>
          <ul class="space-y-3 text-gray-300 font-light">
            <li><router-link to="/" class="hover:text-accent transition-colors">Home</router-link></li>
            <li><router-link to="/skin-aesthetic" class="hover:text-accent transition-colors">Skin Aesthetic</router-link></li>
            <li><router-link to="/dental" class="hover:text-accent transition-colors">Dental Treatment</router-link></li>
            <li><router-link to="/team" class="hover:text-accent transition-colors">Our Team</router-link></li>
            <li><router-link to="/gallery" class="hover:text-accent transition-colors">Gallery</router-link></li>
            <li><router-link to="/blog" class="hover:text-accent transition-colors">Blog</router-link></li>
            <li><router-link to="/career" class="hover:text-accent transition-colors">Career</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-sm uppercase tracking-[0.2em] text-accent mb-8">Contact Us</h3>
          <p class="text-gray-300 font-light mb-4 leading-loose">
            400 El Cerro Blvd, Suite 103<br>
            Danville, California 94526
          </p>
          <p class="text-gray-300 font-light mb-6 leading-loose">
            <a href="tel:+19258318792" class="hover:text-accent transition-colors block">(925) 831-8792</a>
            <a href="mailto:hello@hanaclinic.com" class="hover:text-accent transition-colors block">hello@hanaclinic.com</a>
          </p>
          <a href="#" class="inline-block border border-white/30 px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-accent hover:text-primary hover:border-accent transition-all">Get Directions</a>
        </div>

        <!-- Hours -->
        <div>
          <h3 class="text-sm uppercase tracking-[0.2em] text-accent mb-8">Hours</h3>
          <ul class="text-gray-300 font-light space-y-4">
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
