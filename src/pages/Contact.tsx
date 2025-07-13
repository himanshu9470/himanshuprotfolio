import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'fcfcaba2-23bb-4846-86e7-bd17f4c973b3');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('replyto', formData.email);
      formDataToSend.append('from_name', 'Portfolio Contact Form');
      formDataToSend.append('redirect', 'false');
      formDataToSend.append('botcheck', ''); // Empty value for honeypot

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      alert(error.message || 'There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and exciting projects. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Whether you have a project in mind, want to collaborate on something exciting, or just want to say hello, 
              I'd love to hear from you. Feel free to reach out through any of the channels below.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Mail className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">himanshu160204@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">Available upon request</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/himanshu9470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors group"
                >
                  <Github className="text-gray-700 group-hover:text-orange-600 transition-colors" size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshu-kumar-vishwakrma-56a7b2188/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 hover:bg-blue-200 p-3 rounded-lg transition-colors group"
                >
                  <Linkedin className="text-blue-600 group-hover:text-orange-600 transition-colors" size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-100 hover:bg-sky-200 p-3 rounded-lg transition-colors group"
                >
                  <Twitter className="text-sky-600 group-hover:text-orange-600 transition-colors" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h2>
            
            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                <p className="font-medium">Thank you! Your message has been sent successfully.</p>
                <p className="text-sm mt-1">I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-3 text-sm text-green-600 hover:text-green-800 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden honeypot field - must be included */}
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  className="hidden" 
                  style={{ display: 'none' }} 
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Response Guarantee</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I typically respond to all inquiries within 24 hours. For immediate assistance or project discussions, 
              feel free to connect with me on LinkedIn or check out my latest work on GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;