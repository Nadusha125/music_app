import MainPage from './pages/MainPage.jsx'
import style from './global.module.scss'
import Playbar from './components/Playbar/Playbar.jsx'


const App = () => 
<div className={style.wrapper}>
    <MainPage/>  
    <Playbar/>
</div>


export default App
