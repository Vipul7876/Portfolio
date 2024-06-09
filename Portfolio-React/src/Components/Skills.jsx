import './Css/Skills.css';

export default function Skills() {
  return (
    <div className='skills'>
      <div className='skills-container'>
        <h1>My Skills</h1>
        <p>I put your ideas and thus your wishes in the form of a unique web project that inspires me and you.</p>
        <div className='skills-cards'>
          <div className='skills-card'>
            <div>
              <img src="./Icons/html.svg" alt="" />
              <p>60%</p>
            </div>
            HTML
            </div>
          <div className='skills-card'>
            <div>
              <img src="./Icons/css.svg" alt="" />
              <p>60%</p>
            </div>
            CSS
            </div>
          <div className='skills-card'>
            <div>
              <img id='javascript' src="./Icons/javascript.svg" alt="" />
              <p>65%</p>
            </div>
            JAVASCRIPT
            </div>
          <div className='skills-card'>
            <div>
              <img src="./Icons/react.svg" alt="" />
              <p>65%</p>
            </div>
            REACT
            </div>
        </div>
      </div>
    </div>
  )
}
