// question 53

let programmerKnowledge = {
     codingLanguages : ["JavaScript", "Python" , "Java", "C++"],
     tools : ["Visual Studio Code", "IntelliJ IDEA", "Eclipse", "PyCharm", "Sublime Text"],
     softwareFrameworks: ["React.js", "Angular", "Vue.js"]
}

let {codingLanguages, tools, softwareFrameworks} = programmerKnowledge
console.log(`codingLanguages: ${codingLanguages[0]}, tools: ${tools[3]}, softwareFrameworks: ${softwareFrameworks[1]}`)