'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import FeatureCard from '@/components/ai_components/FeatureCard';
import FlipCard from '@/components/ai_components/FlipCard';
import WhyChooseFinbyzGrid from '@/components/ai_components/WhyChooseFinbyzGrid';
import CTA from '@/components/sections/cta';
import CircleReasonTabs from '@/components/ai_components/CircleReasonTabs';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const heroHighlightWords = ["JavaScript", "Developer", "Hire"];

const whyChooseFeatures = [
  {
    title: 'Familiarity with HTML and CSS',
    image: '/api/fb/n/files/html_css.svg',
    alt: 'HTML CSS',
    description: 'We have an in-house team of JavaScript developers who have an advanced understanding of HTML and CSS.'
  },
  {
    title: 'Knowledge of JavaScript Frameworks',
    image: '/api/fb/n/files/js%20knowledge.svg',
    alt: 'JS Knowledge',
    description: 'Familiarity with JavaScript frameworks, such as Nord, React, Angular, Express and Vue.js'
  },
  {
    title: 'Understanding of Asynchronous Programming',
    image: '/api/fb/n/files/asynchnorus.svg',
    alt: 'Asynchronous',
    description: 'We know how to use asynchronous programming concepts, such as callbacks and promises, to write efficient and scalable code.'
  },
  {
    title: 'Experience with Libraries and Tools',
    image: '/api/fb/n/files/icon%20Higher%20Productivity.svg',
    alt: 'Higher Productivity',
    description: 'We use JS libraries such as jQuery, Lodash, and Babel to enhance the functionality of their code..'
  },
  {
    title: 'Familiarity with ES6',
    image: '/api/fb/n/files/icon%20Real-time%20information.svg',
    alt: 'Real-time information',
    description: 'We work with the latest version of ES6, the latest version of JavaScript, and understand how to use its new features, such as destructuring, arrow functions, and template literals.'
  },
  {
    title: 'Knowledge of Single-Page Applications (SPAs)',
    image: '/api/fb/n/files/lack-of-adequate-planning.svg',
    alt: 'SPA',
    description: 'Many modern web applications are built as single-page applications, and we have experience building SPAs and understanding the concepts behind them'
  },
  {
    title: 'Understanding of RESTful API Design',
    image: '/api/fb/n/files/api%20development.svg',
    alt: 'API Development',
    description: 'A good JavaScript developer should have experience consuming and working with RESTful APIs and understand the principles of good API design.'
  },
  {
    title: 'Attention to Details',
    image: '/api/fb/n/files/icon%20Better%20Analytics.svg',
    alt: 'Better Analytics',
    description: 'Our developers take pride in their work and are meticulous in their attention to detail. They are committed to delivering code that is clean, well-documented, and easy to maintain. Familiarity with Source Control.'
  }
];

const serviceCards = [
  {
    title: 'Web Development',
    image: '/api/fb/n/files/Hire-JS-Dev.svg',
    alt: 'Web Development',
    description: `We develop custom web applications using JavaScript. Although JS is primarily used for front-end web development, where it's used to create dynamic, interactive user interfaces and add functionality to websites. However, we can also enable you to use JS for the server side using Node.js. We offer all sorts of JS web development`,
    link: 'https://finbyz.tech/web-application-development'
  },
  {
    title: 'Web-Based Application Development',
    image: '/api/fb/n/files/Hire-JS-Dev.svg',
    alt: 'Web-Based Application',
    description: 'We can help you build custom web-based applications to automate business processes, manage data, and improve productivity. Our team has extensive experience in developing applications using JavaScript, React, Node.js, and other related technologies',
    link: ''
  },
  {
    title: 'Desktop Applications',
    image: '/api/fb/n/files/Hire-JS-Dev.svg',
    alt: 'Desktop Applications',
    description: 'JavaScript can be used to create desktop applications through the use of technologies like Electron, which allows developers to build cross-platform desktop apps using web technologies like JavaScript, HTML, and CSS.',
    link: ''
  },
  {
    title: 'Mobile Application',
    image: '/api/fb/n/files/Hire-JS-Dev.svg',
    alt: 'Mobile Application',
    description: 'JavaScript can be used for mobile app development through hybrid mobile apps, Progressive Web Apps (PWAs), or frameworks specifically designed for mobile app development. Hybrid apps run within a native container and provide access to native device features. Frameworks like React Native, NativeScript, and Titanium SDK provide tools for building native-like mobile apps using JavaScript.',
    link: ''
  }
];

