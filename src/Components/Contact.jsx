import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is not valid';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://getform.io/f/azylnqjb", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({ name: '', email: '', message: '' });
        } else {
          alert("Failed to send the message. Please try again.");
        }
      } catch (error) {
        alert("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className='px-5 py-20 mx-auto bg-light-bg'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline font-sans text-gray-700 dark:text-gray-300'>Contact</p>
          <p className='py-6 text-gray-500'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center border border-slate-200 rounded-xl p-2 text-sm'>
          <form onSubmit={handleSubmit} className='flex flex-col w-full space-y-1 md:w-1/2'>
            <input
              type="text"
              name="name"
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              className={`bg-slate-100 text-slate-600 placeholder:text-slate-600 placeholder:opacity-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600`}
            />
            {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}
            <input
              type="email"
              name="email"
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              className={`bg-slate-100 text-slate-600 placeholder:text-slate-600 placeholder:opacity-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600`}
            />
            {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
            <textarea
              name="message"
              rows="10"
              id="message"
              placeholder="Write Message...."
              value={formData.message}
              onChange={handleChange}
              className={`bg-slate-100 text-slate-600 placeholder:text-slate-600 placeholder:opacity-50 border ${errors.message ? 'border-red-500' : 'border-slate-200'} resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600`}
            />
            {errors.message && <span className='text-red-500 text-sm'>{errors.message}</span>}
            <button
              type='submit'
              className="bg-slate-100 stroke-slate-600 border border-slate-200 col-span-2 w-40 flex justify-center self-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-blue-200 focus:bg-blue-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 text-slate-600" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
              ) : (
                <svg fill="none" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"></path>
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M10.11 13.6501L13.69 10.0601"></path>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
