import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl mb-6">Contact Me</h2>
      <form className="w-full max-w-lg mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight" type="text" placeholder="Your Name" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight" type="email" placeholder="Your Email" />
          </div>
        </div>
        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight mb-6" rows="5" placeholder="Write Something"></textarea>
        <button className="btn btn-outline-primary rounded">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
