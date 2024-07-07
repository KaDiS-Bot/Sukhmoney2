// // // // import React, { useState } from 'react';
// // // // import Navbar from './Navbar';

// // // // const sections = [
// // // //   {
// // // //     title: "Introduction",
// // // //     content: "At SukhMoney Healing, we believe in embracing the full spectrum of human experience to foster emotional wellness. Our journey is guided by the principles of grace, duality, and oneness, inviting you to explore the depths of your being and find harmony within yourself and the world around you.",
// // // //     img: "https://thumbs.dreamstime.com/b/man-silhouette-healing-energy-sitting-yoga-pose-abstract-colorful-rays-light-universe-concept-reiki-chakras-mystical-206834479.jpg" // Replace with actual image URL
// // // //   },
// // // //   {
// // // //     title: "About SukhMoney",
// // // //     content: "SukhMoney is a journey which guides one to live life full of enthusiasm, celebrate each present moment, and awaken one's true potential, manifesting happiness and prosperity along its way. SukhMoney helps to recognize oneself, become fearless, and courageously take the best decisions.",
// // // //     img: "https://example.com/image2.jpg"
// // // //   },
// // // //   {
// // // //     title: "Inspiration",
// // // //     content: "Our inspiration is from the teachings of Guru Nanak Dev Ji who gave the holiest Ekonkar meaning Oneness. In order to know the truth beyond the truth by understanding the dualities of this realm, we gain insight from Guru Ji's sacred teachings. We also gain guidance from Aatmn Parmar, a spiritual guide who helps us understand that our thoughts co-create our perceived realities.",
// // // //     img: "https://example.com/image3.jpg"
// // // //   },
// // // //   {
// // // //     title: "Techniques and Practices",
// // // //     content: "By recognizing our emotions in our daily lives, we become neutral and by deprogramming our subconscious mind followed by reprogramming our mindset to manifest the reality which is beneficial to us. These Redikal Techniques have helped many people to understand their role and become their best versions.",
// // // //     img: "https://example.com/image4.jpg"
// // // //   },
// // // //   {
// // // //     title: "Personal Growth",
// // // //     content: "Life is rising beyond our unhealthy emotions, beliefs, conditionings, associations, perceptions, expectations, and patterns and being liberated from our own inhibitions and limitations. Becoming the synchronized contributor and receiver helps one to become the channel of the creator and hence attract love, peace, prosperity in our universe and grow in an easy, effortless, and joyful manner and evolve and expand our wings beyond our imagination.",
// // // //     img: "https://example.com/image5.jpg"
// // // //   },
// // // //   {
// // // //     title: "Inner Strength and Willpower",
// // // //     content: "By igniting our inner core strength, willpower, and focus we move forward in our lives. We are also dedicated to proactively and independently discovering our brilliance and moving ahead with inner inspiration and motivation.",
// // // //     img: "https://example.com/image6.jpg"
// // // //   },
// // // //   {
// // // //     title: "Embracing Imperfection",
// // // //     content: "In a world that often celebrates perfection, grace reminds us of the beauty found in imperfection. It is the gentle acceptance of our flaws, mistakes, and vulnerabilities. When we extend grace to ourselves and others, we cultivate compassion, forgiveness, and understanding. Through grace, we learn to release the burden of self-judgment and embrace our humanity with open arms. It is in this space of grace that healing begins, allowing us to move forward with kindness and resilience.",
// // // //     img: "https://example.com/image7.jpg"
// // // //   },
// // // //   {
// // // //     title: "Oneness and Unity",
// // // //     content: "At the heart of emotional wellness lies the profound realization of oneness — the understanding that we are interconnected with all of creation. This sacred unity transcends the boundaries of ego and separation, inviting us to recognize the divinity within ourselves and others. In moments of stillness and presence, we glimpse the interconnected web of existence, where every being is a unique expression of the same universal consciousness. Through practices such as meditation, mindfulness, and acts of compassion, we deepen our connection to the oneness that binds us all.",
// // // //     img: "https://example.com/image8.jpg"
// // // //   },
// // // //   {
// // // //     title: "Invitation to Journey",
// // // //     content: "At SukhMoney, we invite you to embark on a journey of self-discovery and transformation. Through the principles of grace, duality, and oneness, may you find solace in the midst of chaos, strength in times of adversity, and joy in the beauty of the present moment. Together, let us embrace the fullness of life and awaken to the boundless potential that resides within each of us.",
// // // //     img: "https://example.com/image9.jpg"
// // // //   },
// // // //   {
// // // //     title: "Inner Tranquility",
// // // //     content: "It is believed to bring inner tranquility and dispel worries. Mind chatter can be distracting, pulling our attention away from the present moment and inhibiting our ability to connect with our deeper selves or the divine. It often consists of worries, anxieties, judgments, and other ego-driven thoughts that reinforce our sense of separateness and dissatisfaction.",
// // // //     img: "https://example.com/image10.jpg"
// // // //   },
// // // //   {
// // // //     title: "Opportunity for Growth",
// // // //     content: "However, through spiritual practices such as meditation, mindfulness, and self-inquiry, we can learn to observe and disidentify from the mind chatter. Instead of being caught up in our thoughts, we can develop a witnessing awareness that allows us to see them as passing phenomena rather than absolute truths.",
// // // //     img: "https://example.com/image11.jpg"
// // // //   },
// // // //   {
// // // //     title: "Transformation",
// // // //     content: "As we cultivate this awareness, our relationship with mind chatter begins to shift. We realize that we are not our thoughts; we are the consciousness that observes them. This realization is a profound aspect of spiritual transformation, as it frees us from the grip of the ego and opens us to higher states of consciousness.",
// // // //     img: "https://example.com/image12.jpg"
// // // //   },
// // // //   {
// // // //     title: "Integration",
// // // //     content: "Spiritual transformation involves integrating this awareness into our daily lives. Instead of being overwhelmed by mind chatter, we can choose how to respond to it with wisdom and compassion. We can also use practices like affirmations, mantras, or visualization to redirect our thoughts towards positivity and alignment with our spiritual goals.",
// // // //     img: "https://example.com/image13.jpg"
// // // //   },
// // // //   {
// // // //     title: "Surrender and Trust",
// // // //     content: "Ultimately, spiritual transformation invites us to surrender our attachment to mind chatter and trust in a higher intelligence or divine guidance. By letting go of the need to control or analyze every thought, we create space for intuition, inspiration, and the unfolding of our true selves.",
// // // //     img: "https://example.com/image14.jpg"
// // // //   },
// // // //   {
// // // //     title: "Abundance and Prosperity",
// // // //     content: "Abundance and prosperity are expressions of the divine. This involves transcending scarcity mentality and limiting beliefs about money and embracing a mindset of abundance, gratitude, and trust in the universe's infinite provision. From this perspective, money becomes a reflection of one's inner state of being and a tool for spiritual evolution and self-realization.",
// // // //     img: "https://example.com/image15.jpg"
// // // //   },
// // // //   {
// // // //     title: "Divine Form of Money",
// // // //     content: "The concept of the divine form of money invites individuals to reevaluate their relationship with wealth, recognizing its potential as a force for good, transformation, and spiritual awakening in both personal and collective contexts. It encourages a holistic approach to finance that integrates spiritual values, ethical considerations, and a deep sense of interconnectedness with all of creation.",
// // // //     img: "https://example.com/image16.jpg"
// // // //   }
// // // // ];

