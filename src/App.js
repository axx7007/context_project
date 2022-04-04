import { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeContext } from './context';

import {Container,GroupsIcon,ToggleMode, NotificationsIcon, MessageDotsIcon, SettingsIcon, FileMediaIcon, Wrapper,GridIcon, ContactsIcon, Text, MoonIcon, MobileContainer, Header, LeftArrow, SwitchIcon, Main, MainPicture} from './AppStyle'
function App() {
  const [mode, setMode]=useState(false)
  const [theme, setTheme]=useContext(ThemeContext)
  const dark={
    icon: 'black',
    title: 'black',
    background: 'white'
  }
  const light={
    icon: 'white',
    title: 'white',
    background: 'black',
}
const onChange = () =>{
  setMode(!mode)
  setTheme(mode ? dark : light )
  console.log(theme)
  
}

  
  return (
    <Container>
      <MobileContainer color={theme.background}>
      <Header>
        <LeftArrow color={theme.title} />
        <SwitchIcon color={theme.title} />
      </Header>
      <Main>
        <MainPicture />
        <Text color={theme.title}>Abduvaxobov Xojiakbar</Text>
      </Main>
      <Wrapper>
        <MoonIcon/>
        <Text color={theme.title}>Dark Mode</Text>
        <ToggleMode 
        size={50}
        onChange={onChange}
        checked={mode}
        />
      </Wrapper>
      <Wrapper>
        <GridIcon/>
        <Text color={theme.title}>Story</Text>
      </Wrapper>
      <Wrapper>
      <ContactsIcon />
        <Text color={theme.title}>Chat heads</Text>
      </Wrapper>
      <Wrapper>

        <GroupsIcon />
        <Text color={theme.title}>Groups</Text>      
      </Wrapper>
      <Wrapper>
      <FileMediaIcon />
      <Text color={theme.title}>Media and photos</Text>
      </Wrapper>
      <Wrapper>
          <SettingsIcon />
          <Text color={theme.title}>Settings and privacy</Text>
      </Wrapper>
      <Wrapper>
        <MessageDotsIcon/>
        <Text color={theme.title}>Help centre</Text>
      </Wrapper>
      <Wrapper>
        <NotificationsIcon />
        <Text color={theme.title}>Notification</Text>
      </Wrapper>
      </MobileContainer>
    </Container>
  );
}

export default App;
