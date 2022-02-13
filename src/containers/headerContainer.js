import React,{ useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components';
import * as Route from '../constants/routes';
import FirebaseContext from '../context/firebase';
import logo from '../logo.svg';

const Search = ({searchItem, setSearchItem}) => {
  const [searchActive, setSearchActive] = useState(false)
  console.log(searchActive);
  return(
    <div className='header-search'>
      <button className='search-icon'  onClick={() => setSearchActive((searchActive) => !searchActive )}>
        <img src="/images/icons/search.png" alt="Search" />
      </button>
      <input className={`search-input ${searchActive === true ? 'active' : ''}`} onChange={({target}) => setSearchItem(target.value)} value={searchItem} placeholder='Search films and movies' />
    </div>
  );
}
function HeaderContainer({ children, buttonTitle, backgroundUrl, Group, profile }) {
  const { firebase } = useContext(FirebaseContext);
  const [searchItem, setSearchItem] = useState('')
  return (
    <Header backgroundUrl={backgroundUrl}>
      <div className='container-header'>
        <Link to={Route.Home}><img className='Logo' src={logo} alt="Netflix" /></Link>
        {
          buttonTitle && <Link className='buttonLink' to={Route.SignIn}>{buttonTitle}</Link>}
        {
          Group && <div className='Group'>
            <Link><p>Series</p></Link>
            <Link><p>Flims</p></Link>
            <Search searchItem={searchItem} setSearchItem={setSearchItem}/>
            <div className='headerProfile'>
              <button className='picture' style={{ backgroundImage: `url("../images/users/${profile.photoURL}.png")` }} />
              <div className='headerDropdown'>
                <p onClick={() => firebase.auth().signOut()}>Sign Out</p>
              </div>
            </div>
          </div>
        }
      </div>
      {children}
    </Header>

  )
}

export default HeaderContainer;
