// import "./Languages.css";
// import ProgressBar from "../ProgressBar/ProgressBar";

// function Languages() {
//   return (
//     <div>
//       <h1 className="languages-title">Languages</h1>
//       <div className="languages-details">
//         <h3>Arabic</h3>
//         <ProgressBar progress={90} />
//         <h3>English</h3>
//         <h3>Turkish</h3>
//         <h3>Spanish</h3>
//       </div>
//     </div>
//   );
// }
// export default Languages;

import "./Languages.css";
import ProgressBar from "../ProgressBar/ProgressBar";

function Languages() {
  const languages = [
    { name: "Arabic", progress: 90 },
    { name: "English", progress: 75 },
    { name: "Turkish", progress: 50 },
    { name: "Spanish", progress: 30 },
  ];
  return (
    <div>
      <h1 className="languages-title">Languages</h1>
      <div className="languages-details">
        {languages.map((language) => (
          <div key={language.name} className="language-item">
            <h3>{language.name}</h3>
            <ProgressBar progress={language.progress} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
