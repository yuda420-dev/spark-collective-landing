import React, { useState, useEffect } from 'react';

// Spark Collective - Landing Page
// Aesthetic: Warm workshop meets modern gallery - copper, cream, charcoal
// Typography: Bold serif headlines + clean sans body

const SparkCollectiveLanding = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    { name: 'Maria C.', role: 'Small Business Owner', text: 'I came in to make a logo and left with a complete brand identity. The experts here took my 80% there Midjourney attempts and made them look like I paid an agency $10K.', avatar: '👩‍💼' },
    { name: 'James T.', role: 'Retired Architect, 68', text: 'Finally a place where I can learn these AI tools without feeling stupid. The patience here is incredible, and I\'ve made friends I grab coffee with every week.', avatar: '👴' },
    { name: 'Aisha M.', role: 'Content Creator', text: 'The community alone is worth the membership. I\'ve collaborated on 3 projects with people I met here, and landed my first paid AI art commission through the marketplace.', avatar: '👩‍🎨' },
  ];

  const impactStats = [
    { number: '1,847', label: 'Global Members' },
    { number: '6', label: 'Studios Worldwide' },
    { number: '342', label: 'Free Memberships Given' },
    { number: '$47K', label: 'Member Earnings This Month' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: '#FAF7F2' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4" style={{ background: 'rgba(250, 247, 242, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #E8E0D5' }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #D4A574 0%, #8B7355 100%)' }}>
              <span className="text-white text-lg">✦</span>
            </div>
            <span className="text-xl font-bold" style={{ color: '#2D2A24', fontFamily: 'Georgia, serif' }}>
              Spark Collective
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#how" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#5C4A32' }}>How It Works</a>
            <a href="#studios" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#5C4A32' }}>Studios</a>
            <a href="#impact" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#5C4A32' }}>Impact</a>
            <a href="#pricing" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#5C4A32' }}>Pricing</a>
            <button className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-90" style={{ background: '#2D2A24', color: '#FAF7F2' }}>
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: '#FEF3E2', color: '#8B7355' }}>
                🚀 NYC SoHo Opening Spring 2025
              </div>
              <h1 className="text-5xl leading-tight mb-6" style={{ color: '#2D2A24', fontFamily: 'Georgia, serif', fontWeight: 700 }}>
                Your AI creations,<br />
                <span style={{ color: '#8B7355' }}>professionally finished.</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#5C4A32' }}>
                Physical studios where you work alongside expert guides to turn your AI-generated ideas into polished, professional results. Community included.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
                {!submitted ? (
                  <>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-5 py-3.5 rounded-xl text-base"
                      style={{ background: 'white', border: '2px solid #E8E0D5', color: '#2D2A24' }}
                      required
                    />
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, #D4A574 0%, #8B7355 100%)', color: 'white' }}
                    >
                      Get Early Access
                    </button>
                  </>
                ) : (
                  <div className="flex-1 px-5 py-3.5 rounded-xl text-base font-medium text-center" style={{ background: '#E8F5E8', color: '#2D5A2D' }}>
                    ✓ You're on the list! We'll be in touch soon.
                  </div>
                )}
              </form>
              <p className="text-sm" style={{ color: '#A99B8A' }}>
                Join 2,400+ creatives on the waitlist. Founding members get 30% off.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #2D2A24 0%, #4A453B 100%)' }}>
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square rounded-xl flex items-center justify-center" style={{ background: 'rgba(212, 165, 116, 0.2)' }}>
                        <span className="text-4xl opacity-60">{['🎨', '✨', '🖨️', '🤝'][i - 1]}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#D4A574' }}>
                      <span>👋</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-amber-100">Sarah is available</div>
                      <div className="text-xs text-amber-200/60">Brand Design Expert · NYC SoHo</div>
                    </div>
                    <button className="ml-auto px-3 py-1.5 rounded-lg text-xs font-medium" style={{ background: '#D4A574', color: '#2D2A24' }}>
                      Book
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl shadow-lg p-4 flex flex-col justify-center" style={{ background: 'white', border: '1px solid #E8E0D5' }}>
                <div className="text-3xl font-bold" style={{ color: '#2D2A24', fontFamily: 'Georgia, serif' }}>85%</div>
                <div className="text-xs" style={{ color: '#8B7355' }}>say their work improved dramatically</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-6" style={{ background: '#2D2A24' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-4" style={{ color: '#FAF7F2', fontFamily: 'Georgia, serif', fontWeight: 700 }}>
            How Spark Collective Works
          </h2>
          <p className="text-center text-lg mb-16" style={{ color: '#A99B8A' }}>
            Three ways to create, one community to belong to.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: '🛋️', title: 'Drop In & Create', desc: 'Use our space, tools, and AI subscriptions. Work at your own pace with guidance available when you need it.', features: ['All major AI tools included', 'Professional printers & finishing', 'Flexible hours, no appointment needed'] },
              { icon: '🎯', title: 'Book an Expert', desc: 'Schedule time with a specialist who can take your work from good to exceptional. One-on-one or small groups.', features: ['Brand designers & art directors', 'Print & production specialists', 'Video, 3D, and more'] },
              { icon: '🎪', title: 'Join an Event', desc: 'Themed workshops, social creation nights, and skill-building sessions. Learn together, create together.', features: ['AI Portrait Nights', 'Brand Yourself Workshops', 'Senior Tech Socials'] },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: 'rgba(212, 165, 116, 0.1)', border: '1px solid rgba(212, 165, 116, 0.2)' }}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#D4A574', fontFamily: 'Georgia, serif' }}>{item.title}</h3>
                <p className="mb-4" style={{ color: '#A99B8A' }}>{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: '#FAF7F2' }}>
                      <span style={{ color: '#D4A574' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem / Solution */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl mb-6" style={{ color: '#2D2A24', fontFamily: 'Georgia, serif', fontWeight: 700 }}>
                AI tools got you 80% there.<br />
                <span style={{ color: '#8B7355' }}>We help you nail the other 20%.</span>
              </h2>
              <div className="space-y-4">
                {[
                  { before: 'Midjourney output that\'s almost perfect', after: 'Print-ready, professionally finished art' },
                  { before: 'ChatGPT copy that needs polish', after: 'On-brand content that converts' },
                  { before: 'A vision stuck in your head', after: 'A portfolio-worthy creation' },
                  { before: 'Creating alone at home', after: 'A community that gets it' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-1 p-3 rounded-lg text-sm" style={{ background: '#FEE2E2', color: '#991B1B', textDecoration: 'line-through', opacity: 0.7 }}>
                      {item.before}
                    </div>
                    <span style={{ color: '#D4A574' }}>→</span>
                    <div className="flex-1 p-3 rounded-lg text-sm font-medium" style={{ background: '#DCFCE7', color: '#166534' }}>
                      {item.after}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E8E0D5 0%, #D4C4B0 100%)' }}>
                <div className="text-center">
                  <span className="text-6xl mb-4 block">🎬</span>
                  <span className="text-sm font-medium" style={{ color: '#5C4A32' }}>Video: See a creation session</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ background: '#FEF3E2' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-12" style={{ color: '#2D2A24', fontFamily: 'Georgia, serif', fontWeight: 700 }}>
            What our members say
          </h2>
          <div className="relative h-48">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-500"
                style={{ opacity: activeTestimonial === i ? 1 : 0, transform: activeTestimonial === i ? 'translateY(0)' : 'translateY(20px)' }}
              >
                <p className="text-2xl mb-6 leading-relaxed" style={{ color: '#2D2A24', fontFamily: 'Georgia, serif' }}>
                  "{t.text}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl">{t.avatar}</span>
                  <div className="text-left">
                    <div className="font-semibold" style={{ color: '#2D2A24' }}>{t.name}</div>
                    <div className="text-sm" style={{ color: '#8B7355' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{ background: activeTestimonial === i ? '#8B7355' : '#D4C4B0' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #2D2A24 0%, #4A453B 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4" style={{ color: '#FAF7F2', fontFamily: 'Georgia, serif', fontWeight: 700 }}>
              Every membership funds creativity worldwide
            </h2>
            <p className="text-lg" style={{ color: '#A99B8A' }}>
              When you join Spark Collective, you help fund free studios in underserved communities.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6 mb-12">
            {impactStats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-xl" style={{ background: 'rgba(212, 165, 116, 0.15)' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#D4A574', fontFamily: 'Georgia, serif' }}>{stat.number}</div>
                <div className="text-sm" style={{ color: '#FAF7F2' }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212, 165, 116, 0.2)' }}>
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl mb-3" style={{ color: '#FAF7F2', fontFamily: 'Georgia, serif', fontWeight: 700 }}>
                  A 73-year-old retiree in NYC and a teenager in Mumbai, collaborating on the same project.
                </h3>
                <p className="mb-4" style={{ color: '#A99B8A' }}>
                  That's not a hypothetical. It's happening now. Our platform connects members across all studios—
                  flagship and community—creating unexpected collaborations and shared learning.
                </p>
                <button className="px-6 py-3 rounded-xl font-medium" style={{ background: '#D4A574', color: '#2D2A24' }}>
                  See Our Impact Report →
                </button>
              </div>
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl" style={{ background: 'rgba(212, 165, 116, 0.2)' }}>👴</div>
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl" style={{ background: 'rgba(107, 142, 107, 0.3)' }}>👦</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-4" style={{ color: '#2D2A24', fontFamily: 'Georgia, serif', fontWeight: 700 }}>
            Simple, transparent pricing
          </h2>
          <p className="text-center text-lg mb-12" style={{ color: '#8B7355' }}>
            Choose the level that fits your creative needs.
          </p>
          <div className="grid grid-cols-4 gap-6">
            {[
              { name: 'Digital', price: '$50', period: '/month', features: ['Platform access', 'Online community', 'Learning library', '2 studio visits/mo'], cta: 'Join Digital', highlight: false },
              { name: 'Lean', price: '$100', period: '/month', features: ['Everything in Digital', 'Unlimited studio visits', 'Equipment access', 'Group workshops'], cta: 'Join Lean', highlight: false },
              { name: 'Premium', price: '$250', period: '/month', features: ['Everything in Lean', 'Sell on marketplace', '1 private session/mo', 'Priority booking'], cta: 'Join Premium', highlight: true },
              { name: 'Pro Studio', price: '$500', period: '/month', features: ['Everything in Premium', 'Dedicated workspace', 'Client meeting room', 'Featured profile'], cta: 'Join Pro', highlight: false },
            ].map((tier, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl relative"
                style={{
                  background: tier.highlight ? 'linear-gradient(135deg, #2D2A24 0%, #4A453B 100%)' : '#FAF7F2',
                  border: tier.highlight ? 'none' : '1px solid #E8E0D5',
                  transform: tier.highlight ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium" style={{ background: '#D4A574', color: '#2D2A24' }}>
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2" style={{ color: tier.highlight ? '#FAF7F2' : '#2D2A24', fontFamily: 'Georgia, serif' }}>
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold" style={{ color: tier.highlight ? '#D4A574' : '#2D2A24', fontFamily: 'Georgia, serif' }}>{tier.price}</span>
                  <span className="text-sm" style={{ color: tier.highlight ? '#A99B8A' : '#8B7355' }}>{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: tier.highlight ? '#FAF7F2' : '#5C4A32' }}>
                      <span style={{ color: '#D4A574' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-xl font-medium transition-all hover:opacity-90"
                  style={{
                    background: tier.highlight ? '#D4A574' : '#2D2A24',
                    color: tier.highlight ? '#2D2A24' : '#FAF7F2',
                  }}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm" style={{ color: '#A99B8A' }}>
            All memberships include access to our global community. Day passes available for $35.
          </p>
        </div>
      </section>

      {/* Studios Map */}
      <section id="studios" className="py-20 px-6" style={{ background: '#FEF3E2' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-4" style={{ color: '#2D2A24', fontFamily: 'Georgia, serif', fontWeight: 700 }}>
            A global network of studios
          </h2>
          <p className="text-center text-lg mb-12" style={{ color: '#8B7355' }}>
            Flagship studios in creative hubs. Community studios funded by members.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: 'NYC SoHo', type: 'Flagship', status: 'Opening Spring 2025', icon: '🗽' },
              { name: 'SF Mission', type: 'Flagship', status: 'Coming 2025', icon: '🌉' },
              { name: 'Miami Wynwood', type: 'Flagship', status: 'Coming 2025', icon: '🌴' },
              { name: 'Tel Aviv', type: 'Community', status: 'Coming 2025', icon: '🇮🇱' },
              { name: 'Mumbai', type: 'Community', status: 'Coming 2026', icon: '🇮🇳' },
              { name: 'Maputo', type: 'Community', status: 'Coming 2026', icon: '🇲🇿' },
            ].map((studio, i) => (
              <div key={i} className="p-5 rounded-xl flex items-center gap-4" style={{ background: 'white', border: '1px solid #E8E0D5' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl" style={{ background: studio.type === 'Flagship' ? '#FEF3E2' : '#E8F5E8' }}>
                  {studio.icon}
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: '#2D2A24' }}>{studio.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: studio.type === 'Flagship' ? '#FEF3E2' : '#E8F5E8', color: studio.type === 'Flagship' ? '#8B7355' : '#166534' }}>
                      {studio.type}
                    </span>
                    <span className="text-xs" style={{ color: '#A99B8A' }}>{studio.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #2D2A24 0%, #4A453B 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl mb-6" style={{ color: '#FAF7F2', fontFamily: 'Georgia, serif', fontWeight: 700 }}>
            Ready to create something extraordinary?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#A99B8A' }}>
            Join the waitlist for early access. Founding members get 30% off their first year.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            {!submitted ? (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 rounded-xl text-base"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(212, 165, 116, 0.3)', color: '#FAF7F2' }}
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105"
                  style={{ background: '#D4A574', color: '#2D2A24' }}
                >
                  Join Waitlist
                </button>
              </>
            ) : (
              <div className="flex-1 px-5 py-3.5 rounded-xl text-base font-medium text-center" style={{ background: 'rgba(212, 165, 116, 0.2)', color: '#D4A574' }}>
                ✓ You're on the list!
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ background: '#2D2A24', borderTop: '1px solid #4A453B' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #D4A574 0%, #8B7355 100%)' }}>
                <span className="text-white text-lg">✦</span>
              </div>
              <span className="text-lg font-bold" style={{ color: '#FAF7F2', fontFamily: 'Georgia, serif' }}>
                Spark Collective
              </span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#A99B8A' }}>About</a>
              <a href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#A99B8A' }}>Careers</a>
              <a href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#A99B8A' }}>Press</a>
              <a href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#A99B8A' }}>Contact</a>
            </div>
            <div className="text-sm" style={{ color: '#5C4A32' }}>
              © 2025 Spark Collective. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SparkCollectiveLanding;
