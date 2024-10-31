import images from '../constants/images'

const companyName = {
  name_long: 'KAP Enterprises',
  name_short: 'KAP',
  name_legal: 'KAP Enterprises LLC'
}

const heroSection = {
  title: 'Empowering Businesses with AI Automation & Custom Websites.',
  subtitle: 'Transforming operations and enhancing online presence for small and medium-sized businesses.',
  desc: 'We specialize in crafting innovative solutions to help businesses automate and grow. From AI-powered automation systems to beautifully designed websites, we provide custom tools that allow you to work smarter and engage customers more effectively.'
};

const navlinks = [
  {
    link_title: 'Home',
    link_to: 'home'
  },
  {
    link_title: 'Automations',
    link_to: 'automations'
  },
  {
    link_title: 'Websites',
    link_to: 'websites'
  },  
  {
    link_title: 'About',
    link_to: 'about'
  },  
  {
    link_title: 'Contact',
    link_to: 'contact'
  },
];

const contactUs = {
  title: 'Contact Us',
  name_long: `${companyName.name_long}`,
  name_short: `${companyName.name_short}`,
  first_name: 'Kevin',
  last_name: 'Pilgrim',
  full_name: 'Kevin Pilgrim',  
  street: 'PO Box 3573',
  city: 'Scottsdale',
  state: 'Arizona',
  state_short: 'AZ',
  postal: '85271',
  mobile: '801-759-9947',
  email: 'kevin@kap-enterprises-llc.com',
  social_media: [
    {
      title: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=61565148474498&mibextid=LQQJ4d/'
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/kap_enterprises_22/'
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/pilgrimka1'
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/kevinpilgrim/'
    }
  ],
  info: [
    {
      title: `Get in Touch with Us!`,
      desc: `We’d love to hear from you! Whether you have questions about our services, need more information, or are ready to explore how KAP Enterprises can help elevate your business, feel free to reach out. Simply fill out the Contact Us form below, and our team will respond promptly to assist you with your inquiries. Your feedback and ideas are invaluable to us as we strive to provide the best solutions for your needs.`
    },
    {
      title: `Schedule Your Free Consultation`,
      desc: `Ready to take the next step? Click the "Schedule" button to book a free consultation at your convenience. During this one-on-one session, we'll discuss your business goals and how our services can help you achieve them. This is a great opportunity to explore custom solutions tailored specifically for you, so don’t hesitate—let’s connect and start your journey toward success today!`
    }    
  ]
}

const aboutSection = {
  title: 'About Me',
  subtitle: 'A Little About Me',
  desc: [
    "I have a very diverse background having lived in numerous places throughout my life. I was born in Montreal, Canada but spent the majority of my first 6 years living with my grandparents in the Caribbean, Port of Spain, Trinidad.  I then moved to the US permanently at the age of 6 being raised predominantly in Upstate New York, Buffalo, Rochester, Albany, and Brooklyn with some years being spent in Pittsburg, PA. I moved out west in the mid-1990s living in Phoenix, Arizona, and Salt Lake City, Utah.",
    "My work history reflects that same diversity. I graduated from Union College with a bachelor's degree in Applied Mathematics and have spent the vast majority of my career as a software engineer.  In that capacity I've worked in varying fields from college administration, business software, the semiconductor industry, medical EMR systems, property management and now web development.",
    "I have one beautiful daughter who is the apple of my eye!  I spent 17 years raising her in Salt Lake City and now that she's moved to Phoenix with me as a young adult, I couldn't be happier.  I try my best to be a good example to her of how to embrace continued learning, self improvement, an attitude of gratitude, personal fitness, and a healthy, grounded lifestyle.",
    "I try to stay very active by getting to the gym 3-4 times a week.  I enjoy hiking, mountain biking, paddle boarding, volleyball, and coffee house chess.  I also homebrew as a hobby, really enjoying hoppy IPAs and malty brews.",
  ],
}

