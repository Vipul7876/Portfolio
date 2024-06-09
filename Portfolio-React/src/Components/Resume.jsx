import './Css/Resume.css';

export default function Resume () {
  return (
    <div className='resume'>
      <div className='resume-container'>
        <div className='resume-left'>
          <h1>
            <img src="./Icons/experience.svg" alt="" /> My Experience
          </h1>
          <ul>
            <li>
              <p>2023-2024</p>
              <h2>Infovirtech Pvt. Ltd</h2>
              <p>3-months Internship</p>
              <p>Mughalsarai, Uttar Pradesh</p>              
            </li>
            <li>
              <p>2023-2023</p>
              <h2>Solitaire Infosys Pvt. Ltd</h2>
              <p>6-months Industrial Training</p>
              <p>Mohali, Punjab</p>
            </li>
            <li>
              <p>2021</p>
              <h2>Neilit</h2>
              <p>2-months Internship</p>
              <p>Haridwar, Uttarakhand</p>              
            </li>
          </ul>
        </div>
        <div className='resume-right'>
          <h1>
            <img src="./Icons/education.svg" alt="" /> My Education
          </h1>
          <ul>
            <li>
              <p>2019-2023</p>
              <h2>B.Tech in Computer Science</h2>
              <p>Punjabi University</p>
              <p>Patiala</p>
            </li>
            <li>
              <p>2018-2019</p>
              <h2>12 <sup>th</sup></h2>
              <p>D.A.V Sen. Sec. Public School, Paonta Sahib</p>
              <p>Himachal Pradesh</p>
            </li>
            <li>
              <p>2016-2017</p>
              <h2>10 <sup>th</sup></h2>
              <p>Vivek International Public School, Baddi</p>
              <p>Himachal Pradesh</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