// // // // const Section = ({ title, content, img }) => {
// // // //   const [expanded, setExpanded] = useState(false);

// // // //   const toggleExpand = () => {
// // // //     setExpanded(!expanded);
// // // //   };

// // // //   return (
// // // //     <div className="flex justify-between items-center my-8">
// // // //       <div className={`w-full md:w ${expanded ? '' : 'truncate'}`}>
// // // //         <div className="flex flex-col md:flex-row">
// // // //           <div className="w-full md:w-1/2">
// // // //             <h2 className="text-2xl font-bold mb-4">{title}</h2>
// // // //             <p>{expanded ? content : `${content.substring(0, 300)}...`}</p>
// // // //             {!expanded && <button onClick={toggleExpand} className="text-blue-500 mt-2">Click to elaborate</button>}
// // // //           </div>
// // // //           <div className="w-full md:w-1/2 md:pl-4">
// // // //             <img src={img} alt={title} className="w-400 h-400" />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // function Home() {
// // // //   return (
// // // //     <>
// // // //       <Navbar />
// // // //       <div className="container mx-auto px-4">
// // // //         {sections.map((section, index) => (
// // // //           <Section
// // // //             key={index}
// // // //             title={section.title}
// // // //             content={section.content}
// // // //             img={section.img}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // // export default Home;



