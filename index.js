//Team Data
const team = [
    {
      id: "anna",
      fullName: "Anna Kendrick",
      jobTitle: "Front-end Ninja",
      backgroundColor:"#008B8B",
      bio:
        "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=annakendrick"
    },
    {
      id: "harry",
      fullName: "Harry Fawn",
      jobTitle: "Illustrator",
      backgroundColor:"#FFF8DC",
      bio:
        "Creates new illustrations each week, will kill for coffee, and loves beaches",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=harryfawn"
    },
    {
      id: "sofia",
      fullName: "Sofia Sultan",
      jobTitle: "Backend Engineer",
      backgroundColor:"#1E90FF",
      bio:
        "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sofiasulta"
    }
  ];
  
  //Modify Code below this line
  
  //Content Selected using ID.
  const content = document.getElementById("content");
  team.forEach((team)=>{
    const newElement=document.createElement("div");
    newElement.className=`team-member w-50`
    newElement.id=`${team.id}`
    newElement.style=`background-color: ${team.backgroundColor};`
    newElement.innerHTML=`<img  src=${team.avatar} width="100" height="100" alt=${team.id}>
              
    <h2>${team.fullName}</h2>
    <h3>${team.jobTitle}</h3>
    <p>${team.bio}</p>`

    content.append(newElement);
  })
  
  // /**
  //  * Creates and img HTML element with given src and alt
  //  * @param {string} src - Source for image
  //  * @param {string} alt - Alt text for image
  //  * @returns An Image HTML Element
  //  */
  // const getImageElement = (src, alt) => {
  //   return;
  // };
  
  // /**
  //  * Creates a new card with passed parameters.
  //  * @param {string} id - Unique id from team data
  //  * @param {string} fullName - Name of the team member
  //  * @param {string} jobTitle - Job title of the team memeber
  //  * @param {string} bio - Description Bio
  //  * @param {string} avatar - Source of the avatar image.
  //  * @returns section HTML element with Image and Text
  //  */
  // function generateCard(id, fullName, jobTitle, bio, avatar) {
  //   //1. Create a new "section" element and set the className and id
  
  //   //2. Generate the image using getImageElement() function
  //   //Hint - Use fullname as alt for the image.
  
  //   //3. Create a div for text content
  
  //   //4. Create an h2 for fullName
  
  //   //5. Create an h3 for jobTitle
  
  //   //6. Create a p for bio
  
  //   //7. Append the fullName, jobTitle, and bio element
  //   //   to the div created for text.
  
  //   //8. Append the Image and the Text div
  //   //   to the new section you created in step 1
  
  //   //Return the new section element created.
  //   return;
  // }
  
  // /**
  //  * Generates and returns an array of HTML elements
  //  * @param {Array} data Team data array
  //  */
  // function generateCardArray(data) {
  //   const cards = [];
  //   //Add logic to populate `cards` array below
  
  //   //Return cards array
  //   return cards;
  // }
  
  // const cardsArray = generateCardArray(team);
  
  // //Run a loop for the cardsArray and append its elements to content.
  // for (let card of cardsArray) {
  //   content.append(card);
  // }
  // //Modify Code above this line
  