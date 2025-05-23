// padaminas-website/src/pages/Contact.tsx

function Contact() {
  return (
    <div className="px-4 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      {/* Contact Form */}
      <form className="grid gap-6 mb-12">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded w-full"
          required
        />
        <textarea
          placeholder="Your Message"
          className="border p-3 rounded w-full h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded w-full"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="text-center text-sm text-gray-700">
        <p><strong>Address:</strong> 66 W Lincoln Ave</p>
        <p><strong>Phone:</strong> (914) 667-9101</p>
        <p><strong>Email:</strong> contact@padaminasbakery.com</p>
        <p><strong>Hours:</strong> Mon–Sat: 5:00 AM – 6:00 PM | Sun: 6:00 AM – 4:00 PM</p>
      </div>

      {/* Map */}
      <div className="mt-8">
        <iframe
          title="Padaminas Location"
          src="https://www.google.com/maps?q=66+W+Lincoln+Ave&output=embed"
          width="100%"
          height="250"
          className="rounded shadow"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