// // // import React from 'react';
// // // import Navbar from './Navbar';

// // // const sections = [
// // //   {
// // //     title: "Introduction",
// // //     content: "At SukhMoney Healing, we believe in embracing the full spectrum of human experience to foster emotional wellness. Our journey is guided by the principles of grace, duality, and oneness, inviting you to explore the depths of your being and find harmony within yourself and the world around you.",
// // //     img: "https://thumbs.dreamstime.com/b/man-silhouette-healing-energy-sitting-yoga-pose-abstract-colorful-rays-light-universe-concept-reiki-chakras-mystical-206834479.jpg" // Replace with actual image URL
// // //   },
// // //   {
// // //     title: "About SukhMoney",
// // //     content: "SukhMoney is a journey which guides one to live life full of enthusiasm, celebrate each present moment, and awaken one's true potential, manifesting happiness and prosperity along its way. SukhMoney helps to recognize oneself, become fearless, and courageously take the best decisions.",
// // //     img: "https://example.com/image2.jpg"
// // //   },
// // //   {
// // //     title: "Inspiration",
// // //     content: "Our inspiration is from the teachings of Guru Nanak Dev Ji who gave the holiest Ekonkar meaning Oneness. In order to know the truth beyond the truth by understanding the dualities of this realm, we gain insight from Guru Ji's sacred teachings. We also gain guidance from Aatmn Parmar, a spiritual guide who helps us understand that our thoughts co-create our perceived realities.",
// // //     img: "https://example.com/image3.jpg"
// // //   },
// // //   {
// // //     title: "Techniques and Practices",
// // //     content: "By recognizing our emotions in our daily lives, we become neutral and by deprogramming our subconscious mind followed by reprogramming our mindset to manifest the reality which is beneficial to us. These Redikal Techniques have helped many people to understand their role and become their best versions.",
// // //     img: "https://example.com/image4.jpg"
// // //   },
// // //   {
// // //     title: "Personal Growth",
// // //     content: "Life is rising beyond our unhealthy emotions, beliefs, conditionings, associations, perceptions, expectations, and patterns and being liberated from our own inhibitions and limitations. Becoming the synchronized contributor and receiver helps one to become the channel of the creator and hence attract love, peace, prosperity in our universe and grow in an easy, effortless, and joyful manner and evolve and expand our wings beyond our imagination.",
// // //     img: "https://example.com/image5.jpg"
// // //   },
// // //   {
// // //     title: "Inner Strength and Willpower",
// // //     content: "By igniting our inner core strength, willpower, and focus we move forward in our lives. We are also dedicated to proactively and independently discovering our brilliance and moving ahead with inner inspiration and motivation.",
// // //     img: "https://example.com/image6.jpg"
// // //   },
// // //   {
// // //     title: "Embracing Imperfection",
// // //     content: "In a world that often celebrates perfection, grace reminds us of the beauty found in imperfection. It is the gentle acceptance of our flaws, mistakes, and vulnerabilities. When we extend grace to ourselves and others, we cultivate compassion, forgiveness, and understanding. Through grace, we learn to release the burden of self-judgment and embrace our humanity with open arms. It is in this space of grace that healing begins, allowing us to move forward with kindness and resilience.",
// // //     img: "https://example.com/image7.jpg"
// // //   },
// // //   {
// // //     title: "Oneness and Unity",
// // //     content: "At the heart of emotional wellness lies the profound realization of oneness — the understanding that we are interconnected with all of creation. This sacred unity transcends the boundaries of ego and separation, inviting us to recognize the divinity within ourselves and others. In moments of stillness and presence, we glimpse the interconnected web of existence, where every being is a unique expression of the same universal consciousness. Through practices such as meditation, mindfulness, and acts of compassion, we deepen our connection to the oneness that binds us all.",
// // //     img: "https://example.com/image8.jpg"
// // //   },
// // //   {
// // //     title: "Invitation to Journey",
// // //     content: "At SukhMoney, we invite you to embark on a journey of self-discovery and transformation. Through the principles of grace, duality, and oneness, may you find solace in the midst of chaos, strength in times of adversity, and joy in the beauty of the present moment. Together, let us embrace the fullness of life and awaken to the boundless potential that resides within each of us.",
// // //     img: "https://example.com/image9.jpg"
// // //   },
// // //   {
// // //     title: "Inner Tranquility",
// // //     content: "It is believed to bring inner tranquility and dispel worries. Mind chatter can be distracting, pulling our attention away from the present moment and inhibiting our ability to connect with our deeper selves or the divine. It often consists of worries, anxieties, judgments, and other ego-driven thoughts that reinforce our sense of separateness and dissatisfaction.",
// // //     img: "https://example.com/image10.jpg"
// // //   },
// // //   {
// // //     title: "Opportunity for Growth",
// // //     content: "However, through spiritual practices such as meditation, mindfulness, and self-inquiry, we can learn to observe and disidentify from the mind chatter. Instead of being caught up in our thoughts, we can develop a witnessing awareness that allows us to see them as passing phenomena rather than absolute truths.",
// // //     img: "https://example.com/image11.jpg"
// // //   },
// // //   {
// // //     title: "Transformation",
// // //     content: "As we cultivate this awareness, our relationship with mind chatter begins to shift. We realize that we are not our thoughts; we are the consciousness that observes them. This realization is a profound aspect of spiritual transformation, as it frees us from the grip of the ego and opens us to higher states of consciousness.",
// // //     img: "https://example.com/image12.jpg"
// // //   },
// // //   {
// // //     title: "Integration",
// // //     content: "Spiritual transformation involves integrating this awareness into our daily lives. Instead of being overwhelmed by mind chatter, we can choose how to respond to it with wisdom and compassion. We can also use practices like affirmations, mantras, or visualization to redirect our thoughts towards positivity and alignment with our spiritual goals.",
// // //     img: "https://example.com/image13.jpg"
// // //   },
// // //   {
// // //     title: "Surrender and Trust",
// // //     content: "Ultimately, spiritual transformation invites us to surrender our attachment to mind chatter and trust in a higher intelligence or divine guidance. By letting go of the need to control or analyze every thought, we create space for intuition, inspiration, and the unfolding of our true selves.",
// // //     img: "https://example.com/image14.jpg"
// // //   },
// // //   {
// // //     title: "Abundance and Prosperity",
// // //     content: "Abundance and prosperity are expressions of the divine. This involves transcending scarcity mentality and limiting beliefs about money and embracing a mindset of abundance, gratitude, and trust in the universe's infinite provision. From this perspective, money becomes a reflection of one's inner state of being and a tool for spiritual evolution and self-realization.",
// // //     img: "https://example.com/image15.jpg"
// // //   },
// // //   {
// // //     title: "Divine Form of Money",
// // //     content: "The concept of the divine form of money invites individuals to reevaluate their relationship with wealth, recognizing its potential as a force for good, transformation, and spiritual awakening in both personal and collective contexts. It encourages a holistic approach to finance that integrates spiritual values, ethical considerations, and a deep sense of interconnectedness with all of creation.",
// // //     img: "https://example.com/image16.jpg"
// // //   }
// // // ];

