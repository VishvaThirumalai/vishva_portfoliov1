import { useState, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceId = "service_unaq8eo";
      const templateId = "template_69nbnfk";

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        "OklvZgYXEHrFEx3iv" // You need to add your EmailJS public key here
      );

      console.log("Email sent successfully:", result);

      // Show success message
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);

      // Show error message
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      detail: "Katpadi, Vellore, Tamil Nadu",
      description: "Available for in-person meetings",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      detail: "vishva2730@gmail.com",
      description: "Send me a message anytime",
    },
    {
      icon: FaPhone,
      title: "Phone",
      detail: "tel:+7092980042",
      display: "+91 7092980042",
      description: "Mon - Fri, 9:00 AM - 6:00 PM",
    },
  ];

  // Updated social links with your actual profiles
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/VishvaThirumalai",
      color: "hover:text-gray-300",
      title: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/vishva-t-1aab58292",
      color: "hover:text-blue-400",
      title: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: "mailto:vishva2730@gmail.com",
      color: "hover:text-red-400",
      title: "Email",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/917092980042",
      color: "hover:text-green-400",
      title: "WhatsApp",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/_vishva_07_._?igsh=YzZrbzdhdXZleTg3",
      color: "hover:text-pink-400",
      title: "Instagram",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/share/1DQ1KvjTpy/",
      color: "hover:text-blue-300",
      title: "Facebook",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-20">
      {/* Dark green shade at middle */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-900/40 to-transparent opacity-80"></div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Let's Connect & Collaborate
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg">
          Whether it's a new project, a collaboration, or just to say hi — I'll
          love to hear from you!
        </p>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-800/80 rounded-2xl p-6 shadow-lg border border-gray-700 backdrop-blur-sm hover:shadow-xl transition-all duration-300 animate-slide-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <info.icon className="w-6 h-6 text-blue-400" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {info.title}
                      </h3>

                      {/* CLICKABLE LINK LOGIC */}
                      {info.title === "Phone" ? (
                        <a
                          href={`tel:${info.detail}`}
                          className="text-blue-300 font-medium text-lg mb-1 hover:underline block"
                        >
                          {info.display || info.detail}
                        </a>
                      ) : info.title === "Email" ? (
                        <a
                          href={`mailto:${info.detail}`}
                          className="text-blue-300 font-medium text-lg mb-1 hover:underline block"
                        >
                          {info.detail}
                        </a>
                      ) : info.title === "Location" ? (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            info.detail
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 font-medium text-lg mb-1 hover:underline block"
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-blue-300 font-medium text-lg mb-1">
                          {info.detail}
                        </p>
                      )}

                      <p className="text-gray-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/80 rounded-2xl p-8 shadow-lg border border-gray-700 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Follow My Journey
              </h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 group bg-gray-700/50 p-3 rounded-full hover:bg-gray-600/70`}
                    title={social.title}
                  >
                    <social.icon
                      size={24}
                      className="group-hover:animate-bounce"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Currently Available
                  </h4>
                  <p className="text-green-300 text-sm">
                    Open for new projects and collaborations
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">
                    Online
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/80 rounded-2xl p-8 shadow-lg border border-gray-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me a Message
            </h3>

            {/* Status Message */}
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-500/20 border border-green-500/30 text-green-300"
                    : "bg-red-500/20 border border-red-500/30 text-red-300"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-300 text-sm font-medium mb-2"
                  >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:from-blue-700 hover:to-purple-700 hover:scale-105"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;