const automationsSection = {
  title: 'AI Automations',
  subtitle: 'Transforming Business with AI Automation',
  video_src: 'https://www.youtube.com/embed/6QIvOvcv7hM',
  video_desc: `Discover how ${companyName.name_long}’ custom AI automation transforms prospect management! This video demonstrates a sample automated CRM system, built with Airtable, Make.com, and ChatGPT, guiding you through prospect intake, meeting scheduling, proposal sending, and project management handoff. See how our tailored AI workflows help small and medium-sized businesses save time and streamline operations. Watch to learn more about boosting productivity!`,
  key_benefits: {
    title: `Why Choose AI Automation with ${companyName.name_long}`,
    desc:`Unlock the power of AI to streamline your business operations and enhance productivity. With AI-driven automation, your business can reduce time-consuming manual tasks, allowing your team to focus on what they do best. By automating processes like data entry, client outreach, and project management transitions, we help you create a seamless workflow that saves time and minimizes errors. Our AI automations are built to personalize each interaction, engage clients with timely, relevant communications, and organize your data securely in real-time. Plus, these solutions are scalable, meaning they grow and adapt alongside your business, giving you a flexible and sustainable edge in your market.`,
    benefits: [
      { 
        name: `Increased Efficiency`,
        desc: `Save time with automated processes.`
      },
      {
        name: `Personalized Engagement`,
        desc: `AI-driven communication tailored to each prospect.`
      },
      {
        name: `Improved Data Management`,
        desc: `Real-time updates and centralized data`
      },
      {
        name: `Scalable Solutions`,
        desc: `Automations that grow with your business.`
      }
    ]
  },
  how_it_works: {
    title: `How It Works`,
    desc: [
      `At ${companyName.name_long}, we specialize in building AI-driven automation solutions tailored to meet the unique needs of small and medium-sized businesses. Our automation process combines advanced tools and technologies to streamline a variety of workflows, from CRM systems and email campaigns to social media content management and video production. By leveraging platforms like Make.com, Airtable, and Cal.com, we automate data flow and task coordination, seamlessly connecting different parts of your business.`,
      `Each AI solution we create is designed to handle the heavy lifting—whether it's personalizing client communications, automating cold email outreach, or generating on-brand social media content. Our integrations with ChatGPT enable smart, responsive interactions and personalized messaging across multiple channels. Additionally, we use specialized tools like PandaDoc for document automation and workflow tracking, so every proposal or contract can be managed efficiently. With KAP Enterprises’ automation systems, you gain the ability to optimize operations, boost engagement, and focus on strategic growth, knowing your repetitive tasks are handled by intelligent, custom-built workflows.`,
      `Examples of systems that we've built include: `
    ],
    automations: [
      { 
        name: `CRM System`,
        desc: `AI-powered CRM systems streamline client management from initial contact to project handoff. Automated workflows handle data entry, personalized outreach, and status updates, ensuring a seamless, organized process for tracking and nurturing client relationships.`
      },
      {
        name: `Social Media Content System`,
        desc: `Our Social Media Content automation keeps your channels active and engaging. With AI-driven scheduling, content generation, and targeted posting, this system ensures consistent, on-brand communication with your audience across platforms—saving time and increasing engagement.`
      },
      {
        name: `Cold Email Campaign System`,
        desc: `AI-powered automation handles outreach campaigns with ease, generating personalized email sequences designed to engage prospects. With AI-driven insights, the system can customize messages, track responses, and help turn cold leads into warm opportunities, boosting the efficiency of your marketing efforts.`
      },
      {
        name: `Travel Blog Content System`,
        desc: `For travel-focused businesses, our content automation generates SEO-optimized blog posts tailored to your audience's interests. By combining AI writing tools and scheduled publishing, we provide fresh, valuable content that drives engagement and enhances your brand's online presence.`
      },
      {
        name: `AI-Driven Video Generation System`,
        desc: `Our video generation system leverages AI to create tailored video content, perfect for marketing, education, or client engagement. From scriptwriting to video editing, this automation simplifies production, making high-quality video content accessible without extensive time or resources.`
      }
    ]
  },
  call_to_action: {
    title: `Ready to Transform Your Business?`,
    desc: `Unlock new levels of efficiency and growth with ${companyName.name_long}’ custom AI automation solutions. Whether you're looking to streamline client management, enhance your marketing, or simplify content creation, our tailored systems are designed to fit your unique needs. Book a free consultation with us to discuss how our AI-driven workflows can automate the tasks holding you back, freeing up your team to focus on what they do best. Let’s talk about how automation can empower your business to thrive!`
  }
}

