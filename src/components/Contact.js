import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);
  };
  console.log(sent);
  return (
    <div className='contact-us'>
      <h1>Contact Us</h1>
      {sent && <h4> Thank you for your message! </h4>}
      <form className='contact form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          required
          className='input'
          type='text'
          name='name'
          id='name'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='email'>Email</label>
        <input
          required
          className='input'
          type='email'
          name='email'
          id='email'
          placeholder='examle@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          required
          className='input'
          name='message'
          id='message'
          cols='30'
          rows='7'
          placeholder='Type your message... '
          value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit"  className='button'>Send</button>
      </form>
    </div>
  );
}

export default Contact;