const jsFrameworkCards = [
  {
    front: (
      <div className="flex flex-col items-center justify-center py-6">
        <Image fill  src="/images/angular.svg" alt="angular" />
        <h3 className="mt-4 font-semibold text-lg">Angular</h3>
      </div>
    ),
    back: (
      <div className="flex flex-col items-center justify-center py-6 px-2">
        <h3 className="font-semibold text-lg mb-2">Angular</h3>
        <p className="text-sm text-muted-foreground">Angular is a full-fledged framework for building dynamic web applications, and it's used to create complex and feature-rich applications. Angular's two-way data binding and dependency injection make it a great choice for building large-scale applications, and its modular architecture makes it easy to maintain and scale code over time. Angular's most effective applications include video streaming platforms, weather apps, and travel websites.</p>
      </div>
    )
  },
  {
    front: (
      <div className="flex flex-col items-center justify-center py-6">
        <Image fill  src="/images/vuejs.svg" alt="vuejs" />
        <h3 className="mt-4 font-semibold text-lg">Vue.js</h3>
      </div>
    ),
    back: (
      <div className="flex flex-col items-center justify-center py-6 px-2">
        <h3 className="font-semibold text-lg mb-2">Vue.js</h3>
        <p className="text-sm text-muted-foreground">Vue.js is a progressive JavaScript framework for building user interfaces, and it's known for its simplicity and ease of use. Vue's template-based syntax and reactive data binding make it a great choice for building dynamic and interactive web applications. Vue's most effective applications include personal portfolios, landing pages, and small-scale web applications.</p>
      </div>
    )
  },
  {
    front: (
      <div className="flex flex-col items-center justify-center py-6">
        <Image fill  src="/images/express-js.svg" alt="express-js" />
        <h3 className="mt-4 font-semibold text-lg">Express</h3>
      </div>
    ),
    back: (
      <div className="flex flex-col items-center justify-center py-6 px-2">
        <h3 className="font-semibold text-lg mb-2">Express</h3>
        <p className="text-sm text-muted-foreground">Express is a fast, flexible, and minimalist framework for building web applications and APIs on top of Node.js. Express provides a simple and straightforward way to build server-side applications, and it's widely used for building RESTful APIs and web applications that require real-time functionality. Express's most effective applications include real-time chat apps, online marketplaces, and e-commerce websites.</p>
      </div>
    )
  },
  {
    front: (
      <div className="flex flex-col items-center justify-center py-6">
        <Image fill  src="/images/react.svg" alt="react" />
        <h3 className="mt-4 font-semibold text-lg">React</h3>
      </div>
    ),
    back: (
      <div className="flex flex-col items-center justify-center py-6 px-2">
        <h3 className="font-semibold text-lg mb-2">React</h3>
        <p className="text-sm text-muted-foreground">React is a JavaScript library for building user interfaces. It is used for building complex and dynamic web applications and is particularly well-suited for single-page applications (SPAs) and mobile apps. React is highly efficient and fast, and is maintained by Facebook.</p>
      </div>
    )
  }
];

const nodeJsFeatures = [
  {
    title: 'Asynchronous and Event-Driven',
    image: '',
    alt: '',
    description: 'Node.js is built on a non-blocking, event-driven architecture, which makes it highly scalable and efficient for handling multiple concurrent connections.'
  },
  {
    title: 'Single-threaded with Concurrency',
    image: '',
    alt: '',
    description: 'Node.js uses a single-threaded model with event looping, allowing it to handle many concurrent connections with high performance'
  },
  {
    title: 'Responsive',
    image: '',
    alt: '',
    description: 'Node.js is built on the V8 JavaScript engine, the same engine that powers Google Chrome, making it fast and efficient for executing JavaScript code.'
  },
  {
    title: 'Package Ecosystem',
    image: '',
    alt: '',
    description: 'Node.js has a rich ecosystem of modules and packages through npm (Node Package Manager), making it easy to add functionality to your projects.'
  },
  {
    title: 'Cross-platform',
    image: '',
    alt: '',
    description: 'Node.js is cross-platform and can run on Windows, macOS, and Linux, making it ideal for building applications that need to run on multiple platforms'
  },
  {
    title: 'Excellent for Building APIs',
    image: '',
    alt: '',
    description: 'Node.js is a popular choice for building APIs, as it is fast and efficient for handling multiple concurrent connections and is easily integrable with other technologies.'
  }
];