// // // const Section = ({ title, content, img }) => (
// // //   <div className="flex justify-between items-center my-8">
// // //     <div className="w-full md:w">
// // //       <div className="flex flex-col md:flex-row">
// // //         <div className="w-full md:w-1/2">
// // //           <h2 className="text-2xl font-bold mb-4">{title}</h2>
// // //           <p>{content}</p>
// // //         </div>
// // //         <div className="w-full md:w-1/2 md:pl-4">
// // //           <img src={img} alt={title} className="w-400 h-400" />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </div>
// // // );

// // // function Home() {
// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <div className="container mx-auto px-4">
// // //         {sections.map((section, index) => (
// // //           <Section
// // //             key={index}
// // //             title={section.title}
// // //             content={section.content}
// // //             img={section.img}
// // //           />
// // //         ))}
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default Home;



// // import React from 'react';
// // import Navbar from './Navbar';

// // const sections = [
// //   {
// //     title: "Introduction",
// //     content: "At SukhMoney Healing, we believe in embracing the full spectrum of human experience to foster emotional wellness. Our journey is guided by the principles of grace, duality, and oneness, inviting you to explore the depths of your being and find harmony within yourself and the world around you.",
// //     img: "https://thumbs.dreamstime.com/b/man-silhouette-healing-energy-sitting-yoga-pose-abstract-colorful-rays-light-universe-concept-reiki-chakras-mystical-206834479.jpg" // Replace with actual image URL
// //   },
// //   {
// //     title: "About SukhMoney",
// //     content: "SukhMoney is a journey which guides one to live life full of enthusiasm, celebrate each present moment, and awaken one's true potential, manifesting happiness and prosperity along its way. SukhMoney helps to recognize oneself, become fearless, and courageously take the best decisions.",
// //     img: "https://themindfool.com/wp-content/uploads/2019/09/Your-Way-to-God-through-Mind-Body-Soul-and-Spirit.jpg"
// //   },
// //   {
// //     title: "Inspiration",
// //     content: "Our inspiration is from the teachings of Guru Nanak Dev Ji who gave the holiest 'Ekonkar' meaning 'Oneness'. In order to know the truth beyond the truth by understanding the dualities of this realm, we gain insight from Guru Ji's sacred teachings. We also gain guidance from Aatmn Parmar, a spiritual guide who helps us understand that our thoughts co-create our perceived realities.",
// //     img: "https://quotefancy.com/media/wallpaper/3840x2160/132353-Rumi-Quote-You-are-the-soul-of-the-soul-of-the-universe-and-your.jpg"
// //   }
// // ];

