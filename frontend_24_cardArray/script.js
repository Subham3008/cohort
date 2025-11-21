const users = [
  {
    fullname: "Subham Samanta",
    image: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Frontend Developer",
    tag: "JavaScript, React",
    paragraph: "Passionate about creating modern UI with smooth animations and clean code."
  },
  {
    fullname: "Riya Sharma",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "UI/UX Designer",
    tag: "Figma, Prototyping",
    paragraph: "Designs user-friendly layouts with attention to detail and brand consistency."
  },
  {
    fullname: "Arjun Verma",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    designation: "Backend Developer",
    tag: "Node.js, MongoDB",
    paragraph: "Focuses on building secure, scalable server-side applications."
  },
  {
    fullname: "Megha Singh",
    image: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Full Stack Developer",
    tag: "MERN Stack",
    paragraph: "Works on both frontend and backend to deliver complete product solutions."
  }
];
let sum = ''
users.forEach(function (elem, idx) {
  sum += `<div id="${idx}" class="card">
      <img src="${elem.image}" alt="image">
      <h1>${elem.fullname}</h1>
      <h2>${elem.designation}</h2>
      <h3>${elem.tag}</h3>
      <p>${elem.paragraph}</p>
    </div>`
})
let main = document.querySelector('main')
main.innerHTML = sum

