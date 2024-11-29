import "./App.css";
import profileData from "./data";
import isLight from "./isLight";

function App() {
  return (
    <div className="card">
      <Image src={profileData.avatar} alt={profileData.name} />
      <div className="card-text">
        <Name name={profileData.name} />
        <Bio bio={profileData.bio} />
        <div className="tags">
          {profileData.tags.map((obj) => (
            <Tag
              name={obj.name}
              level={obj.level}
              color={obj.color}
              isLight={isLight(obj.color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} className="avatar" width={300} height={200}></img>
);

const Name = ({ name }) => <h1 className="name">{name}</h1>;

const Bio = ({ bio }) => <p className="bio">{bio}</p>;

function Tag({ name, level, color, isLight }) {
  return (
    <span
      className="tag"
      style={
        isLight
          ? { backgroundColor: color, color: "#0f172a" }
          : { backgroundColor: color }
      }
    >
      {name} {level}
    </span>
  );
}

export default App;
