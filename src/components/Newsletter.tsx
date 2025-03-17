
import { useState } from 'react';
import { Check, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call with traditional setTimeout instead of any Promise-based approaches
    setTimeout(() => {
      if (email.includes('@') && email.includes('.')) {
        setIsSuccess(true);
        setEmail('');
      } else {
        setError('Please enter a valid email address');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Join Our Community</h2>
          <p className="text-midnight/70 mb-8">
            Subscribe to our newsletter for exclusive offers, early access to new collections, and thoughtfully curated content on children's fashion.
          </p>
          
          {isSuccess ? (
            <div className="bg-forest/10 text-forest px-6 py-4 rounded-md animate-fade-in flex items-center justify-center">
              <Check className="h-5 w-5 mr-2" />
              <span>Thank you for subscribing! We've sent a welcome email to your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-border focus:border-midnight focus:outline-none focus:ring-1 focus:ring-midnight transition-all"
                  required
                />
                {error && <p className="text-rust text-sm mt-1 text-left">{error}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-midnight text-white px-8 py-3 rounded-md hover:bg-midnight/90 transition-all disabled:opacity-70 whitespace-nowrap hover-lift flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Subscribing...'
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
          
          <p className="text-sm text-midnight/60 mt-4">
            By subscribing you agree to our Privacy Policy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
