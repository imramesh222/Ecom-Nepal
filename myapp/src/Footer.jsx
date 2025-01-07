import React from 'react'

const Footer = () => {
  return (
    <>
       <footer class="bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        
        <div class="col-md-4">
          <h5>About Us</h5>
          <p>
            We are committed to providing the best services for our clients.
            Learn more about our journey and values.
          </p>
        </div>

       
        <div class="col-md-4">
          <h5>Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white text-decoration-none">Home</a></li>
            <li><a href="#" class="text-white text-decoration-none">Services</a></li>
            <li><a href="#" class="text-white text-decoration-none">About</a></li>
            <li><a href="#" class="text-white text-decoration-none">Contact</a></li>
          </ul>
        </div>

     
        <div class="col-md-4">
          <h5>Contact Us</h5>
          <p><i class="bi bi-envelope"></i> contact@example.com</p>
          <p><i class="bi bi-telephone"></i> +1 123-456-7890</p>
          <p><i class="bi bi-geo-alt"></i> 123 Main St, Anywhere, USA</p>
        </div>
      </div>
      
      <hr class="border-white my-3"/>

      
      <div class="text-center">
        <p class="mb-0">&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </div>
  </footer>

    </>
  )
}

export default Footer
