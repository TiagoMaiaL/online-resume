// Jquery's document ready handler
$(function() {

  // Replaces the %data% occurrences on the text 
  // passed with the data argument provided.
  var replaceData = function(text, data) {
    return text.replace("%data%", "[" + JSON.stringify(data) + "]");
  }

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
          replaceData(resumeTemplate.about, this)
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
          replaceData(resumeTemplate.work, this)
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
          replaceData(resumeTemplate.projects, this)
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