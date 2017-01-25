// Jquery's document ready handler
// 
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
        
      }
    },

    work: {
      jobs: [ 
        {
          employer: "" 
          title: "" 
          location: "" 
          dates: ""
          description: "" 
        }
      ],
      display: function() {

      }
    },

    projects: {
      projects: [
        {
          title: ""
          dates: ""
          description: ""
          images: ""
        }
      ],
      display: function() {
        
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

      }
    }
  };

});