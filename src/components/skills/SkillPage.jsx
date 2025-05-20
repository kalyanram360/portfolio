import React from 'react';

const SkillsPage = () => {

  const languages = [
    { 
      name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      level: 95
    },
    { 
      name: "C++", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      level: 85
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 60
    }
  ];


  const frameworks = [
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 65
    },
    { 
      name: "Django", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      level: 95
    },
    { 
      name: "FastAPI", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      level: 75
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      level: 20
    }

  ];


  const SkillCard = ({ skill }) => (
    <div className="bg-cyan-900/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-700/50 hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-cyan-800/50 p-3 rounded-full mr-4 w-16 h-16 flex items-center justify-center">
          <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-medium text-white">{skill.name}</h3>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-cyan-400 h-2.5 rounded-full" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <div className="mt-2 text-right text-gray-300 text-sm">{skill.level}%</div>
    </div>
  );

  return (
    <div className="pt-32 pb-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">My Skills</h1>
        
        {/* Languages Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="flex-grow h-px bg-cyan-700/50"></div>
            <h2 className="text-2xl font-semibold text-cyan-400 px-4">Languages</h2>
            <div className="flex-grow h-px bg-cyan-700/50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        
        {/* Frameworks Section */}
        <div>
          <div className="flex items-center mb-8">
            <div className="flex-grow h-px bg-cyan-700/50"></div>
            <h2 className="text-2xl font-semibold text-cyan-400 px-4">Frameworks</h2>
            <div className="flex-grow h-px bg-cyan-700/50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;