// // const Section = ({ title, content, img, reverse }) => (
// //   <div className={`flex justify-between items-center my-8 ${reverse ? 'flex-row-reverse' : ''}`}>
// //     <div className="w-full md:w-1/2 p-4">
// //       <h2 className="text-6xl font-bold mb-4">{title}</h2>
// //       <p className='text-3xl'>{content}</p>
// //     </div>
// //     <div className="w-full md:w-1/2 p-4">
// //       <img src={img} alt={title} className="w-full h-full object-cover" />
// //     </div>
// //   </div>
// // );

// // function Home() {
// //   return (
// //     <>
// //       <Navbar />
// //       <div className="container mx-auto px-4">
// //         {sections.map((section, index) => (
// //           <Section
// //             key={index}
// //             title={section.title}
// //             content={section.content}
// //             img={section.img}
// //             reverse={index % 2 !== 0}
// //           />
// //         ))}
// //       </div>
// //     </>
// //   );
// // }

// // export default Home;



// import React from 'react';
// import Navbar from './Navbar';

// const sections = [
//   {
//     title: "Introduction",
//     content: "At SukhMoney Healing, we believe in embracing the full spectrum of human experience to foster emotional wellness. Our journey is guided by the principles of grace, duality, and oneness, inviting you to explore the depths of your being and find harmony within yourself and the world around you.",
//     img: "https://thumbs.dreamstime.com/b/man-silhouette-healing-energy-sitting-yoga-pose-abstract-colorful-rays-light-universe-concept-reiki-chakras-mystical-206834479.jpg" // Replace with actual image URL
//   },
//   {
//     title: "About SukhMoney",
//     content: "SukhMoney is a journey which guides one to live life full of enthusiasm, celebrate each present moment, and awaken one's true potential, manifesting happiness and prosperity along its way. SukhMoney helps to recognize oneself, become fearless, and courageously take the best decisions.",
//     img: "https://themindfool.com/wp-content/uploads/2019/09/Your-Way-to-God-through-Mind-Body-Soul-and-Spirit.jpg"
//   },
//   {
//     title: "Inspiration",
//     content: "Our inspiration is from the teachings of Guru Nanak Dev Ji who gave the holiest 'Ekonkar' meaning 'Oneness'. In order to know the truth beyond the truth by understanding the dualities of this realm, we gain insight from Guru Ji's sacred teachings. We also gain guidance from Aatmn Parmar, a spiritual guide who helps us understand that our thoughts co-create our perceived realities.",
//     img: "https://quotefancy.com/media/wallpaper/3840x2160/132353-Rumi-Quote-You-are-the-soul-of-the-soul-of-the-universe-and-your.jpg"
//   }
// ];

