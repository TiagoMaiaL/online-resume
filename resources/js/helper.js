// Jquery's document ready handler
$(function() {

  // Replaces the %data% occurrences on the text
  // passed with the data argument provided.
  var replaceData = function(text, data) {
    return text.replace("%data%", JSON.stringify(data));
  }

  // Object tree responsible for keeping the resume
  // information used in the template.
  var author = {
    bio: {
      name: "Tiago Maia",
      role: "iOS / Web Developer",
      welcomeMessage: "Hello, I&apos;m Tiago Maia, an iOS and Web Developer located at Brasília, Brazil. Applications and problems solving are the things I appreciate doing.",
      about: "I really enjoy writing clean and testable code for apps and web sites that follow the specified design specifications and contribute to the user&apos;s life, with a special care for it&apos;s needs and interactions.",
      contacts: { // TODO: Move this object to an external variable.
        github: "https://github.com/TiagoMaiaL",
        email: "mailto:tiago.maia.lopes@gmail.com",
        linkedin: "https://www.linkedin.com/in/tiago-maia?trk=nav_responsive_tab_profile"
      },
      skills: "I have interests for different tools and technologies, but right now I&apos;m focused in these: JS, HTML, CSS, PHP, Objective-c and Swift.",
      devicons: {
        html: "devicon-html5-plain",
        css: "devicon-css3-plain",
        sass: "devicon-sass-original",
        jquery: "devicon-javascript-plain",
        javascript: "devicon-jquery-plain",
        node: "devicon-nodejs-plain",
        bower: "devicon-bower-plain",
        gulp: "devicon-gulp-plain",
        php: "devicon-php-plain",
        laravel: "devicon-laravel-plain",
        git: "devicon-git-plain",
        github: "devicon-github-plain",
        ios: "devicon-apple-original"
      },
      pictureUrl: "",
      display: function() {
        $("section.about").append(
          replaceData(resumeTemplate.about, this)
        );
      }
    },

    work: {
      jobs: [
        {
          employer: "Ideia Inteligência",
          title: "Web developer",
          location: "Brasília area, Brazil",
          date: "01-2017",
          description: "I&apos;ve worked mostly with the server-side stack of the application, using Laravel, Postgres and ElasticSearch, writing clean code, delivering automated tests and creating new endpoints for the company&apos;s product. I&apos;ve also worked with AngularJS, delivering code to interact directly with the user&apos;s browser."
        },
        {
          employer: "Ideia Inteligência",
          title: "iOS Developer",
          location: "Brasília area, Brazil",
          date: "10-2015",
          description: "I&apos;ve developed, maintained and delivered high-quality iOS applications built with Objective-C/Swift, always following the proper code style guide, implementing tests and monitoring performance. I also have a good eye for design and I&apos;ve always followed the designer&apos;s UX/UI specification to implement a pixel-perfect layout and deliver the best possible experience to the end-user."
        },
        {
          employer: "Adjetiva",
          title: "iOS Developer",
          location: "Brasília area, Brazil",
          date: "11-2014",
          description: "I&apos;ve developed, maintained and delivered high-quality iOS applications built with Objective-C/Swift, always following the proper code style guide, implementing tests and monitoring performance. I also have a good eye for design and I&apos;ve always followed the designer&apos;s UX/UI specification to implement a pixel-perfect layout and deliver the best possible experience to the end-user."
        },
        {
          employer: "Radiola Design & Publicidade",
          title: "Front-End Developer",
          location: "Brasília area, Brazil",
          date: "02-2014",
          description: "I&apos;ve developed and maintained websites using HTML, CSS, and Javascript. My concerns were to write code that was testable, clean, maintainable and simple. I&apos;ve always followed the design specifications and created web-sites that were reliable and a joy to use.",
        }
      ],
      display: function() {
        $("section.work").append(
          replaceData(resumeTemplate.work, this)
        );
      }
    },

    projects: {
      projects: [
        {
          title: "Lorem Ipsum",
          dates: "24/02/2016",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          images: [],
          links: {
            codepen: "#",
            github: "#",
            demo: "#"
          }
        },
        {
          title: "Lorem Ipsum",
          dates: "24/02/2016",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          images: [],
          links: {
            codepen: "#",
            github: "#",
            demo: "#"
          }
        },
        {
          title: "Lorem Ipsum",
          dates: "24/02/2016",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          images: [],
          links: {
            codepen: "#",
            github: "#",
            demo: "#"
          }
        }
      ],
      display: function() {
        $("section.projects-sample").append(
          replaceData(resumeTemplate.projects, this)
        );
      }
    },

    education: {
      schools: [
        {
          name: "Fundação Bradesco",
          location: "Brasilia, Brazil",
          degree: "high school diploma",
          majors: "",
          dates: "2012",
          url: ""
        }
      ],
      onlineCourses: [
        {
          title: "Front end nanodegree",
          school: "Udacity",
          dates: "In progress",
          url: "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
        }
      ],
      display: function() {
        $("section.education").append(
          replaceData(resumeTemplate.education, this)
        );
      }
    },
    contacts: {
      contacts: {
        github: "https://github.com/TiagoMaiaL",
        email: "mailto:tiago.maia.lopes@gmail.com",
        linkedin: "https://www.linkedin.com/in/tiago-maia?trk=nav_responsive_tab_profile"
      },
      callAction: "Do you have any project, or want to know more about me? Feel free to get in touch.",
      display: function() {
        $("section.contact").append(
          replaceData(resumeTemplate.contacts, this)
        );
      }
    }
  };

  // Calls display on all objects within the author one,
  // Appending each element section to the html.
  for (section in author) {
    author[section].display();
  }

});