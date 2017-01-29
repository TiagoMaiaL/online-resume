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
      role: "Mobile / Web Developer",
      welcomeMessage: "Lorem ipsum dolor sit amet, consectetur \
      adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
      commodo consequat.",
      about: "Duis aute irure dolor in reprehenderit in voluptate \
      velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, \
      sunt in culpa qui officia deserunt mollit anim id est laborum.",
      contacts: {
        github: '#',
        email: '#',
        linkedin: '#'
      },
      skills: 'js, html, css, php, objective-c',
      devicons: {
        html: 'devicon-html5-plain',
        css: 'devicon-css3-plain',
        sass: 'devicon-sass-original',
        jquery: 'devicon-javascript-plain',
        javascript: 'devicon-jquery-plain',
        node: 'devicon-nodejs-plain',
        bower: 'devicon-bower-plain',
        gulp: 'devicon-gulp-plain',
        php: 'devicon-php-plain',
        laravel: 'devicon-laravel-plain',
        git: 'devicon-git-plain',
        github: 'devicon-github-plain',
        ios: 'devicon-apple-original'
      },
      pictureUrl: "",
      display: function() {
        $('section.about').append(
          replaceData(resumeTemplate.about, this)
        );
      }
    },

    work: {
      jobs: [
        {
          employer: "Lorem Ipsum",
          title: "Web developer",
          location: "Brasília area, Brazil",
          date: "11-2099",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          employer: "Lorem Ipsum",
          title: "Web developer",
          location: "Brasília area, Brazil",
          date: "11-2099",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          employer: "Lorem Ipsum",
          title: "Web developer",
          location: "Brasília area, Brazil",
          date: "11-2099",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          employer: "Lorem Ipsum",
          title: "Web developer",
          location: "Brasília area, Brazil",
          date: "11-2099",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }
      ],
      display: function() {
        $('section.work').append(
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
            codepen: '#',
            github: '#',
            demo: '#'
          }
        },
        {
          title: "Lorem Ipsum",
          dates: "24/02/2016",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          images: [],
          links: {
            codepen: '#',
            github: '#',
            demo: '#'
          }
        },
        {
          title: "Lorem Ipsum",
          dates: "24/02/2016",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          images: [],
          links: {
            codepen: '#',
            github: '#',
            demo: '#'
          }
        }
      ],
      display: function() {
        $('section.projects-sample').append(
          replaceData(resumeTemplate.projects, this)
        );
      }
    },

    education: {
      schools: [
        {
          name: "School name",
          location: "Brasilia, Brazil",
          degree: "Degree title",
          majors: "Major text",
          dates: "12/11/2099",
          url: "www.schoolname.com"
        }
      ],
      onlineCourses: [
        {
          title: "Front end nanodegree",
          school: "Udacity",
          dates: "12/11/2099",
          url: "www.udacity.com"
        }
      ],
      display: function() {
        $('section.education').append(
          replaceData(resumeTemplate.education, this)
        );
      }
    },
    contacts: {
      contacts: {},
      display: function() {
        $('section.contact').append(
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