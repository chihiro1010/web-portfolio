import "./App.css";
import Item from "./components/Item";
import Profile from "./components/Profile";
import itemData from "./itemData.json";

function App() {
  const itemsData = itemData.items,
    profileData = itemData.profile;

  return (
    <div className="App">
      <Profile
        image={profileData.image}
        name={profileData.name}
        from={profileData.from}
        residence={profileData.residence}
        birthday={profileData.birthday}
      ></Profile>
      {itemsData.map((item) => (
        <Item
          key={item.title}
          siteLink={item.siteLink}
          image={item.image}
          summary={item.summary}
          title={item.title}
          tech={item.tech}
          githubLink={item.githubLink}
          className="items"
        ></Item>
      ))}
    </div>
  );
}
export default App;
