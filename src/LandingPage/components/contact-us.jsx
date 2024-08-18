const ContactUs = () => {
  return (
    <section className=" text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-primary-main p-8 rounded-2xl shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">
              Get in Touch with Us
            </h2>
            <p className="text-gray-800 mt-4">
              We’d love to hear from you! Whether you have a question or just
              want to say hello.
            </p>
          </div>
          <form>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-black font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:border-black"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-black font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:border-black"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-black font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:border-black"
                placeholder="Type your message here"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-[#f8bf32] px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-900 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
