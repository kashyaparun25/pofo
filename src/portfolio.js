import React from 'react';
import ReactDOM from 'react-dom';

const AboutMe = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-6">
      <img
        src="your-photo.jpg"
        alt="Your Name"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
      />
      <div>
        <h2 className="text-xl font-bold mb-2">About Me</h2>
        <p className="text-gray-600">
          Hi, I'm a [Your Profession]! I specialize in data science, machine learning, and web development.
        </p>
      </div>
    </div>

    <div>
      <h3 className="text-lg font-bold">Education</h3>
      <p className="text-gray-600">Bachelor's in Computer Science, 2020-2024</p>
      <p className="text-gray-500">University Name</p>
    </div>

    <div>
      <h3 className="text-lg font-bold">Certifications</h3>
      <ul className="list-disc ml-6">
        <li>AWS Solutions Architect, 2024</li>
        <li>Google Data Analytics, 2023</li>
      </ul>
    </div>
  </div>
);

const Projects = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Projects</h2>
    <div className="space-y-4">
      <div className="border p-4 rounded-lg shadow">
        <h3 className="font-bold">Project 1</h3>
        <p className="text-gray-600">A description of your first project.</p>
      </div>
      <div className="border p-4 rounded-lg shadow">
        <h3 className="font-bold">Project 2</h3>
        <p className="text-gray-600">A description of your second project.</p>
      </div>
    </div>
  </div>
);

const Articles = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Articles</h2>
    <ul>
      <li><a href="#" className="text-blue-600">Article 1: Data Science Tips</a></li>
      <li><a href="#" className="text-blue-600">Article 2: Machine Learning Basics</a></li>
    </ul>
  </div>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = React.useState('about');

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <nav className="flex gap-4 mb-8">
        <button
          className={`py-2 px-4 ${activeTab === 'about' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'projects' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'articles' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('articles')}
        >
          Articles
        </button>
      </nav>

      {activeTab === 'about' && <AboutMe />}
      {activeTab === 'projects' && <Projects />}
      {activeTab === 'articles' && <Articles />}
    </div>
  );
};

ReactDOM.render(<Portfolio />, document.getElementById('root'));
