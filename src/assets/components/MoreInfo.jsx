import React from 'react';
import Navbar from './Navbar';

const sections = [

  {
    title: "Techniques and Practices",
    content: "By recognizing our emotions in our daily lives, we become neutral and by deprogramming our subconscious mind followed by reprogramming our mindset to manifest the reality which is beneficial to us. These Redikal Techniques have helped many people to understand their role and become their best versions.",
    img: "https://example.com/image4.jpg"
  },
  {
    title: "Personal Growth",
    content: "Life is rising beyond our unhealthy emotions, beliefs, conditionings, associations, perceptions, expectations, and patterns and being liberated from our own inhibitions and limitations. Becoming the synchronized contributor and receiver helps one to become the channel of the creator and hence attract love, peace, prosperity in our universe and grow in an easy, effortless, and joyful manner and evolve and expand our wings beyond our imagination.",
    img: "https://example.com/image5.jpg"
  },
  {
    title: "Inner Strength and Willpower",
    content: "By igniting our inner core strength, willpower, and focus we move forward in our lives. We are also dedicated to proactively and independently discovering our brilliance and moving ahead with inner inspiration and motivation.",
    img: "https://example.com/image6.jpg"
  },
  {
    title: "Embracing Imperfection",
    content: "In a world that often celebrates perfection, grace reminds us of the beauty found in imperfection. It is the gentle acceptance of our flaws, mistakes, and vulnerabilities. When we extend grace to ourselves and others, we cultivate compassion, forgiveness, and understanding. Through grace, we learn to release the burden of self-judgment and embrace our humanity with open arms. It is in this space of grace that healing begins, allowing us to move forward with kindness and resilience.",
    img: "https://example.com/image7.jpg"
  },
  {
    title: "Oneness and Unity",
    content: "At the heart of emotional wellness lies the profound realization of oneness — the understanding that we are interconnected with all of creation. This sacred unity transcends the boundaries of ego and separation, inviting us to recognize the divinity within ourselves and others. In moments of stillness and presence, we glimpse the interconnected web of existence, where every being is a unique expression of the same universal consciousness. Through practices such as meditation, mindfulness, and acts of compassion, we deepen our connection to the oneness that binds us all.",
    img: "https://example.com/image8.jpg"
  },
  {
    title: "Invitation to Journey",
    content: "At SukhMoney, we invite you to embark on a journey of self-discovery and transformation. Through the principles of grace, duality, and oneness, may you find solace in the midst of chaos, strength in times of adversity, and joy in the beauty of the present moment. Together, let us embrace the fullness of life and awaken to the boundless potential that resides within each of us.",
    img: "https://example.com/image9.jpg"
  },
  {
    title: "Inner Tranquility",
    content: "It is believed to bring inner tranquility and dispel worries. Mind chatter can be distracting, pulling our attention away from the present moment and inhibiting our ability to connect with our deeper selves or the divine. It often consists of worries, anxieties, judgments, and other ego-driven thoughts that reinforce our sense of separateness and dissatisfaction.",
    img: "https://example.com/image10.jpg"
  },
  {
    title: "Opportunity for Growth",
    content: "However, through spiritual practices such as meditation, mindfulness, and self-inquiry, we can learn to observe and disidentify from the mind chatter. Instead of being caught up in our thoughts, we can develop a witnessing awareness that allows us to see them as passing phenomena rather than absolute truths.",
    img: "https://example.com/image11.jpg"
  },
  {
    title: "Transformation",
    content: "As we cultivate this awareness, our relationship with mind chatter begins to shift. We realize that we are not our thoughts; we are the consciousness that observes them. This realization is a profound aspect of spiritual transformation, as it frees us from the grip of the ego and opens us to higher states of consciousness.",
    img: "https://example.com/image12.jpg"
  },
  {
    title: "Integration",
    content: "Spiritual transformation involves integrating this awareness into our daily lives. Instead of being overwhelmed by mind chatter, we can choose how to respond to it with wisdom and compassion. We can also use practices like affirmations, mantras, or visualization to redirect our thoughts towards positivity and alignment with our spiritual goals.",
    img: "https://example.com/image13.jpg"
  },
  {
    title: "Surrender and Trust",
    content: "Ultimately, spiritual transformation invites us to surrender our attachment to mind chatter and trust in a higher intelligence or divine guidance. By letting go of the need to control or analyze every thought, we create space for intuition, inspiration, and the unfolding of our true selves.",
    img: "https://example.com/image14.jpg"
  },
  {
    title: "Abundance and Prosperity",
    content: "Abundance and prosperity are expressions of the divine. This involves transcending scarcity mentality and limiting beliefs about money and embracing a mindset of abundance, gratitude, and trust in the universe's infinite provision. From this perspective, money becomes a reflection of one's inner state of being and a tool for spiritual evolution and self-realization.",
    img: "https://example.com/image15.jpg"
  },
  {
    title: "Divine Form of Money",
    content: "The concept of the divine form of money invites individuals to reevaluate their relationship with wealth, recognizing its potential as a force for good, transformation, and spiritual awakening in both personal and collective contexts. It encourages a holistic approach to finance that integrates spiritual values, ethical considerations, and a deep sense of interconnectedness with all of creation.",
    img: "https://example.com/image16.jpg"
  },
  {
    title: "Finding Inner Peace",
    content: "Inner peace is the calm amidst the storm, a sanctuary of tranquility that resides within each of us. It is not the absence of challenges or difficulties but the ability to remain centered and grounded regardless of external circumstances. Through practices such as meditation, mindfulness, and self-reflection, we cultivate inner peace, nurturing a deep sense of harmony and balance.",
    img: "https://example.com/image17.jpg"
  },
  {
    title: "Embracing Change",
    content: "Change is a constant in life, offering opportunities for growth, transformation, and renewal. Embracing change requires flexibility, adaptability, and openness to new possibilities. By releasing resistance and embracing the flow of life, we can navigate change with grace and resilience, discovering hidden strengths and evolving into our highest selves.",
    img: "https://example.com/image18.jpg"
  },
  {
    title: "Manifesting Dreams",
    content: "Manifesting dreams involves aligning our thoughts, beliefs, and actions with our deepest desires and intentions. Through visualization, affirmations, and inspired action, we can create a vibrational match between our inner world and outer reality, manifesting our dreams into tangible experiences. Trusting in the universal law of attraction, we co-create our reality and attract abundance, joy, and fulfillment.",
    img: "https://example.com/image19.jpg"
  },
  {
    title: "Cultivating Gratitude",
    content: "Gratitude is a transformative practice that shifts our focus from scarcity to abundance, from complaint to appreciation. By acknowledging and appreciating the blessings in our lives, we create a positive momentum that attracts more blessings and enhances our overall well-being. Cultivating gratitude opens our hearts to the beauty of life and fosters a deeper connection with ourselves, others, and the universe.",
    img: "https://example.com/image20.jpg"
  },
];

const Section = ({ title, content, img, reverse }) => (
  <div className={`flex justify-between items-center my-8 ${reverse ? 'flex-row-reverse' : ''}`}>
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p>{content}</p>
    </div>
    <div className="w-full md:w-1/2 p-4">
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>
  </div>
);


const MoreInfo = () => {
  return (
    <div>
      {/* <Navbar />
      {sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          <img src={section.img} alt={section.title} />
        </div>
      ))} */}
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
    </div>
  );
};

export default MoreInfo;