const websitesSection = {
  title: 'Websites',
  subtitle: 'Boost Your Business',
  desc: 'Engage and Convert: Our websites are built to engage visitors and convert them into loyal customers. With responsive designs and seamless functionality, we ensure a great user experience on any device. Invest in a website that works as hard as you do.',  
  projects: [
    {
      title: 'Epik Mill And Cabinet',
      sub_title: '',
      url: 'https://epikmillandcabinet.com/',
      imgUrl: images.epik_mill_and_cabinet,
      img_alt: 'epik mill and cabinet',
      desc: `A live informational site built for a client who needed an internet presence for his custom cabinetry company, demonstrating services offered.`,
      tech: 'React, JavaScript, Email.JS, Cloudinary',
    },    
    {
      title: 'Kiss Analog',
      sub_title: '',
      url: 'https://kiss-analog-test.netlify.app/',
      imgUrl: images.kiss_analog,
      img_alt: 'kiss analog',
      desc: `A full-stack test site that utilized a RESTful API and MongoDB for client's electronic component review site with active blog posts.`,
      tech: 'React, JavaScript, ASP.Net RESTful API, MongoDB',
    },
    {
      title: 'CSS Construction LLC',
      sub_title: '',
      url: 'https://cssconstructionllc.com/',
      imgUrl: images.css_construction_llc,
      img_alt: 'css construction',
      desc: `A live informational site built for a client who needed an internet presence for his construction company, demonstrating services offered.`,
      tech: 'React, JavaScript, Cloudinary',
    },
    {
      title: 'Peak Performance',
      sub_title: '',
      url: 'https://faith-peak-performance.com/',
      imgUrl: images.peak_performance,
      img_alt: 'peak performance',
      desc: `A live informational site built for a client who needed an internet presence for her personal training gym, demonstrating services offered.`,
      tech: 'React, JavaScript, Cloudinary',
    },
    {
      title: 'NBCS',
      sub_title: '',
      url: 'https://northbeachschutzhundclub.com/',
      imgUrl: images.dogs_playing,
      img_alt: 'dogs',
      desc: `A live informational site built for a client who needed an internet presence for their schutzhund club, intruducing the club along with upcoming events.`,
      tech: 'React, JavaScript',
    },
    {
      title: 'Gericht Restaurant',
      sub_title: 'Fine dining tutorial',
      url: 'https://gericht-restaurent-test.netlify.app/',
      imgUrl: images.gericht,
      img_alt: 'restaurant',
      desc: `An informational site for a sample high end restaurant.`,
      tech: 'React, JavaScript',
    },
    {
      title: 'eCommerce Site',
      sub_title: '',
      url: 'https://ecomm-test-kp.netlify.app/',
      imgUrl: images.ecomm,
      img_alt: 'eComm',
      desc: `An eCommerce site where users may use Stripe credit card processing to purchase products.`,
      tech: 'React, JavaScript, Stripe Payment Processing',
    }
  ],
};

const workHistorySection = {
  title: "Selected Work History",
  work_history: [
    {
      title: 'Freelance Web Developer',
      sub_title: '',
      company: 'Self-Employed',
      address1: 'PO Box 3573',
      city: 'Scottsdale',
      state: 'AZ',
      postal: '85271',
      hire_dates: '2022 - Pres',
      experience: [
        'Designed, developed, and deployed multiple professional websites meeting client specifications and deadlines',
        'Collaborated closely with clients to understand their vision and deliver tailored solutions that exceed expectations',
        'Employed use of responsive design techniques to ensure optimal user experience across various device platforms',
        'Implemented React, JavaScript, TailwindCSS and RESTful API technologies to deliver responsive web applications, some of which are demonstrated in the PROJECTS segment above',
        'Extensive use of Microsoft Visual Studio Code, Postman, MongoDB and GitHub repository',
      ]
    },
    {
      title: 'Software Engineer II',
      sub_title: '',
      company: 'Yardi Systems, Inc',
      address1: '9200 E Pima Center Pkwy',
      city: 'Scottsdale',
      state: 'AZ',
      postal: '85258',
      hire_dates: '2015 - 2024',
      experience: [
        'Software developer for a nationwide property management, software development company; responsible for application development and rolling out of code enhancements for clients utilizing our existing code base',
        'Personally responsible for the addition of several third-party functionality integrations and code enhancements to include Twilio SMS messaging service, RSign documentation integration, Yardi Credit Card Processing and HTML-5 email functionality',
        'Participated in multiple design upgrades allowing our applications to maintain compliance in meeting PCI audit requirements',
        'Extensive use of Microsoft Visual Studio (VB.Net, C#), SoapUI and Oracle SQL Developer',
      ]
    },
    {
      title: 'Interface Developer',
      sub_title: '',
      company: 'ChartLogic, Inc',
      address1: '3995 South 700 East, Ste 200',
      city: 'Salt Lake City',
      state: 'UT',
      postal: '84107',
      hire_dates: '2008 - 2015',
      experience: [
        'Interface developer for a nationwide medical software development company; personally responsible for providing communication software between our proprietary EMR system and various medical PMS systems, laboratory systems, medical billing systems, scheduling systems and national medical agencies utilizing SQL, VB.NET software and HL7 messaging protocol',
        'Responsible for the design, architecture and implementation of our hosted EMR interface mechanism making use of Corepoint software, our proprietary CLXCentralizedService and SQL databases to process an average of 3.5 million monthly interface messages in support of over 200 hosted client systems',
        'Extensive use of Microsoft Visual Studio (VB.Net, C#) and Microsoft SQL Server',
      ]
    },
    {
      title: 'Senior Staff Engineer',
      sub_title: 'Software Lead',
      company: 'Novellus Systems',
      address1: '305 N. 54th Street',
      city: 'Chandler',
      state: 'AZ',
      postal: '85226',
      hire_dates: '1997 - 2003',
      experience: [
        'Software Engineer or Software Lead Engineer in several machine control development projects to include Automated Wafer Mapping and Enhanced Wet Mode on the Capella Cleaner machine, CEPD Requirement Enhancements, AutoID Tag Reader, SMIF Port Serial Communication and SECS/GEM Communication on the Auriga-C CMP Machine. Machine programming, VB.',
        'Demonstrated ability to quickly apply newly acquired programming skills in the areas of machine controls, serial/digital communication protocols and component programming towards the successful completion of several development projects.',
        'Demonstrated technical knowledge of CMP products while performing installations and software upgrades at key domestic and international customer sites to include Austin Texas, Dresden Germany, Taipei Taiwan and Seoul Korea.'
      ]
    },
    {
      title: 'Software Engineer',
      sub_title: '',
      company: 'Viasoft',
      address1: '3033 N. 44th Street',
      city: 'Phoenix',
      state: 'AZ',
      postal: '85018',
      hire_dates: '1996 - 1997',
      experience: [
        'Software Engineer in the development of Bridge2000, a mainframe-based Y2K solutions application. Pascal, Cobol, VAX/VMS',
        'Demonstrated ability to quickly apply new skills in mainframe-based application development, becoming a key member in the development team responsible for successfully bringing a complex and high-profile application to market on schedule.'
      ]
    },
    {
      title: 'Software Engineer',
      sub_title: 'Program Analyst',
      company: 'USA Group TRG',
      address1: '4343 E. Camelback Rd',
      city: 'Phoenix',
      state: 'AZ',
      postal: '85018',
      hire_dates: '1994 - 1996',
      experience: [
        'Software Engineer and Systems Analyst utilizing programming skills in the development of several client-server based applications to include a User-defined Business Rules Processor engine, Project Management application, Person/ BioDemo application, University Recruitment/ Admissions Program application.',
        'Uniface, PowerBuilder, SQL, Database design'
      ]
    },
    {
      title: 'Software Engineer',
      sub_title: 'Program Analyst',
      company: 'General Electric',
      address1: 'Industrial Power Supply',
      city: 'Schenectady',
      state: 'NY',
      postal: '12345',
      hire_dates: '1993 - 1994',
      experience: [
        'Implemented several new functionalities during the development of the Cadence Program which utilized data output from a mainframe-based Materials Resource Planning application to create what-if scenarios in a client/server-based environment and maintained system support for a user community of sixty. Uniface, SQL.'
      ]
    },
  ]
};

