import styled from 'styled-components';
import {IosArrowLeft} from '@styled-icons/fluentui-system-filled/IosArrowLeft'
import {Switch} from '@styled-icons/icomoon/Switch'
import {MoonFill} from '@styled-icons/bootstrap/MoonFill'
import {Grid} from '@styled-icons/bootstrap/Grid'
import {Contacts} from '@styled-icons/remix-line/Contacts'
import {Groups} from '@styled-icons/material-outlined/Groups'
import {FileMedia} from '@styled-icons/octicons/FileMedia';
import {Settings} from '@styled-icons/feather/Settings'
import {MessageDots} from '@styled-icons/boxicons-regular/MessageDots'
import {Notifications} from '@styled-icons/ionicons-outline/Notifications'
import Toggle from 'react-dark-mode-toggle'


export const ToggleMode = styled(Toggle)`
margin-left: auto ;
outline:none ;
`
export const LeftArrow = styled(IosArrowLeft)`
width:25px;
height:25px;
color: ${({color})=>color};
`

export const Container = styled.div`
display:flex;
flex-direction:column;
width:100wh;
height:100vh ;
padding: 10px 300px;
`

export const MobileContainer = styled.div`
width:400px;
height:fit-content;
border: 1px solid black;
border-radius:10px;
padding: 30px 30px;
background-color:${({color})=>color} ;
`

export const Header = styled.div`
display:flex;
justify-content: space-between ;
`
export const SwitchIcon = styled(Switch)`
width:25px;
height:25px;
color: ${({color})=>color};
`

export const Main = styled.div`
width:100%;
height:200px;
display:flex;
flex-direction:column ;
justify-content:center;
align-items:center;
`
export const MainPicture = styled.div`
width:150px;
height:150px;
border-radius:50%;
border:1px solid black;
`
export const Wrapper = styled.div`
display:flex;
display:flex;
/* justify-content:center; */
align-items:center;
margin-left:20px ;
margin-top:15px ;

`
export const MoonIcon = styled(MoonFill)`
width:25px;
height:25px;
`
export const Text = styled.h1`
font-size:16px;
margin-left:20px ;
color:${({color})=>color};
`
export const GridIcon=styled(Grid)`
width:25px;
height:25px;
color:orange ;
`
export const ContactsIcon = styled(Contacts)`
width:25px;
height:25px;
color: lightblue;
`
export const GroupsIcon = styled(Groups)`
width:30px;
height:30px;
color: red;
`

export const FileMediaIcon = styled(FileMedia)`
width:25px;
height:25px;
color: #2240f0;
`
export const SettingsIcon = styled(Settings)`
width:25px;
height:25px;
color: #2240f0;
`

export const MessageDotsIcon = styled(MessageDots)`
width:25px;
height:25px;
color: #22f0ab;
`

export const NotificationsIcon = styled(Notifications)`
width:25px;
height:25px;
color: #22f0ab;
`




