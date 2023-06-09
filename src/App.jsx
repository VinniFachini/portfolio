import './App.css'
import InfoLine from './components/InfoLine'
import CommandLine from './components/CommandLine'
import LineContainer from './components/LineContainer'
import React, { useState } from 'react'

function App() {

  const [commands, setCommands] = useState([{lineType: "welcome", text: "Welcome to VinniFachini's Portfolio"},{lineType: "help", text: 'Type "help" for command list'}])

  const getCommand = (data) => {
    setCommands([...commands].concat({lineType: "command",text: data}))
    handleCommand(data) 
    console.log(commands)
  }

  const handleCommand = (command) => {
    if(command=="clear"){
      setCommands([])
    } else if (command == "help") {
      setCommands([...commands].concat({
        lineType: "command",
        text: command
      },{
        lineType: "help",
        text: 'Response for the “help” command'
      },{
        lineType: "help", 
        indented: true,
        command: 'reachme',
        commandFunction: 'Command for contact'
      },{
        lineType: "help", 
        indented: true,
        command: 'about',
        commandFunction: 'Command to know me better'
      },{
        lineType: "help", 
        indented: true,
        command: 'skills',
        commandFunction: 'Command to see what I have experience with'
      },{
        lineType: "help", 
        indented: true,
        command: 'xp',
        commandFunction: 'My experience in the field'
      },{
        lineType: "help", 
        indented: true,
        command: 'clear',
        commandFunction: 'Clear console'
      }))
    } else if (command == "reachme") {
      setCommands([...commands].concat({
        lineType: "command",
        text: command
      },{
        lineType: "help",
        text: 'Response for the "reachme" command'
      },{
        lineType: "help", 
        indented: true,
        command: 'Name',
        commandFunction: 'Vinícius de Carvalho Fachini'
      },{
        lineType: "help", 
        indented: true,
        command: 'Email',
        commandFunction: 'vinicius.fachini01@gmail.com'
      },{
        lineType: "help", 
        indented: true,
        command: 'Telephone Number',
        commandFunction: '+55 (18) 99624-8348'
      },{
        lineType: "help", 
        indented: true,
        command: 'LinkedIn Profile',
        commandFunction: 'https://linkedin.com/in/vinicius-fachini'
      },{
        lineType: "help", 
        indented: true,
        command: 'Github Profile',
        commandFunction: 'https://github.com/VinniFachini'
      }))
    } else if (command == "about") {
        setCommands([...commands].concat({
          lineType: "command",
          text: command
        },{
          lineType: "help",
          text: 'Response for the “about” command'
        },{
          lineType: "help", 
          indented: true,
          text: "Hey, my name is Vinícius, and I’m from Brazil, in the country side of the state of São Paulo, I’m currently 22 years old. I’ve started coding in 2020 due to the pandemic. I’ve always wanted be a scientist, to be more specific, I wanted to be a Chemister. Started to study Chemistry in the UNESP a very reputable University in Brazil, but 2 weeks into the course, the pandemic began and I gave up. I love to code but love other areas as well, like history and philosophy. My mother tongue is Portuguese but I really like English and I’m studying German" }))
    } else if (command == "skills") {
      setCommands([...commands].concat({
        lineType: "command",
        text: command
      },{
        lineType: "help",
        text: 'Response for the "skills" command'
      },{
        lineType: "help", 
        indented: true,
        command: 'Javascript: ',
        commandFunction: 'Advanced'
      },{
        lineType: "help", 
        indented: true,
        command: 'PHP: ',
        commandFunction: 'Beginner'
      },{
        lineType: "help", 
        indented: true,
        command: 'Python: ',
        commandFunction: 'Advanced'
      },{
        lineType: "help", 
        indented: true,
        command: 'C++: ',
        commandFunction: 'Beginner'
      },{
        lineType: "help", 
        indented: true,
        command: 'CSS: ',
        commandFunction: 'Advanced'
      },{
        lineType: "help", 
        indented: true,
        command: 'Sass: ',
        commandFunction: 'Average'
      },{
        lineType: "help", 
        indented: true,
        command: 'HTML: ',
        commandFunction: 'Advabced'
      },{
        lineType: "help", 
        indented: true,
        command: 'SQL: ',
        commandFunction: 'Beginner'
      },{
        lineType: "help", 
        indented: true,
        command: 'MySQL: ',
        commandFunction: 'Beginner'
      },{
        lineType: "help", 
        indented: true,
        command: 'React: ',
        commandFunction: 'Average'
      },{
        lineType: "help", 
        indented: true,
        command: 'VueJS: ',
        commandFunction: 'Advanced'
      },{
        lineType: "help", 
        indented: true,
        command: 'NodeJS: ',
        commandFunction: 'Advanced'
      },{
        lineType: "help", 
        indented: true,
        command: 'GIT: ',
        commandFunction: 'Average'
      },{
        lineType: "help", 
        indented: true,
        command: 'UI/UX: ',
        commandFunction: 'Beginner'
      },{
        lineType: "help", 
        indented: true,
        command: 'Excell: ',
        commandFunction: 'Advanced'
      },{
        lineType: "help", 
        indented: true,
        command: 'Linux: ',
        commandFunction: 'Advanced'
      },{
        lineType: "help", 
        indented: true,
        command: 'TailwindCSS: ',
        commandFunction: 'Beginner'
      }))
    } else if (command == "xp"){
      setCommands([...commands].concat({
        lineType: "command",
        text: command
      },{
        lineType: "help",
        text: 'Response for the "xp" command'
      },{
        lineType: "help", 
        indented: true,
        command: 'Company',
        commandFunction: 'Shoppub Plataforma de E-Commerce'
      },{
        lineType: "help", 
        indented: true,
        command: 'Role',
        commandFunction: 'Front End Developer'
      },{
        lineType: "help", 
        indented: true,
        command: 'Senority',
        commandFunction: 'Jr.'
      },{
        lineType: "help", 
        indented: true,
        command: 'Started',
        commandFunction: '09/2022'
      },{
        lineType: "help", 
        indented: true,
        command: 'Ended',
        commandFunction: 'Current Job'
      },{
        lineType: "help", 
        indented: true,
        command: 'About the Company',
        commandFunction: 'An user focused E-Commerce Platform'
      }))
    }
      else if (command == "ls --repo") {}

  }

  return (
      <div className="terminal">
        <div className="top-bar">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <LineContainer>
          {commands.map((item, index) => {
            return <InfoLine key={index} command={item.command} commandFunction={item.commandFunction} lineType={item.lineType} text={item.text} indented={item.indented} />
          })}
        </LineContainer>
        <CommandLine onSubmit={getCommand} />
      </div>
  )
}

export default App