const pricePlanSection = {
  title: 'Affordable Pricing',
  desc: `${companyName.name_long} offers a range of website development packages designed to meet the unique needs of businesses at any stage. Whether you're looking for a streamlined starter site, a fully customized online presence, or an advanced e-commerce platform, our tiered packages let you choose a solution that aligns with your goals and budget. Each package includes expert design, seamless functionality, and responsive support to ensure your website not only looks great but also delivers a top-tier user experience. Explore our options below to find the ideal package for your business.`,
  price_plans: [
    {
      name: 'Basic',
      title: 'Simple front-end',
      price: '$750',
      desc: 'Simple web app, no upgraded features',
      features: {
        functional_website: true,
        social_media_icons: true,
        image_gallery: true,
        email_cal_contact: false,
        content_upload: false,
        database: false,
        payment_processing: false,
        hosting_setup: true,
        pages: 3,
        revisions: 1,
        delivery_time: 14,
      }
    },
    {
      name: 'Standard',
      title: 'Medium scale web application',
      price: '$1250',
      desc: 'Medium web app, 1-2 upgraded features*',
      features: {
        functional_website: true,
        social_media_icons: true,
        image_gallery: true,
        email_cal_contact: true,
        content_upload: false,
        database: true,
        payment_processing: false,
        hosting_setup: true,
        pages: 5,
        revisions: 2,
        delivery_time: 21,
      }
    },
    {
      name: 'Premium',
      title: 'Large scale web application',
      price: '$2950',
      desc: 'Large web app, 3 or more upgraded features*',
      features: {
        functional_website: true,
        social_media_icons: true,
        image_gallery: true,
        email_cal_contact: true,
        content_upload: true,
        database: true,
        payment_processing: true,
        hosting_setup: true,
        pages: 7,
        revisions: 3,
        delivery_time: 45,
      }
    },      
  ]
} 

const payments = {
  title: 'Payments',
  subtitle: 'Secure Payment Capability',
  desc: `At ${companyName.name_long}, your security is our priority. We’ve implemented trusted and secure payment processing to protect your information. Your payment details are encrypted and processed through a secure network to ensure confidentiality and peace of mind. Rest assured that your transaction is handled with the highest standards of security.`,
}

const data = {
  heroSection,
  navlinks,
  aboutSection,
  automationsSection,
  websitesSection,
  workHistorySection,
  contactUs,
  pricePlanSection,
  companyName,
  payments
};

export default data;