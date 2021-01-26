import React from 'react' 
import ReactDOM from 'react-dom'
import Home from './src/home'
import 'antd/dist/antd.css'
const App = () => {
    return (
        <div style={{height:'100%',width:'100%'}} className='container'>
            <Home/>
        </div>
    )
}

const root = document.getElementById('root')
ReactDOM.render(<App/>,root)

