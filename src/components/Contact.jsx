
const Contact = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 scroll-mt-16" id="contact">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-center text-gray-700  mb-4" data-aos="fade-down" >Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-8">
          Whether you have an exciting project idea, a job opportunity, or just want to connect, 
          feel free to reach out! I'll get back to you as soon as possible.
        </p>

        <form
          action="https://formspree.io/f/{your-form-id}" 
          method="POST"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm text-gray-700 font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows="5"
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-md shadow hover:bg-secondary transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="mt-10">
          <p className="text-gray-600 mb-4">Or reach out to me on:</p>
          <div className="flex justify-center space-x-6 text-xl">
            <a
              href="https://www.linkedin.com/in/solangeormeno22/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ssormeno@hotmail.com"
              className="hover:text-primary transition"
            >
              Email
            </a>
            <a
              href="https://github.com/zol22"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
