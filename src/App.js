import { useState } from 'react';
import './App.css';
import { 
  DetailPet,
  EditProfile,
  MarketingFooter,
  NavBar,
  PetsCollection 
} from './ui-components';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [pet, setPet] = useState();
  const [updatePet, setUpdatePet] = useState();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");



  const overridesNav = {
    Button: {
      onClick: () =>{
        setShowForm(!showForm);
        setUpdatePet(null)
      }
    }
  }
  const overridesForm = {
    image:{
      src: updatePet == null ? "https://img.icons8.com/color/50/000000/ dog" : updatePet.image,
    },
    TextFieldName:{
      placeholder: name
    },
    TextFieldAge:{
      placeholder: age
    },
    TextFieldBread:{
      placeholder: breed
    },
    TextFieldAbout:{
      placeholder: about
    },
    TextFieldImage:{
      placeholder: image
    },
    TextFieldColor:{
      placeholder: color
    },
    Icon: {
      onClick: () =>{
        setShowForm(!showForm);
      },
      style: {cursor: "pointer"}
    },
    Button37592707:{
      isDisabled: updatePet ? true : false, 
    },
    Button29766926: {
      isDisabled: !updatePet ? true : false, 
    }
  }
  const overridesDetail = {
    Icon: {
      onClick: () =>{
        setShowDetail(false);
      },
      style: {cursor: "pointer"}
    }
  }

  const overridesItemsPets = 
    ({item, index}) => ({
      overrides: {
        Button37532927: {
          onClick: () =>{
            setShowDetail(true);
            setPet(item)
          }
        },
        Button29766907: {
          onClick: () =>{
            if (!showForm) setShowForm(true)
            setUpdatePet(item)
            setName(item.name)
            setAge(item.age)
            setBreed(item.breed)
            setAbout(item.about)
            setImage(item.image)
            setColor(item.color)
          }
        }
      }
    })
  
  return (
    <div>
      <NavBar overrides={overridesNav}/>
      <header className="App-header">
        {
          showForm && (
          <div className='center'>
            <EditProfile overrides={overridesForm} />
          </div>)
        }
        {
          showDetail && (
            <div className='center'>
          <DetailPet pet={pet} overrides={overridesDetail}/>
          </div>
          )
        }
        <PetsCollection overrideItems={overridesItemsPets}/>
      </header>
      <MarketingFooter/>
    </div>
  );
}

export default App;
