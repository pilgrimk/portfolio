import images from '../constants/images'

const heroSection = {
  title: "Let's Elevate Your Online Presence",
  subtitle: `Your partner in crafting a successful digital presence`,
};

const navlinks = [
  {
    link_title: 'Home',
    link_to: 'home'
  },
  {
    link_title: 'About',
    link_to: 'about'
  },
  {
    link_title: 'Projects',
    link_to: 'projects'
  },
  {
    link_title: 'Contact',
    link_to: 'contact'
  },
];

const contactMe = {
  title: 'Contact Me',
  first_name: 'Kevin',
  last_name: 'Pilgrim',
  full_name: 'Kevin Pilgrim',
  name_short: 'KPilgrim',
  street: 'PO Box 3573',
  city: 'Scottsdale',
  state: 'Arizona',
  state_short: 'AZ',
  postal: '85271',
  mobile: '801-759-9947',
  email: 'pilgrimka1@yahoo.com',
  social_media: [
    {
      title: 'Facebook',
      link: 'https://www.facebook.com/kevin.pilgrim.184/'
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/kevin.pilgrim.184/'
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/pilgrimka1'
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/kevinpilgrim/'
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

const projectsSection = {
  title: 'Projects',
  projects: [
    {
      title: 'Movies Preview',
      sub_title: '',
      url: 'https://movies-preview-kp.netlify.app',
      imgUrl: images.movies_preview_app,
      img_alt: 'movies preview',
      desc: 'A full-stack personal project that utilized a RESTful API movie database to display upcoming movies allowing users to search, review and rate their preferences.',
      tech: 'React, JavaScript, ASP.Net RESTful API, Firebase Auth',
    },
    {
      title: 'Kiss Analog',
      sub_title: '',
      url: 'https://kiss-analog-test.netlify.app/',
      imgUrl: images.kiss_analog,
      img_alt: 'kiss analog',
      desc: 'A full-stack test site built for a friend that utilized a RESTful API and MongoDB for his electronic component review site with active blog posts.',
      tech: 'React, JavaScript, ASP.Net RESTful API, MongoDB',
    },
    {
      title: 'CSS Construction LLC',
      sub_title: '',
      url: 'https://cssconstructionllc.com/',
      imgUrl: images.css_construction_llc,
      img_alt: 'css construction',
      desc: 'A live informational site built for a close friend who needed an internet presence for his construction company, demonstrating services offered.',
      tech: 'React, JavaScript, Cloudinary',
    },
    {
      title: 'Peak Performance',
      sub_title: '',
      url: 'https://faith-peak-performance.com/',
      imgUrl: images.peak_performance,
      img_alt: 'peak performance',
      desc: 'A live informational site built for a close friend who needed an internet presence for her personal training gym, demonstrating services offered.',
      tech: 'React, JavaScript, Cloudinary',
    },
    {
      title: 'NBCS',
      sub_title: '',
      url: 'https://northbeachschutzhundclub.com/',
      imgUrl: images.dogs_playing,
      img_alt: 'dogs',
      desc: 'A live informational site built for a close friend who needed an internet presence for their schutzhund club, intruducing the club along with upcoming events.',
      tech: 'React, JavaScript',
    },
    {
      title: 'Open AI Dall-E Clone',
      sub_title: '',
      url: 'https://dalle-clone-client.netlify.app/',
      imgUrl: images.dall_e,
      img_alt: 'dall-e clone',
      desc: 'A YouTube lesson project that allows users to personally prompt a Dall-E AI image generator engine and then display and/ or store the output image.',
      tech: 'React, JavaScript, OpenAI, Express, MongoDB, Cloudinary',
    },
    {
      title: 'Gericht Restaurant',
      sub_title: 'Fine dining tutorial',
      url: 'https://gericht-restaurent-test.netlify.app/',
      imgUrl: images.gericht,
      img_alt: 'restaurant',
      desc: 'A YouTube lesson project that demonstates an informational site for a sample high end restaurant.',
      tech: 'React, JavaScript',
    },
    {
      title: 'eCommerce Site',
      sub_title: '',
      url: 'https://ecomm-test-kp.netlify.app/',
      imgUrl: images.ecomm,
      img_alt: 'eComm',
      desc: 'A YouTube lesson project that demonstates an eCommerce site where users may use Stripe credit card processing to purchase products.',
      tech: 'React, JavaScript, Stripe Payment Processing',
    },
    {
      title: 'Home Service Groups',
      sub_title: '',
      url: 'https://homeservicegroups.com/',
      imgUrl: images.home_service_groups,
      img_alt: 'home service',
      desc: 'A personal project that allows users to upload .HAR files from Zillow or Redfin and then display available properties with purchase information on a display map.',
      tech: 'React, JavaScript, ASP.Net RESTful API, MapBox',
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
  title: 'Boost Your Business',
  desc: [
    'Engage and Convert: Our websites are built to engage visitors and convert them into loyal customers. With responsive designs and seamless functionality, we ensure a great user experience on any device. Invest in a website that works as hard as you do.',
    'Contact me today and lets get started on creating or updating your online presence!',
  ],
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

const data = {
  heroSection,
  navlinks,
  aboutSection,
  projectsSection,
  workHistorySection,
  contactMe,
  pricePlanSection,
};

export default data;