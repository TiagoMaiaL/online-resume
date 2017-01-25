// Jquery's document ready handler
$(function() {

  // Object tree responsible for keeping the resume 
  // information used in the template.
  var author = {
    bio: {
      name: "",
      role: "",
      welcomeMessage: "",
      contacts: {

      },
      skills: [

      ],
      pictureUrl: "",
      display: function() {
        $('section.about').append(
          resumeTemplate.about.replace("%data%", JSON.stringify(this))
        );
      }
    },

    work: {
      jobs: [ 
        {
          employer: "", 
          title: "",
          location: "",
          dates: "",
          description: "",
        }
      ],
      display: function() {
        $('section.work').append(
          resumeTemplate.work.replace("%data%", JSON.stringify(this))
        );
      }
    },

    projects: {
      projects: [
        {
          title: "",
          dates: "",
          description: "",
          images: "",
        }
      ],
      display: function() {
        $('section.projects-sample').append(
          resumeTemplate.projects.replace("%data%", JSON.stringify(this))
        );
      }
    },

    education: {
      schools: [
        {
          name: "",
          location: "",
          degree: "",
          majors: "",
          dates: "",
          url: ""
        }
      ],
      onlineCourses: [
        {
          title: "",
          school: "",
          dates: "",
          url: ""
        }
      ],
      display: function() {
        $('section.education').append(
          resumeTemplate.education.replace("%data%", JSON.stringify(this))
        );
      }
    },
    contacts: {
      contacts: {},
      display: function() {
        $('section.contact').append(
          resumeTemplate.contacts.replace("%data%", JSON.stringify(this.data))
        );
      }
    }
  };

  // Calls display on all objects within the author one.
  for (section in author) {
    author[section].display();
  }

});