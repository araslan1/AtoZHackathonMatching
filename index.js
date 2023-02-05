let person_list = []
let urls = []
const submitBtn = document.getElementById("submit_btn")
const fullnameEl = document.getElementById("fname")
const emailEl = document.getElementById("email")
const majorEl = document.getElementById("major")
const skillsEl = document.getElementById("skills")
const hackathon_goalEl = document.getElementById("hackathon_goal")
const userimageEl = document.getElementById("userimage")
const main_profile_pageEl = document.getElementById("wrappertwo")
const person_object = JSON.parse(localStorage.getItem("personslist"))
const urls_object = JSON.parse(localStorage.getItem("urlslist"))
let fullname
let email
let major
let skills
let hackathon_goal
let file
let url
//let userimage

class Person {
    constructor(name, email, major, skills, hackathon_goal){
        this.name = name;
        this.email = email;
        this.major = major;
        this.skills = skills;
        this.hackathon_goal = hackathon_goal
    }
}

if (person_object && urls_object){
    person_list = person_object
    urls = urls_object
    render(person_list, urls)
}

userimageEl.addEventListener("change", ()=>{
    const fr = new FileReader()
    fr.readAsDataURL(userimageEl.files[0])
    fr.addEventListener("load", ()=>{
        url = fr.result
        urls.push(url)
        localStorage.setItem("urlslist", JSON.stringify(urls))
    })
})

submitBtn.addEventListener("click", function(){
    fullname = fullnameEl.value
    email = emailEl.value
    major = majorEl.value
    skills = skillsEl.value
    hackathon_goal = hackathon_goalEl.value
    if (fullname === "" || email === "" || major === "" || skills === "" || hackathon_goal === ""){
        return;
    }
    // file = (userimageEl.files)[0]
    //set storages!
    //set storages!
    let new_user = new Person(fullname, email, major, skills, hackathon_goal)
    person_list.push(new_user)
    localStorage.setItem("personslist", JSON.stringify(person_list))
    render(person_list, urls)
    fullnameEl.value = ""
    emailEl.value = ""
    majorEl.value = ""
    skillsEl.value = ""
    hackathon_goalEl.value = ""
    userimageEl.files = []
    userimageEl.value = ""
})


function render(list, linklist){
    let items = ``
    for (let i = 0; i < list.length; i++){
        fullname = list[i].name
        email = list[i].email
        major = list[i].major
        skills = list[i].skills
        hackathon_goal = list[i].hackathon_goal
        file = linklist[i]
        let string = `
            <h3>
        <img src="${file}" alt = "Zoe"/><br>
            <p>Name: ${fullname}<br>
            Major: ${major} <br>
            Skills: ${skills} <br>
            Hackathon goal: ${hackathon_goal} <br>
                  Email:
            <a href="zsilver@usc.edu">${email}</a></p>
            </h3>
        `
        items += string
    }
    main_profile_pageEl.innerHTML = items
}

// localStorage.clear()
