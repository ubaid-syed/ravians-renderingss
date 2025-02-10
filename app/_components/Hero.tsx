import React from 'react'

function Hero() {
  return (
    <section className="bg-black">
        <div className='flex items-baseline 
        justify-center pt-20'>
        <h2 className='text-white border 
            px-3 p-2 rounded-full
        text-center border-white'>See What's New | <span className='text-sky-300'>AI Diagram</span></h2>

        </div>
  <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex  ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl text-sky-300 font-extrabold sm:text-5xl">
      Documents & diagrams
        <strong className="font-extrabold text-white sm:block"> 
        for engineering teams. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-slate-200">
      All-in-one markdown editor, collaborative canvas, and diagram-as-code builder
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-white text-black px-12 py-3 text-sm font-medium  shadow hover:bg-slate-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>

       
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero

// import React from 'react';
// import { motion } from 'framer-motion';

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// function Hello() {
//   return (
//     <section className="bg-black text-white h-screen flex items-center justify-center">
//       <motion.div
//         className="text-center"
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//       >
//         <motion.h2
//           className="text-white border px-6 py-2 rounded-full inline-block mb-8"
//           variants={fadeInUp}
//         >
//           See What's New | <span className="text-sky-300">AI Diagram</span>
//         </motion.h2>
//         <motion.h1
//           className="text-5xl font-bold mb-6"
//           variants={fadeInUp}
//         >
//           <span className="text-sky-300">Documents & Diagrams</span> <br />
//           <span className="text-white">for Engineering Teams</span>
//         </motion.h1>
//         <motion.p
//           className="text-slate-300 text-xl mb-8"
//           variants={fadeInUp}
//         >
//           All-in-one markdown editor, collaborative canvas, and diagram-as-code builder.
//         </motion.p>
//         <motion.div variants={fadeInUp}>
//           <a
//             href="#"
//             className="bg-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-600 transition-all"
//           >
//             Get Started
//           </a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// function Features() {
//   return (
//     <section className="py-20 bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4">
//         <motion.h2
//           className="text-3xl font-bold text-center mb-12 text-white"
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//         >
//           Features
//         </motion.h2>
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//         >
//           {[
//             {
//               icon: '📝',
//               title: 'Markdown Editor',
//               description: 'Write and format your documents with ease using our powerful markdown editor.',
//             },
//             {
//               icon: '🎨',
//               title: 'Collaborative Canvas',
//               description: 'Work together with your team in real-time on a shared canvas.',
//             },
//             {
//               icon: '📊',
//               title: 'Diagram-as-Code',
//               description: 'Create beautiful diagrams using simple code syntax.',
//             },
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-800 p-8 rounded-lg text-center text-white"
//               variants={fadeInUp}
//             >
//               <div className="text-4xl mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
//               <p className="text-slate-300">{feature.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function Pricing() {
//   return (
//     <section className="py-20 bg-black">
//       <div className="max-w-7xl mx-auto px-4">
//         <motion.h2
//           className="text-3xl font-bold text-center mb-12 text-white"
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//         >
//           Pricing
//         </motion.h2>
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//         >
//           {[
//             {
//               plan: 'Basic',
//               price: '$9',
//               features: ['Markdown Editor', '1 Team Member', 'Limited Storage'],
//             },
//             {
//               plan: 'Pro',
//               price: '$29',
//               features: ['Markdown Editor', '5 Team Members', 'Unlimited Storage'],
//             },
//             {
//               plan: 'Enterprise',
//               price: 'Custom',
//               features: ['Everything in Pro', 'Dedicated Support', 'Custom Integrations'],
//             },
//           ].map((pricing, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-800 p-8 rounded-lg text-center text-white"
//               variants={fadeInUp}
//             >
//               <h3 className="text-2xl font-bold mb-4">{pricing.plan}</h3>
//               <p className="text-4xl font-bold mb-6">{pricing.price}</p>
//               <ul className="text-slate-300 mb-8">
//                 {pricing.features.map((feature, i) => (
//                   <li key={i} className="mb-2">
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//               <a
//                 href="#"
//                 className="bg-sky-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-sky-600 transition-all"
//               >
//                 Choose Plan
//               </a>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <p className="text-slate-300">
//           &copy; 2023 AI Diagram. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default function Hero() {
//   return (
//     <div>
//       <Hello/>
//       <Features />
//       <Pricing />
//       <Footer />
//     </div>
//   );
// }