// const Section = ({ title, content, img, reverse }) => (
//   <div className={`flex flex-col md:flex-row justify-between items-center my-8 ${reverse ? 'md:flex-row-reverse' : ''}`}>
//     <div className="w-full md:w-1/2 p-4">
//       <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">{title}</h2>
//       <p className="text-lg md:text-xl lg:text-3xl">{content}</p>
//     </div>
//     <div className="w-full md:w-1/2 p-4">
//       <img src={img} alt={title} className="w-full h-auto object-cover" />
//     </div>
//   </div>
// );

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4">
//         {sections.map((section, index) => (
//           <Section
//             key={index}
//             title={section.title}
//             content={section.content}
//             img={section.img}
//             reverse={index % 2 !== 0}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default Home;


import React from 'react';
import Navbar from './Navbar';

const sections = [
  {
    title: "Introduction",
    content: "At SukhMoney Healing, we believe in embracing the full spectrum of human experience to foster emotional wellness. Our journey is guided by the principles of grace, duality, and oneness, inviting you to explore the depths of your being and find harmony within yourself and the world around you.",
    img: "https://thumbs.dreamstime.com/b/man-silhouette-healing-energy-sitting-yoga-pose-abstract-colorful-rays-light-universe-concept-reiki-chakras-mystical-206834479.jpg" // Replace with actual image URL
  },
  {
    title: "About SukhMoney",
    content: "SukhMoney is a journey which guides one to live life full of enthusiasm, celebrate each present moment, and awaken one's true potential, manifesting happiness and prosperity along its way. SukhMoney helps to recognize oneself, become fearless, and courageously take the best decisions.",
    img: "https://themindfool.com/wp-content/uploads/2019/09/Your-Way-to-God-through-Mind-Body-Soul-and-Spirit.jpg"
  },
  {
    title: "Inspiration",
    content: "Our inspiration is from the teachings of Guru Nanak Dev Ji who gave the holiest 'Ekonkar' meaning 'Oneness'. In order to know the truth beyond the truth by understanding the dualities of this realm, we gain insight from Guru Ji's sacred teachings. We also gain guidance from Aatmn Parmar, a spiritual guide who helps us understand that our thoughts co-create our perceived realities.",
    img: "https://quotefancy.com/media/wallpaper/3840x2160/132353-Rumi-Quote-You-are-the-soul-of-the-soul-of-the-universe-and-your.jpg"
  }
];

const Section = ({ title, content, img, reverse }) => (
  <div className={`flex flex-col md:flex-row justify-between items-center my-8 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">{title}</h2>
      <p className="text-lg md:text-xl lg:text-3xl">{content}</p>
    </div>
    <div className="w-full md:w-1/2 p-4">
      <img src={img} alt={title} className="w-full h-auto object-cover" />
    </div>
  </div>
);

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            content={section.content}
            img={section.img}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
