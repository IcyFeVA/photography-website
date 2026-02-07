import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import { Link } from 'react-router-dom';

interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

const headshotPackages: PricingPackage[] = [
  {
    name: "One Look (Headshot)",
    price: "$350",
    description: "A great place to start for actors, artists or professionals looking to update their look or business profile.",
    features: [
      "Shoot in one+ outfit",
      "One meticulously retouched headshot edit",
      "Entire set of images at 75 dpi included"
    ]
  },
  {
    name: "Two Looks (Headshots)",
    price: "$400",
    description: "Perfect for professionals updating company websites & LinkedIn, or actors showcasing theatrical and commercial sides.",
    features: [
      "Shoot in two+ outfits",
      "Two meticulously retouched headshot edits",
      "Entire set of images at 75 dpi included"
    ],
    highlight: true
  },
  {
    name: "Portfolio - Four Looks",
    price: "$650",
    description: "Great for actors to showcase range or for professionals to use on different platforms.",
    features: [
      "Shoot in four+ outfit choices",
      "Four meticulously retouched headshot edits",
      "Entire set of images at 75 dpi included"
    ]
  }
];

const portraitPackages: PricingPackage[] = [
  {
    name: "LinkedIn Portrait",
    price: "$200",
    description: "A streamlined session designed specifically for your professional online presence.",
    features: [
      "30-minute studio/outdoor session",
      "One outfit",
      "One retouched image",
      "Same-day selection available"
    ]
  },
  {
    name: "Corporate Team",
    price: "$295 / person",
    description: "Consistent, high-quality headshots for your entire team. We bring the studio to you.",
    features: [
      "Minimum 3 team members",
      "Efficient 5-10 min per person",
      "One retouched image per person",
    ]
  },
  {
    name: "Family Portrait",
    price: "$450",
    description: "Timeless portraits capturing the connection of your loved ones.",
    features: [
      "90-minute customized session",
      "Up to 5 family members",
      "One location",
      "5 high-resolution edited images"
    ]
  },
  // {
  //   name: "Modelling Digitals",
  //   price: "$275",
  //   description: "Shot at our beautiful natural light studio at the Heritage Dominion building.",
  //   features: [
  //     "Shoot in one outfit",
  //     "Collection of 4+ digitals with basic editing",
  //     "Additional basic edits for $25 each",
  //     "Entire set of images at 75 dpi included"
  //   ]
  // },
  // {
  //   name: "Test Shoots / Mini Creatives",
  //   price: "$600",
  //   description: "Includes an hour of studio time at the Heritage Dominion building.",
  //   features: [
  //     "Shoot in two+ outfits",
  //     "Four retouched images included",
  //     "Add wardrobe changes (+2 edits) for $200",
  //     "Entire set of images at 75 dpi included"
  //   ]
  // }
];

const Pricing: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center">
      <SEO
        title="Photography Packages & Pricing | Vancouver Headshots"
        description="Transparent pricing for professional headshots and portrait sessions in Vancouver. Custom packages available for corporate teams."
        canonical="/pricing"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="font-serif text-4xl md:text-6xl text-text mb-6">
          Pricing
        </h1>
        <div className="h-px w-24 bg-white/20 mx-auto mb-8"></div>
        <p className="text-lg text-muted font-light leading-relaxed max-w-2xl mx-auto">
          We offer bespoke packages tailored to the specific needs of our clients.
          Transparent pricing with no hidden fees.
        </p>
      </motion.div>

      {/* Headshots Section */}
      <h2 className="font-serif text-3xl mb-8 text-center">Headshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
        {headshotPackages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative p-8 border ${pkg.highlight ? 'border-primary/50 bg-white/5' : 'border-white/10 bg-surface'} flex flex-col rounded-sm hover:border-white/20 transition-colors duration-300`}
          >
            {pkg.highlight && (
              <div className="absolute top-0 right-0 bg-primary/20 text-primary text-xs uppercase tracking-widest py-1 px-3 rounded-bl-sm">
                Most Popular
              </div>
            )}
            <h3 className="font-serif text-2xl mb-2">{pkg.name}</h3>
            <div className="text-3xl font-light mb-6 text-primary">{pkg.price}</div>
            <p className="text-muted text-sm mb-8 flex-grow leading-relaxed">
              {pkg.description}
            </p>
            <ul className="space-y-4 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-gray-300">
                  <span className="mr-3 text-primary">⏤</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Portraits Section */}
      <h2 className="font-serif text-3xl mb-8 text-center">Portraits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-20">
        {portraitPackages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative p-8 border ${pkg.highlight ? 'border-primary/50 bg-white/5' : 'border-white/10 bg-surface'} flex flex-col rounded-sm hover:border-white/20 transition-colors duration-300`}
          >
            {pkg.highlight && (
              <div className="absolute top-0 right-0 bg-primary/20 text-primary text-xs uppercase tracking-widest py-1 px-3 rounded-bl-sm">
                Most Popular
              </div>
            )}
            <h3 className="font-serif text-2xl mb-2">{pkg.name}</h3>
            <div className="text-3xl font-light mb-6 text-primary">{pkg.price}</div>
            <p className="text-muted text-sm mb-8 flex-grow leading-relaxed">
              {pkg.description}
            </p>
            <ul className="space-y-4 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-gray-300">
                  <span className="mr-3 text-primary">⏤</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl border-t border-white/10 pt-16"
      >
        <div>
          <h3 className="font-serif text-2xl mb-6">Additional Services</h3>
          <ul className="space-y-6">
            <li className="flex justify-between items-start border-b border-white/5 pb-4">
              <div>
                <span className="block font-medium mb-1">Actor Slates & Self Tapes</span>
                <span className="text-sm text-muted">First 30 mins / Additional 30 mins</span>
              </div>
              <span className="text-primary whitespace-nowrap">$100 / $50</span>
            </li>
            {/* <li className="flex justify-between items-start border-b border-white/5 pb-4">
              <div>
                <span className="block font-medium mb-1">Make-up & Hair</span>
                <span className="text-sm text-muted">Certified artists available upon request</span>
              </div>
              <span className="text-primary italic">Inquire</span>
            </li> */}
            <li className="flex justify-between items-start border-b border-white/5 pb-4">
              <div>
                <span className="block font-medium mb-1">Expedited Processing</span>
                <span className="text-sm text-muted">24hr turnaround per image</span>
              </div>
              <span className="text-primary">$50</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-2xl mb-6">Booking Information</h3>
          <div className="bg-white/5 p-6 rounded-sm border border-white/10">
            <p className="text-muted text-sm leading-relaxed mb-4">
              To ensure a booking we require a <span className="text-white font-medium">$100 deposit</span>.
            </p>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Please include a general idea of your session requirements:
            </p>
            <ul className="list-disc list-inside text-muted text-sm space-y-2 ml-2">
              <li>Your preferred package (see Pricing page)</li>
              {/* <li>If Skin Care & Makeup Artist is required</li> */}
              <li>Number of wardrobe choices</li>
            </ul>
            <Link to="/inquire" className="inline-block mt-6 text-primary hover:text-white transition-colors uppercase tracking-widest text-xs border-b border-primary hover:border-white pb-1">
              Book Now via Contact Form
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;