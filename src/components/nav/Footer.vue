<template>
  <footer class="footer">
    <div class="footer__content">
      <!-- Logo or Brand Name Section -->
      <div class="footer__brand">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75Vs5YtInW90wmhtUfLr0i761Me2YkcK7UQ&s"
          alt="VueShop"
          class="footer__logo"
        />
        <p>&copy; 2024 VueShop. All rights reserved.</p>
      </div>

      <!-- Footer Navigation Links -->
      <div class="footer__nav">
        <h4>Quick Links</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </div>

      <!-- Contact Section -->
      <div class="footer__contact">
        <h4>Contact</h4>
        <ul>
          <li>Email: support@shopwithme.com</li>
          <li>Phone: +1 234 567 890</li>
        </ul>
      </div>

      <!-- Social Media Section -->
      <div class="footer__social">
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" class="social-icon"
              >Facebook</a
            >
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" class="social-icon"
              >Twitter</a
            >
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" class="social-icon"
              >Instagram</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  background-color: #45006d; /* Purple background */
  color: white;
  padding: 2rem 1rem;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 2rem;
}

.footer__content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer__brand {
  flex: 1;
  min-width: 200px;
}

.footer__logo {
  width: 100px;
  margin-bottom: 1rem;
}

.footer__nav,
.footer__contact,
.footer__social {
  flex: 1;
  min-width: 200px;
}

h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 0.5rem;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  color: #f0b800; /* Highlight color on hover */
}

.social-icon {
  display: block;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .footer__content {
    flex-direction: column;
    align-items: center;
  }

  .footer__nav,
  .footer__contact,
  .footer__social {
    text-align: center;
  }
}
</style>