const jsReasons = [
  {
    title: 'Versatility',
    description: 'JavaScript is a versatile language that can be used for a wide range of applications, including front-end, back-end, and full-stack development. This versatility makes it a popular choice for developing dynamic websites, mobile applications, and desktop software.'
  },
  {
    title: 'Integrations',
    description: 'JavaScript can be easily integrated with other technologies and platforms, such as Node.js, allowing developers to create powerful web applications with ease.'
  },
  {
    title: 'Browser Support',
    description: 'JavaScript is natively supported by all modern browsers, which means that developers don\'t need to worry about compatibility issues or platform dependencies.'
  },
  {
    title: 'Dynamic Typing',
    description: 'JavaScript uses dynamic typing, which means that variables can change type at runtime. This makes it possible to write more flexible and expressive code, but it can also make debugging more challenging.'
  },
  {
    title: 'Speed',
    description: 'JavaScript has improved dramatically in terms of performance, and it is now possible to build fast and responsive applications using JavaScript.'
  },
  {
    title: 'Performance',
    description: 'With advancements in JavaScript engines, JavaScript code can now run faster and more efficiently, making it a good choice for demanding applications.'
  }
];

const jsNotFor = [
  {
    title: 'CPU-Intensive Tasks',
    description: 'JavaScript is not well-suited for computationally intensive tasks, such as image or video processing, as it is a single-threaded language and can become slow when processing large amounts of data.'
  },
  {
    title: 'Memory Management',
    description: 'JavaScript has a garbage collector that automatically manages memory, but it can sometimes lead to performance issues if not used correctly.'
  },
  {
    title: 'Security',
    description: 'JavaScript is a client-side language, which means that its code is executed on the user\'s device and can be easily manipulated or viewed by malicious actors.'
  },
  {
    title: 'Browser Compatibility',
    description: 'Different browsers may interpret JavaScript differently, which can result in inconsistencies between different browsers and can be a challenge for developers to work around.'
  },
  {
    title: 'Debugging',
    description: 'Debugging JavaScript can be challenging, especially in complex applications, as it can be difficult to track down errors and bugs in the code.'
  },
  {
    title: 'Learning Curve',
    description: 'While JavaScript is relatively easy to learn, it can take time to master and requires a good understanding of programming concepts and web development best practices.'
  }
];

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Hire JavaScript Developer"
        highlightWords={heroHighlightWords}
        description="Looking to hire JavaScript developers? Our expert JS programmers craft dynamic, interactive front-end apps tailored to your needs."
        primaryButton={{
          text: 'Get Started',
          action: () => {
            window.location.href = '/contact';
          }
        }}
        secondaryButton={{
          text: 'View Portfolio',
          action: () => {
            window.location.href = '/portfolio';
          }
        }}
        heroImage={{
          alt: 'Hire JavaScript Developer',
          src: '/api/fb/n/files/Hire-JS-Dev.svg',
          
        }}
      />

      <Section>
        <div className="container-custom py-8 flex flex-col gap-6">
          <QuoteBlock
            text="Welcome to Finbyz Tech  - Your One-Stop Shop for All Your Java Script Development Needs!"
            isHeading={true}
          />
          <div className="flex flex-col gap-4">
            <p className="text-base text-muted-foreground">
              We are a team of highly skilled and experienced full-stack JavaScript developers, dedicated to delivering top-notch solutions to businesses of all sizes. Our passion for technology and our commitment to excellence have earned us a reputation as a leading provider of JavaScript development services.
            </p>
            <p className="text-base text-muted-foreground">
              At Finbyz Tech, we offer a range of services to meet the diverse needs of our clients. Whether you are looking to build a new website, enhance an existing one, or develop a complex web-based application, we have the expertise to help you achieve your goals.
            </p>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title={serviceCards[0].title}
            image={serviceCards[0].image}
            alt={serviceCards[0].alt}
            description={serviceCards[0].description}
          />
          <FeatureCard
            title={serviceCards[1].title}
            image={serviceCards[1].image}
            alt={serviceCards[1].alt}
            description={serviceCards[1].description}
          />
        </div>
        <div className="container-custom py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title={serviceCards[2].title}
            image={serviceCards[2].image}
            alt={serviceCards[2].alt}
            description={serviceCards[2].description}
          />
          <FeatureCard
            title={serviceCards[3].title}
            image={serviceCards[3].image}
            alt={serviceCards[3].alt}
            description={serviceCards[3].description}
          />
        </div>
      </Section>
     

      <Section>
        <div className="container-custom py-8 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-center mb-4">Our Expertise with Javascript Frameworks</h2>
          <QuoteBlock
            text="JavaScript has a large number of frameworks that make it easier for developers to build complex applications and improve the overall performance and efficiency of their code. Here are some of the most popular JavaScript frameworks, along with their most effective applications."
            isHeading={false}
          />
        </div>
        

       
      </Section>

       <Section useGradient>
      ` <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jsFrameworkCards.map((card, idx) => (
            <FlipCard
              key={idx}
              front={card.front}
              back={card.back}
              className="h-full"
            />
          ))}
        </div>
      </Section>


      <div className="clear-both py-8"></div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
      <Section>
        <div className="container-custom py-8 flex flex-col gap-6">
          <h2 className="text-2xl font-bold mb-4">Node.JS Development Company</h2>
          <p className="text-base text-muted-foreground">
            Node.js, or simply Node, is a free, open-source, cross-platform JavaScript runtime environment that executes JavaScript code on the server side. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
          </p>
          <p className="text-base text-muted-foreground">
            Node.js allows developers to use JavaScript, a language commonly used for client-side scripting in web browsers, on the server side. This enables developers to build full-stack web applications using a single language, making it easier to manage and maintain the codebase.
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {nodeJsFeatures.map((feature, idx) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                image=""
                alt={feature.title}
                description={feature.description}
              />
            ))}
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {nodeJsFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 w-full h-full text-center"
              >
               

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 m-10">{feature.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-base opacity-90 transition-opacity duration-300 hover:opacity-100">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center mb-8">Why to Choose Finbyz Tech?</h2>
          <WhyChooseFinbyzGrid features={whyChooseFeatures} />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center mb-8">Most Compelling Reasons to Consider JS for Your All Software Needs</h2>
          <CircleReasonTabs reasons={jsReasons} />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center mb-8">Where JS shall not be used?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {jsNotFor.map((item, idx) => (
              <div key={item.title} className="rounded-xl bg-white shadow p-6 flex flex-col items-center border border-muted transition hover:shadow-lg">
                <CheckCircle2 className="text-primary mb-2" size={36} />
                <p className="font-semibold text-lg mb-2 text-center">{item.title}</p>
                <p className="text-sm text-muted-foreground text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* flex flex-col items-center */}
      <Section>
        <div className="py-8 ">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Hire JavaScript Developers?',
                icon: 'UserPlus',
              },
              title: 'Let’s Build Your Next Project Together',
              description: 'Contact us today to discuss your requirements and get a free consultation with our JavaScript experts.',
              primaryButton: {
                text: 'Get a Free Consultation',
                icon: 'ArrowRight',
                action: () => {
                  window.location.href = '/contact';
                }
              },
              secondaryButton: {
                text: 'See Our Work',
                icon: 'Eye',
                action: () => {
                  window.location.href = '/portfolio';
                }
              },
              trustIndicator: {
                text: 'Trusted by 100+ Clients',
                icon: 'ShieldCheck',
              }
            }}
          />
        </div>
      </Section>
    </>
  );
}
