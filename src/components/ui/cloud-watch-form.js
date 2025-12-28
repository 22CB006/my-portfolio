import React, { useState, useEffect } from "react";
import { ButtonShadcn } from "./button-shadcn";
import { Input } from "./input";
import { Label } from "./label";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function CloudWatchForm({ onSubmit }) {
  const [isTyping, setIsTyping] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleMouse = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const offsetX = ((cursor.x / window.innerWidth) - 0.5) * 40;
    const offsetY = ((cursor.y / window.innerHeight) - 0.5) * 20;
    setEyePos({ x: offsetX, y: offsetY });
  }, [cursor]);

  // Blinking every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all fields correctly');
      return;
    }

    setIsSubmitting(true);

    try {
      emailjs.init("AYKpMBGST291R0fmQ");

      await emailjs.send(
        "service_5vb8xia",
        "template_qodgjv8",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      );

      await emailjs.send(
        "service_5vb8xia",
        "template_9045cqb",
        {
          to_name: formData.name,
          to_email: formData.email,
          message: formData.message
        }
      );

      toast.success('Message sent successfully! Check your email for confirmation.');
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      if (onSubmit) {
        onSubmit(formData);
      }
    } catch (error) {
      let errorMessage = 'Failed to send message. ';
      if (error.text) {
        errorMessage += `Error: ${error.text}. `;
      }
      errorMessage += 'Please try again or email me directly at aryalakshmisece@gmail.com';
      
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#1a1a2e',
            color: '#06b6d4',
            border: '2px solid rgba(6, 182, 212, 0.5)',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 10px 40px rgba(6, 182, 212, 0.3), 0 0 20px rgba(6, 182, 212, 0.2)',
            zIndex: 9999,
            minWidth: '300px',
          },
          success: {
            iconTheme: {
              primary: '#06b6d4',
              secondary: '#1a1a2e',
            },
            style: {
              background: '#1a1a2e',
              color: '#06b6d4',
              border: '2px solid #06b6d4',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#1a1a2e',
            },
            style: {
              background: '#1a1a2e',
              color: '#ef4444',
              border: '2px solid #ef4444',
            },
          },
        }}
        containerStyle={{
          top: 20,
          right: 20,
          zIndex: 9999,
        }}
      />
      <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-md rounded-xl shadow-xl p-8 flex flex-col items-center gap-6 w-full max-w-md border border-cyan-500/20">
        {/* Cartoon Face with ethereal night sky clouds */}
        <div className="relative w-[280px] h-[160px] rounded-lg overflow-hidden shadow-lg shadow-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=400&h=200&fit=crop&q=80"
            alt="cloud"
            className="w-full h-full object-cover"
          />
          {["left", "right"].map((side, idx) => (
            <div
              key={side}
              className="absolute flex justify-center items-end overflow-hidden"
              style={{
                top: 60,
                left: idx === 0 ? 80 : 150,
                width: 28,
                height: isTyping
                  ? 4
                  : blink
                  ? 6
                  : 40,
                borderRadius: isTyping || blink ? "2px" : "50% / 60%",
                backgroundColor: isTyping ? "#06b6d4" : "white",
                transition: "all 0.15s ease",
                boxShadow: isTyping ? "0 0 10px rgba(6, 182, 212, 0.5)" : "0 2px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              {!isTyping && (
                <div
                  className="bg-cyan-600"
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    marginBottom: 4,
                    transform: `translate(${eyePos.x}px, 0px)`,
                    transition: "all 0.1s ease",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-cyan-300 font-semibold text-sm">Name *</Label>
            <Input 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              className={`bg-gray-900/50 border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500 ${errors.name ? 'border-red-500' : ''}`}
              required
            />
            {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-cyan-300 font-semibold text-sm">Email *</Label>
            <Input 
              type="email" 
              name="email"
              placeholder="your.email@example.com" 
              value={formData.email}
              onChange={handleChange}
              className={`bg-gray-900/50 border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500 ${errors.email ? 'border-red-500' : ''}`}
              required
            />
            {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-cyan-300 font-semibold text-sm">Message *</Label>
            <Input
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              className={`bg-gray-900/50 border-cyan-500/30 text-white placeholder:text-gray-500 focus:border-cyan-500 ${errors.message ? 'border-red-500' : ''}`}
              required
            />
            {errors.message && <span className="text-red-400 text-xs">{errors.message}</span>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full inline-flex items-center justify-center whitespace-nowrap font-mono text-sm -outline-offset-4 focus:outline-dotted focus:outline-1 focus:outline-cyan-400 focus-visible:outline-dotted focus-visible:outline-1 focus-visible:outline-cyan-400 text-black bg-[#c0c0c0] text-transparent [text-shadow:0_0_#000] disabled:[text-shadow:1px_1px_0_#fff] disabled:text-[grey] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf] active:shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#0a0a0a,inset_-2px_-2px_#dfdfdf,inset_2px_2px_#808080] disabled:shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf] h-12 px-6 font-bold hover:bg-[#d4d4d4] transition-colors disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
